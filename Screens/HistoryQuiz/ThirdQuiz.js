import { useRoute } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function ThirdQuiz(props) {
 const route = useRoute()
  let pScoreHistory =route.params.data1;
  let scorewHistory=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>History Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>What is the bloodiest war in American history?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://st4.depositphotos.com/26340652/27992/i/450/depositphotos_279928138-stock-photo-military-forces-helicopters-destroyed-city.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectHistory', {data2:'FourthQuiz', datacHistory:pScoreHistory+5})}><Text style={{fontSize:20}}>Civil War </Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:50,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenHistory', {datawHistory:pScoreHistory, data2: 'FourthQuiz'})}><Text style={{ fontSize:20}}>Revolutionary War</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenHistory', {datawHistory:pScoreHistory, data2: 'FourthQuiz'})}><Text style={{fontSize:20}}>World War 1</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenHistory', {datawHistory:pScoreHistory, data2: 'FourthQuiz'})}><Text style={{ fontSize:20}}>World War 2</Text></TouchableOpacity>
            </View>
            <View>
            
            </View>
            </ScrollView>
        </View>
    )
}

