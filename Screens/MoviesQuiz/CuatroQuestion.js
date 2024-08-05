
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function CuatroQuestion(props) {
   const route = useRoute()
  let pScoreMovie =route.params.data1;
 
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Movie Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>In Inception, how many dream levels does the crew enter?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://taylorholmes.com/wp-content/uploads/2010/07/inception-explained.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center" ,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:pScoreMovie, data2:'CincoQuestion'})}><Text style={{fontSize:20}}>3 levels</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100 ,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:pScoreMovie, data2:'CincoQuestion'})}><Text style={{ fontSize:20}}>1 level</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center" ,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectMovie', {datacMovie:pScoreMovie+5, data2:'CincoQuestion'})}><Text style={{fontSize:20}}>5 levels</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100 ,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenMovie', {datawMovie:pScoreMovie, data2:'CincoQuestion'})}><Text style={{ fontSize:20}}>6 levels</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}