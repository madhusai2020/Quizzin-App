
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function Four(props) {
   const route = useRoute()
  let pScoreCoding =route.params.data1;
  let scorewCoding=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center"}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Coding Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>How do you create a Button in React JS?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://i.ytimg.com/vi/4f3mux0q7oY/maxresdefault.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'45%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultCoding', {dataCoding:pScoreCoding})}><Text style={{fontSize:20}}>CustomButton</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'45%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:10,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultCoding', {dataCoding:pScoreCoding})}><Text style={{ fontSize:20}}>Button</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'45%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultCoding', {dataCoding:pScoreCoding})}><Text style={{fontSize:20}}>TouchButtom</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'45%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:10,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultCoding', {dataCoding:pScoreCoding+5})}><Text style={{ fontSize:20}}>TouchableOpacity</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}