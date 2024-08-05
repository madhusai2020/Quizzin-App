import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function Game(props) {
   const route = useRoute()
  let pScoreScience =route.params.data1;
 
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Science Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30 , alignSelf:"center"}}>At what temperature are Celsius and Fahrenheit equal?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Raumthermometer_Fahrenheit%2BCelsius.jpg/640px-Raumthermometer_Fahrenheit%2BCelsius.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pScoreScience, data2: 'FourQuiz'})}><Text style={{fontSize:20}}>Never</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pScoreScience, data2: 'FourQuiz'})}><Text style={{ fontSize:20}}>0</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:50, marginBottom:100, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectScreenScience', {data2:'FourQuiz', datacScience:pScoreScience+5})}><Text style={{fontSize:20}}>-40</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pScoreScience, data2: 'FourQuiz'})}><Text style={{ fontSize:20}}>100</Text></TouchableOpacity>
            </View>
       
            </ScrollView>
        </View>
    )
}