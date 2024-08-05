import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function OneQuestion(props) {
  const ScreenNameBasketball = 'TwoQuestion'

 const scorecBasketball=5;
  const scorewBasketball=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Basketball Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>What is term for passing a basketball to a teammate called?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/1159659055/photo/high-school-basketball-game.jpg?s=612x612&w=0&k=20&c=eqc4czKTXf_ACQaSawBs_Tuc8Fcr4sHSOr6mKVUuoMc="}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenBasketball', {datawBasketball:scorewBasketball, data2: ScreenNameBasketball})}><Text style={{fontSize:20}}>Pass</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenBasketball', {datawBasketball:scorewBasketball, data2: ScreenNameBasketball})}><Text style={{ fontSize:20}}>Basketball Pass</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>{props.navigation.navigate('CorrectBasketball', {datacBasketball:scorecBasketball, data2:ScreenNameBasketball})}}><Text style={{fontSize:20}}>Assist</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenBasketball', {datawBasketball:scorewBasketball, data2: ScreenNameBasketball})}><Text style={{ fontSize:20}}>Pass Ball</Text></TouchableOpacity>
            </View>
           
            </ScrollView>
        </View>
    )
}

