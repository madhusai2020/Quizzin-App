import { useRoute } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, TouchableOpacity,Image,ScrollView } from 'react-native'

export default function ThirdQuestion(props) {
  const route = useRoute()
  let pscore =route.params.data1;
  let scorew=0;

    return (
        <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
        <ScrollView>
            <View style={{flex:2, marginBottom:150}}>
        <Text style={{fontSize:20, alignSelf:'center', marginBottom:20,marginLeft:50}}>Spanish Quiz</Text>
        <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>How do you say "What is your name?" in Spanish?</Text>
        <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://st3.depositphotos.com/4169661/15367/i/1600/depositphotos_153672698-stock-photo-whats-your-name-sign-on.jpg"}}></Image>
        </View>
      <View style={{flexDirection:"row", marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
      <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen', {dataw:pscore,data2:'FourthQuestion' })}><Text style={{fontSize:20}}>What is your name</Text></TouchableOpacity>
        <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:10, backgroundColor:"lime", textAlign:"center", marginLeft:50, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen', {dataw:pscore,data2:'FourthQuestion' })}><Text style={{ fontSize:20}}>Comment vous appelez-vous</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", marginTop:20, marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
      <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectScreen',{data2:'FourthQuestion',datac:pscore+5})}><Text style={{fontSize:20}}>Cómo te llamas?</Text></TouchableOpacity>
        <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen', {dataw:pscore,data2:'FourthQuestion' })}><Text style={{ fontSize:20}}>Llamas te?</Text></TouchableOpacity>
        </View>
        <View>
       
        </View>
        </ScrollView>
    </View>
    )
}
