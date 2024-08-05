import { useRoute } from '@react-navigation/native'

import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function Game(props) {
  const route = useRoute()
  let pScoreScience =route.params.data1;
  
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Science Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Which animal lays eggs?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://cdn.britannica.com/94/151894-050-F72A5317/Brown-eggs.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50,flex:1 , justifyContent:'center', alignItems:'center', height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pScoreScience, data2:'SixQuiz'})}><Text style={{fontSize:20}}>Dogs</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pScoreScience, data2:'SixQuiz'})}><Text style={{ fontSize:20}}>Cats</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:50, marginBottom:100,flex:1 , justifyContent:'center', alignItems:'center', height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectScreenScience', {datacScience:pScoreScience+5, data2:'SixQuiz'})}><Text style={{fontSize:20}}>Ducks</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pScoreScience, data2:'SixQuiz'})}><Text style={{ fontSize:20}}>Sheep</Text></TouchableOpacity>
            </View>
           
            </ScrollView>
        </View>
    )
}