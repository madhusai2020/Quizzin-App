import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'

export default function Game(props) {
  const ScreenName = 'NewScreen'

  const scorec=5;
  const scorew=0;


  
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
       <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, alignSelf:'center', marginBottom:20, marginLeft:40}}>Spanish Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:"center"}}>How do you say Hello in Spanish?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://t3.ftcdn.net/jpg/02/09/65/14/360_F_209651427_Moux8Hkey15wtMbtLymbPPrdrLhm58fH.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:30, backgroundColor:"red", textAlign:"center", justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen',{dataw:scorew, data2:ScreenName })}><Text style={{fontSize:20, alignSelf:"center"}}>Hello</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100, justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen',{dataw:scorew, data2: ScreenName})}><Text style={{ fontSize:20, alignSelf:"center"}}>Bonjour</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:50, flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:30, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center',alignItems:'center'}} onPress={()=>{props.navigation.navigate('CorrectScreen', {datac:scorec, data2:ScreenName})}}><Text style={{fontSize:20, alignSelf:"center"}}>Hola</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100, justifyContent:'center',alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen',{dataw:scorew, data2: ScreenName})}><Text style={{ fontSize:20, alignSelf:"center"}}>Hi!</Text></TouchableOpacity>
            </View>
            <View>
           
            </View>
           </ScrollView>
        </View>
    )
}

