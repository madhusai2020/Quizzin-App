import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function Two(props) {
  const route = useRoute()
 let PScoreCoding =route.params.data1;
  
  let scorewCoding=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Coding Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Which one of these are not a Coding language?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://www.itprotoday.com/sites/itprotoday.com/files/styles/article_featured_retina/public/Screen%20Shot%202018-12-08%20at%204.45.18%20PM_0.png?itok=UvQJWfWh"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenCoding', {datawCoding:parseInt(PScoreCoding), data2: 'Three'})}><Text style={{fontSize:20}}>Java</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenCoding', {datawCoding:parseInt(PScoreCoding), data2: 'Three'})}><Text style={{ fontSize:20}}>Python</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectCoding', {datacCoding:parseInt(PScoreCoding)+5,data2:'Three'})}><Text style={{fontSize:20}}>Bite</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenCoding', {datawCoding:parseInt(PScoreCoding), data2: 'Three'})}><Text style={{ fontSize:20}}>JavaScript</Text></TouchableOpacity>
            </View>
           
            </ScrollView>
        </View>
    )
}