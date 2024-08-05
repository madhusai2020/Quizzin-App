import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function FirstQuestion(props) {
  const ScreenNameMovie = 'SecondQuestion'

 const scorecMovie=5;
  const scorewMovie=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Movie Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignItems:"center"}}>What is the highest grossing movie of all time?</Text> 
          <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://images2.alphacoders.com/131/1315111.jpg"}}></Image>
          </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70}}>  
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:scorewMovie, data2: ScreenNameMovie})}><Text style={{ fontSize:20}}>Avengers: Endgame</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", marginLeft:50,justifyContent:"center", alignItems:"center"}} onPress={()=>{props.navigation.navigate('CorrectMovie', {datacMovie:scorecMovie, data2:ScreenNameMovie})}}><Text style={{fontSize:20}}>Avatar</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100,justifyContent:"center",flex:1, alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:scorewMovie, data2: ScreenNameMovie})}><Text style={{fontSize:20}}>Avengers: Infinity War</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:scorewMovie, data2: ScreenNameMovie})}><Text style={{ fontSize:20}}>Titanic</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}