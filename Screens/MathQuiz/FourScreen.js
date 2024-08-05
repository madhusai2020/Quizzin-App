import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function FourScreen(props) {
   const route = useRoute()
  let pScoreMath =route.params.data1;
  let scorewMath=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Math Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>What is tan(45) equal to?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://cdn1.byjus.com/wp-content/uploads/2020/01/Trigonometry-Ratios.png"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath', {datawMath:pScoreMath, data2:'FiveScreen'})}><Text style={{fontSize:20}}>45</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectMath',{datacMath:pScoreMath+5, data2:'FiveScreen'})}><Text style={{ fontSize:20}}>1</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate( 'WrongScreenMath',{datawMath:pScoreMath, data2:'FiveScreen'})}><Text style={{fontSize:20}}>4.5</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMath',{datawMath:pScoreMath, data2:'FiveScreen'})}><Text style={{ fontSize:20}}>0</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}