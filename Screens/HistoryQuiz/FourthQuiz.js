import { useRoute } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function FourthQuiz(props) {
  const route = useRoute()
  let pScoreHistory =route.params.data1;
  let scorewHistory=0;
 
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>History Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Which country first used paper money?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://t3.ftcdn.net/jpg/00/61/62/10/360_F_61621074_cLpg3mHoxL1sCa6bKd7gVJzy5CDdvXmO.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center" ,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultHistory', {dataHistory:pScoreHistory})}><Text style={{fontSize:20}}>America </Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultHistory', {dataHistory:pScoreHistory})}><Text style={{ fontSize:20}}>England</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultHistory', {dataHistory:pScoreHistory})}><Text style={{fontSize:20}}>Russia</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultHistory',{dataHistory:pScoreHistory+5})}><Text style={{ fontSize:20}}>China</Text></TouchableOpacity>
            </View>
            <View>
            
            </View>
            </ScrollView>
        </View>
    )
}

