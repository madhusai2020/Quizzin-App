import { useRoute } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function TwoQuiz(props) {
  const route = useRoute();
  let PScoreScience =route.params.data1;
  
  
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20}}>Science Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:"center"}}>How many colors are in the rainbow?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://easydrawingguides.com/wp-content/uploads/2017/10/how-to-draw-a-rainbow-featured-image-1200.png"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:parseInt(PScoreScience), data2: 'ThreeQuiz'})}><Text style={{fontSize:20}}>6</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:70,justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectScreenScience', {datacScience:parseInt(PScoreScience)+5,data2:'ThreeQuiz'} )}><Text style={{ fontSize:20}}>7</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:50, marginBottom:100, flex:1, justifyContent:'center', alignItems:'center', height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:parseInt(PScoreScience), data2: 'ThreeQuiz'})}><Text style={{fontSize:20}}>8</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:70, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:parseInt(PScoreScience), data2: 'ThreeQuiz'})}><Text style={{ fontSize:20}}>9</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}