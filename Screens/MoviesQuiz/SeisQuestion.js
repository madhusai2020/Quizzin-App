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
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>The code in The Matrix comes from what food recipes?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://cdn.pixabay.com/photo/2018/01/26/18/21/matrix-3109378_640.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50,flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectMovie', {data2:'SieteQuestion', datacMovie:pScoreMovie+5})}><Text style={{fontSize:20}}>Sushi</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:30, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:pScoreMovie, data2: 'SieteQuestion'})}><Text style={{ fontSize:20}}>Dumplings</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100,flex:1 , justifyContent:'center', alignItems:'center', height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie',{datawMovie:pScoreMovie, data2: 'SieteQuestion'})}><Text style={{fontSize:20}}>Stir Fry</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:30, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenMovie',{datawMovie:pScoreMovie, data2: 'SieteQuestion'})}><Text style={{ fontSize:20}}>Pad Thai</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}