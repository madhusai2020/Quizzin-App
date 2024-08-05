import { useRoute } from '@react-navigation/native'
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function DosQuiz(props) {
  const route = useRoute()
  let PScoreFruits =route.params.data1;
  
  let scorewFruits=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Fruits Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>True or False : Is a tomato a fruit?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?cs=srgb&dl=pexels-pixabay-533280.jpg&fm=jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:100, justifyContent:"center", alignItems:"center", flex:1 }}>  
          <TouchableOpacity style={{height:400, width:150, borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignSelf:'center'}} onPress={()=>props.navigation.navigate('CorrectFruits',{datacFruits:parseInt(PScoreFruits)+5, data2:'TresScreen'})}><Text style={{fontSize:20, textAlign:'center'}}>True</Text></TouchableOpacity>
            <TouchableOpacity style={{height:400, width:150, borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:50, justifyContent:'center', alignSelf:'center'}} onPress={()=>props.navigation.navigate('WrongScreenFruits', {datawFruits:parseInt(PScoreFruits) , data2: 'TresScreen'})}><Text style={{ fontSize:20, textAlign:'center'}}>False</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}