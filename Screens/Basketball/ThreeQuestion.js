import { useRoute } from '@react-navigation/native';
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function ThreeQuestion(props) {
   const route = useRoute()
  let pScoreBasketball =route.params.data1;
  let scorewBasketball=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Basketball Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>How far is a three point shot from the basket?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://www.mlive.com/resizer/e_B1-t1HMI655qrG-sOwzMAY3dw=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/NGXGLHTCA5HOVHBSM6YPFTONAY.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenBasketball', {datawBasketball:pScoreBasketball, data2: 'FourQuestion'})}><Text style={{fontSize:20}}>23 feet</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectBasketball', {data2:'FourQuestion', datacBasketball:pScoreBasketball+5})}><Text style={{ fontSize:20}}>24 feet</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop: 20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenBasketball', {datawBasketball:pScoreBasketball, data2: 'FourQuestion'})}><Text style={{fontSize:20}}>22 feet</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenBasketball', {datawBasketball:pScoreBasketball, data2: 'FourQuestion'})}><Text style={{ fontSize:20}}>20 feet</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}

