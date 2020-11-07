import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput} from 'react-native';


export default class WriteStoryScreen extends React.Component{
  render(){
    return(
      <View style = {styles.container}>
        
        <TextInput
          style = {styles.inputBoxA}
          placeHolder = "Story Title"
        />
        <TextInput
          style = {styles.inputBoxC}
          placeHolder = "Author"
        />
        <TextInput
          style = {styles.inputBoxB}
          placeHolder = "Story!"
        />
        <TouchableOpacity style = {styles.submitButton}>
          <Text style = {styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  inputBoxA:{
    flex: 1,
    width: 800,
    height: 50,
    fontSize: 20,
    backgroundColor:'turquoise',
    color:'#FFFFFF',
    justifyContent:'center',
    marginTop:10
  },
  inputBoxB:{
    flex: 1,
    width: 1000,
    height: 400,
    color:'#FFFFFF',
    backgroundColor:'turquoise',
    marginTop:100,
    justifyContent:'center'
    
  },
  inputBoxC:{
    flex: 1,
    width: 800,
    height: 50,
    color:'#FFFFFF',
    backgroundColor:'turquoise',
    marginTop:100,
    justifyContent:'center'
  },
  buttonText : {
    fontSize : 20,
  }
});