import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function OneScreen(props) {

  const ScreenNameMath='TwoScreen'
 const scorecMath=5;
  const scorewMath=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Math Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>What is 10 x 10?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://selfsufficientkids.com/wp-content/uploads/2017/07/multiplication-math-facts.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:scorewMath, data2: ScreenNameMath})}><Text style={{fontSize:20}}>200</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>{props.navigation.navigate('CorrectMath', {datacMath:scorecMath, data2:ScreenNameMath})}}><Text style={{ fontSize:20}}>100</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:scorewMath, data2: ScreenNameMath})}><Text style={{fontSize:20}}>10x10</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:scorewMath, data2: ScreenNameMath})}><Text style={{ fontSize:20}}>20</Text></TouchableOpacity>
            </View>
    
            </ScrollView>
        </View>
    )
}