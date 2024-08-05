import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'


export default function UnoQuiz(props) {

  const ScreenNameFruits='DosQuiz'
const scorecFruits=5;
  const scorewFruits=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Fruits Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>What type of vitamins do oranges produce?</Text>
            
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://www.allrecipes.com/thmb/y_uvjwXWAuD6T0RxaS19jFvZyFU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1205638014-2000-d0fbf9170f2d43eeb046f56eec65319c.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenFruits', {datawFruits:scorewFruits, data2: ScreenNameFruits})}><Text style={{fontSize:20}}>Vitamin A</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenFruits', {datawFruits:scorewFruits, data2: ScreenNameFruits})}><Text style={{ fontSize:20}}>Vitamin B</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>{props.navigation.navigate('CorrectFruits', {datacFruits:scorecFruits, data2:ScreenNameFruits})}}><Text style={{fontSize:20}}>Vitamin C</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenFruits', {datawFruits:scorewFruits, data2: ScreenNameFruits})}><Text style={{ fontSize:20}}>Vitamin D</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}