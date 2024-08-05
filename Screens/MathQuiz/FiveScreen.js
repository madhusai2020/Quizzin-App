import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function ThreeScreen(props) {
   const route = useRoute()
  let pScoreMath =route.params.data1;
  let scorewMath=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20,alignSelf:'center'}}>Math Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Who were the first people to make use of Negative numbers?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://www.onlinemathlearning.com/image-files/positive-negative-numbers.png"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:pScoreMath, data2:'SixScreen'})}><Text style={{fontSize:20}}>American</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:pScoreMath, data2:'SixScreen'})}><Text style={{ fontSize:20}}>Indian</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:pScoreMath, data2:'SixScreen'})}><Text style={{fontSize:20}}>Australian</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectMath', {data2:'SixScreen', datacMath:pScoreMath+5})}><Text style={{ fontSize:20}}>Chinese</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}