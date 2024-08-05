import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function ScreenThree(props) {
   const route = useRoute()
  let pScoreLA =route.params.data1;
  let scorewLA=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Language Arts Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}> What is an antonym of loud?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/1344512181/vector/icon-red-loudspeaker.jpg?s=612x612&w=0&k=20&c=MSi3Z2La8OYjSY-pr0bB6f33NOuUKAQ_LBUooLhLQsk="}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center" }} onPress={()=>props.navigation.navigate('CorrectLA', {data2:'ScreenFour', datacLA:pScoreLA+5})}><Text style={{fontSize:20}}>quiet</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center" }} onPress={()=>props.navigation.navigate('WrongScreenLA', {datawLA:pScoreLA, data2:'ScreenFour'})}><Text style={{ fontSize:20}}>whisper</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenLA', {datawLA:pScoreLA, data2:'ScreenFour'})}><Text style={{fontSize:20}}>noisy</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenLA', {datawLA:pScoreLA, data2:'ScreenFour'})}><Text style={{ fontSize:20}}>roaring</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}