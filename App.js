import React from 'react';
import { StyleSheet, View,Text,TouchableOpacity} from 'react-native';
import{Entypo} from '@expo/vector-icons';
import {Button} from 'native-base';


var itemArray =new Array(9).fill('empty');
export default class App extends React.Component{
  
constructor(props)
{
  super(props);
  this.state={
    isCross:false,
    winMessage:""
  }
}
  
drawitem=(itemNumber)=>
{
  //decide what to draw: circle or cross or default
  if(itemArray[itemNumber]==="empty")
  {
    itemArray[itemNumber]=this.state.isCross;
    this.setState({isCross:!itemArray[itemNumber]},()=>{});
  }
    // check for win

    this.winGame();
}

chooseItemIcon=(itemNumber)=>
{
  //chooose appropriate icon
  if(itemArray[itemNumber]!=="empty"){
    return itemArray[itemNumber] ? "cross":"circle";
  }
  return "pencil";


}

chooseItemColor=(itemNumber)=>
{
  //choose color for icon

  if(itemArray[itemNumber]!=="empty"){
    return itemArray[itemNumber] ? "red":"green";
  }
  return "black";
}

resetGame=()=>
{
  //TODO:reset all values and states

  itemArray.fill("empty");
  this.setState({winMessage:''})

  // force update to the component

this.forceUpdate();
}

winGame=()=>
{
  //decide /check winner
  if((itemArray[0]!=="empty")&&(itemArray[0]==itemArray[1])&&
  itemArray[1]==itemArray[2]){
    this.setState({winMessage:(itemArray[0]? 'cross':'circle')
    .concat('win') })
  }
  else if((itemArray[3]!=="empty")&&(itemArray[3]==itemArray[4])&&
  itemArray[4]==itemArray[5]){
    this.setState({winMessage:(itemArray[0]? 'cross':'circle')
    .concat('win') })
  }
  else if((itemArray[6]!=="empty")&&(itemArray[6]==itemArray[7])&&
  itemArray[7]==itemArray[8]){
    this.setState({winMessage:(itemArray[0]? 'cross':'circle')
    .concat('win') })
  }
  else if((itemArray[0]!=="empty")&&(itemArray[0]==itemArray[3])&&
  itemArray[3]==itemArray[6]){
    this.setState({winMessage:(itemArray[0]? 'cross':'circle')
    .concat('win') })
  }
  else if((itemArray[1]!=="empty")&&(itemArray[1]==itemArray[5])&&
  itemArray[5]==itemArray[7]){
    this.setState({winMessage:(itemArray[0]? 'cross':'circle')
    .concat('win') })
  }
  else if((itemArray[2]!=="empty")&&(itemArray[2]==itemArray[5])&&
  itemArray[5]==itemArray[8]){
    this.setState({winMessage:(itemArray[0]? 'cross':'circle')
    .concat('win') })
  }
  else if((itemArray[0]!=="empty")&&(itemArray[0]==itemArray[4])&&
  itemArray[4]==itemArray[8]){
    this.setState({winMessage:(itemArray[0]? 'cross':'circle')
    .concat('win') })
  }
  else if((itemArray[2]!=="empty")&&(itemArray[2]==itemArray[4])&&
  itemArray[4]==itemArray[6]){
    this.setState({winMessage:(itemArray[0]? 'cross':'circle')
    .concat('win') })
  }
}
render(){
  

    return (
     <View style={styles.container}>
       <View style={styles.grid}>
         <View style={styles.row}>
           <View style={styles.item}>
             <TouchableOpacity
             onPress={()=>this.drawitem(0)}>
               <Entypo
               name={this.chooseItemIcon(0)}
               size={50}
               color={this.chooseItemColor(0)}
               />
             </TouchableOpacity>
           </View>
           <View style={styles.item}>
             <TouchableOpacity
             onPress={()=>this.drawitem(1)}>
               <Entypo
               name={this.chooseItemIcon(1)}
               size={50}
               color={this.chooseItemColor(1)}
               />
             </TouchableOpacity>
           </View>
           <View style={styles.item}>
             <TouchableOpacity
             onPress={()=>this.drawitem(2)}>
               <Entypo
               name={this.chooseItemIcon(2)}
               size={50}
               color={this.chooseItemColor(2)}
               />
             </TouchableOpacity>
           </View>
         </View>
         <View style={styles.row}>
           <View style={styles.item}>
             <TouchableOpacity
             onPress={()=>this.drawitem(3)}>
               <Entypo
               name={this.chooseItemIcon(3)}
               size={50}
               color={this.chooseItemColor(3)}
               />
             </TouchableOpacity>
           </View>
           <View style={styles.item}>
             <TouchableOpacity
             onPress={()=>this.drawitem(4)}>
               <Entypo
               name={this.chooseItemIcon(4)}
               size={50}
               color={this.chooseItemColor(4)}
               />
             </TouchableOpacity>
           </View>
           <View style={styles.item}>
             <TouchableOpacity
             onPress={()=>this.drawitem(5)}>
               <Entypo
               name={this.chooseItemIcon(5)}
               size={50}
               color={this.chooseItemColor(5)}
               />
             </TouchableOpacity>
           </View>
         </View>
         <View style={styles.row}>
           <View style={styles.item}>
             <TouchableOpacity
             onPress={()=>this.drawitem(6)}>
               <Entypo
               name={this.chooseItemIcon(6)}
               size={50}
               color={this.chooseItemColor(6)}
               />
             </TouchableOpacity>
           </View>
           <View style={styles.item}>
             <TouchableOpacity
             onPress={()=>this.drawitem(7)}>
               <Entypo
               name={this.chooseItemIcon(7)}
               size={50}
               color={this.chooseItemColor(7)}
               />
             </TouchableOpacity>
           </View>
           <View style={styles.item}>
             <TouchableOpacity
             onPress={()=>this.drawitem(8)}>
               <Entypo
               name={this.chooseItemIcon(8)}
               size={50}
               color={this.chooseItemColor(8)}
               />
             </TouchableOpacity>
           </View>
         </View>
       </View>
       <Text style={styles.winMessage}>
       {this.state.winMessage}</Text>
       <Button full rounded primary style={styles.button}onPress={()=>this.resetGame()}>
         <Text style={styles.btntext}>Reset Game </Text>
       </Button>
     </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#FFF",
    alignItems:"center",
    justifyContent: "center"
  },
  grid:
  {

  },
  row:
  {
    flexDirection:"row"
  },
  item:
  {
    borderColor:"#000",
    borderWidth:2,
    padding:30
  },
  winMessage:
  {
    padding:20,
    fontSize:35,
    fontWeight: "bold"
  },
  button:{
    margin:20,
    padding:10
  },
  btntext:
  {
    color:"#fff",
    fontWeight:"bold"
  }
})