
import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function ScreenTwo(props) {
  const route = useRoute()

  
  let PScoreLA =route.params.data1;
  
  let scorewLA=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Language Arts Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Fill in the blanks, We saw a ____ in the woods when we were hiking.</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29vZHN8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenLA', {datawLA:parseInt(PScoreLA), data2:'ScreenThree'})}><Text style={{fontSize:20}}>bare</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100, justifyContent:"center", alignItems:"center",}} onPress={()=>props.navigation.navigate('WrongScreenLA', {datawLA:parseInt(PScoreLA), data2:'ScreenThree'})}><Text style={{ fontSize:20}}>bair</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectLA' ,{datacLA:parseInt(PScoreLA)+5,data2:'ScreenThree'})}><Text style={{fontSize:20}}>bear</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100, justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenLA', {datawLA:parseInt(PScoreLA), data2:'ScreenThree'})}><Text style={{ fontSize:20}}>baer</Text></TouchableOpacity>
            </View>
           
            </ScrollView>
        </View>
    )
}