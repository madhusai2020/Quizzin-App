import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function SecondQuestion(props) {
  const route = useRoute()
  let PScoreMovie =route.params.data1;
  
  
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Movie Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Who was the actor for Jack Sparrow in Pirates of the Carrabien?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://i.pinimg.com/236x/ee/27/0c/ee270c0881811f3e866615f520990575.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50,flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:parseInt(PScoreMovie), data2: 'TresQuestion'})}><Text style={{fontSize:20}}>Tom Cruise</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:50, justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:parseInt(PScoreMovie), data2: 'TresQuestion'})}><Text style={{ fontSize:20}}>Adam Sandler</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100,flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:parseInt(PScoreMovie), data2: 'TresQuestion'})}><Text style={{fontSize:20}}>Tom Hanks</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50, justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectMovie',{datacMovie:parseInt(PScoreMovie)+5, data2:'TresQuestion'})}><Text style={{ fontSize:20}}>Johhny Depp</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}