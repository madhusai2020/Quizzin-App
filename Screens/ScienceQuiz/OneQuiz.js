import React,{useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function OneQuiz(props) {
  const ScreenNameScience = 'TwoQuiz'

 const scorecScience=5;
  const scorewScience=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Science Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30}}>What is the hardest material in the world?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/176982445/photo/ruby-xl.jpg?s=612x612&w=0&k=20&c=XjNZgXXR6ipGOVkSsV7UNnBbEaD48VbkB3wyKg-ArAk="}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50,flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center',alignItems:'center'}} onPress={()=>{props.navigation.navigate('CorrectScreenScience', {datacScience:scorecScience, data2:ScreenNameScience})}}><Text style={{fontSize:20, alignSelf:'center'}}>Diamond</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100, alignItems:'center', justifyContent:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:scorewScience, data2: ScreenNameScience})}><Text style={{ fontSize:20, alignSelf:'center'}}>Emerald</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1, alignSelf:'center', height:70, justifyContent:'center', alignItems:'center' }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"red", textAlign:"center", alignItems:'center', justifyContent:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:scorewScience, data2: ScreenNameScience})}><Text style={{fontSize:20}}>Ruby</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100, alignItems:'center', justifyContent:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:scorewScience, data2: ScreenNameScience})}><Text style={{ fontSize:20}}>Sapphire</Text></TouchableOpacity>
            </View>
            
          
            </ScrollView>
        </View>
    )
}