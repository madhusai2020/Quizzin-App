import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function TwoScreen(props) {
  const route = useRoute()
  
  let PScoreMath =route.params.data1;
  
  let scorewMath=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Math Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>What is 297 + 548?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/1159691840/photo/1-12-written-on-blackboard.jpg?s=612x612&w=0&k=20&c=C7RgImxJ5-85zhVjbGU3p3ioHXNWe21KSKcv4fsLjHU="}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:parseInt(PScoreMath), data2:'ThreeScreen'})}><Text style={{fontSize:20}}>850</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:parseInt(PScoreMath), data2:'ThreeScreen'})}><Text style={{ fontSize:20}}>865</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectMath', {datacMath:parseInt(PScoreMath)+5,data2:'ThreeScreen'})}><Text style={{fontSize:20}}>845</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:parseInt(PScoreMath), data2:'ThreeScreen'})}><Text style={{ fontSize:20}}>855</Text></TouchableOpacity>
            </View>
           
            </ScrollView>
        </View>
    )
}