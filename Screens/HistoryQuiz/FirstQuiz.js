import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function FirstQuiz(props) {
  const ScreenNameHistory = 'SecondQuiz'
 const scorecHistory=5;
  const scorewHistory=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>History Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Who was the 29th President of the USA?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/1084903580/photo/seal-of-the-president-of-the-united-states.jpg?s=170667a&w=is&k=20&c=9FQArM_3GWqWxrGk1yHmba_rUZM6jT1BEbhD4lV7Nrk="}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenHistory', {datawHistory:scorewHistory, data2: ScreenNameHistory})}><Text style={{fontSize:20}}>Donald Trump</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:50,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenHistory', {datawHistory:scorewHistory, data2: ScreenNameHistory})}><Text style={{ fontSize:20}}>Barack Obama</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:30, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenHistory', {datawHistory:scorewHistory, data2: ScreenNameHistory})}><Text style={{fontSize:20}}>Calvin Collidge</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50,justifyContent:"center", alignItems:"center"}} onPress={()=>{props.navigation.navigate('CorrectHistory', {datacHistory:scorecHistory, data2:ScreenNameHistory})}}><Text style={{ fontSize:20}}>Warren G. Harding</Text></TouchableOpacity>
            </View>
            <View>
            
            </View>
            </ScrollView>
        </View>
    )
}

