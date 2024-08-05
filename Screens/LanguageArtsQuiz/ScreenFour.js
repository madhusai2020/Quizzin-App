import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function Game(props) {
   const route = useRoute()
  let pScoreLA =route.params.data1;
  let scorewLA=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
         <ScrollView>
         <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Language Arts Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30}}>Which is the correct way to punctuate the following sentence:
            My dad said clean your room.</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://img.freepik.com/free-vector/man-cleaning-room-illustration-househusband-college-boy-with-vacuum-cleaner_33099-412.jpg?w=2000"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'50%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultLA', {dataLA:pScoreLA})}><Text style={{fontSize:20}}>My dad said, "clean your room."</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'50%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:10,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultLA', {dataLA:pScoreLA})}><Text style={{ fontSize:20}}>My dad said "Clean your room"</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'50%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultLA', {dataLA:pScoreLA+5})}><Text style={{fontSize:20}}>My dad said, "Clean your room."</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'50%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:10,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultLA', {dataLA:pScoreLA})}><Text style={{ fontSize:20}}>My dad said "clean your room."</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}