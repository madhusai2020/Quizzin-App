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
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>What superhero have the most fans in Marvel?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.wired.com/photos/5955ceabcbd9b77a41915cf6/master/w_2560%2Cc_limit/marvel-characters.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50,flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectMovie', {data2:'SeisQuestion', datacMovie:pScoreMovie+5})}><Text style={{fontSize:20}}>Spider-Man</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:30, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:pScoreMovie, data2: 'SeisQuestion'})}><Text style={{ fontSize:20}}>Iron-Man</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100,flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie',{datawMovie:pScoreMovie, data2: 'SeisQuestion'})}><Text style={{fontSize:20}}>Hulk</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:30, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie',{datawMovie:pScoreMovie, data2: 'SeisQuestion'})}><Text style={{ fontSize:20}}>Captain America</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}