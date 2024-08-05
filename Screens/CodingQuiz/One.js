import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function One(props) {
  const ScreenNameCoding = "Two"
const scorecCoding=5;
  const scorewCoding=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}} >
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Coding Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Which of these do not use computer programming?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://img.freepik.com/premium-vector/people-walk-public-park-family-going-with-children-dog-pet-eating-ice-cream-kid-riding-bicycle-couple-sitting-grass_102902-5898.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenCoding', {datawCoding:scorewCoding, data2: ScreenNameCoding})}><Text style={{fontSize:20}}>Car</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>{props.navigation.navigate('CorrectCoding', {datacCoding:scorecCoding, data2:ScreenNameCoding})}}><Text style={{ fontSize:20}}>Bike</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenCoding', {datawCoding:scorewCoding, data2: ScreenNameCoding})}><Text style={{fontSize:20}}>Train</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenCoding', {datawCoding:scorewCoding, data2: ScreenNameCoding})}><Text style={{ fontSize:20}}>Bus</Text></TouchableOpacity>
            </View>
            

      </ScrollView>
        </View>
    )
}