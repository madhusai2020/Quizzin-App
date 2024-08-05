import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function TresQuestion(props) {
  const route = useRoute()
  let pScoreMovie =route.params.data1;
  
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Movie Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>What Hollywood movie star plays himself in Zombieland?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://assets1.ignimgs.com/2019/10/14/zombielanddoubletap-blogroll-01-1571089736918.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50,flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectMovie', {data2:'OchoQuestion', datacMovie:pScoreMovie+5})}><Text style={{fontSize:20}}>Bill Murray</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:30, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:pScoreMovie, data2: 'OchoQuestion'})}><Text style={{ fontSize:20}}>Tom Cruise</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100,flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie',{datawMovie:pScoreMovie, data2: 'OchoQuestion'})}><Text style={{fontSize:20}}>Tom Holland</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:30, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie',{datawMovie:pScoreMovie, data2: 'OchoQuestion'})}><Text style={{ fontSize:20}}>Tom Hanks</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}