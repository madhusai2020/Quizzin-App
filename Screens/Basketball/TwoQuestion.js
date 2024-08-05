import { useRoute } from '@react-navigation/native';
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function TwoQuestion(props) {
  const route = useRoute()
let PScoreBasketball=route.params.data1;
  let scorewBasketball=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Basketball Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>How many points do you get when you score a layup?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.hswstatic.com/eyJidWNrZXQiOiJjb250ZW50Lmhzd3N0YXRpYy5jb20iLCJrZXkiOiJnaWZcL2Jhc2tldGJhbGwtaG9vcC5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOiIxMjAwIn19fQ=="}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenBasketball', {datawBasketball:parseInt(PScoreBasketball), data2: 'ThreeQuestion'})}><Text style={{fontSize:20}}>3 points</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectBasketball', {datacBasketball:parseInt(PScoreBasketball)+5,data2:"ThreeQuestion"})}><Text style={{ fontSize:20}}>2 points</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenBasketball', {datawBasketball:parseInt(PScoreBasketball), data2: 'ThreeQuestion'})}><Text style={{fontSize:20}}>1 point</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenBasketball', {datawBasketball:parseInt(PScoreBasketball), data2: 'ThreeQuestion'})}><Text style={{ fontSize:20}}>No points</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}

