import React from 'react'
import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function FourthQuestion(props) {
  const route = useRoute()
  let pscoreScience =route.params.data1;
  let scorewScience=0;

    return (
        <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
         <ScrollView>  
         <View style={{flex:2, marginBottom:150}}> 
        <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Science Quiz</Text>
        <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>How many hearts does an octopus have?</Text>
        <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://images.unsplash.com/photo-1628944681206-2ee8d63b0a6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2N0b3B1c3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}}></Image>
        </View>
      <View style={{flexDirection:"row", marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
      <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pscoreScience, data2:'SevenQuiz' })}><Text style={{fontSize:20}}>1</Text></TouchableOpacity>
        <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:50, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pscoreScience, data2:'SevenQuiz' })}><Text style={{ fontSize:20}}>2</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", marginTop:20, marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
      <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectScreenScience',{datacScience:pscoreScience+5, data2:'SevenQuiz' })}><Text style={{fontSize:20}}>3</Text></TouchableOpacity>

        <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pscoreScience, data2:'SevenQuiz' })}><Text style={{ fontSize:20}}>4</Text></TouchableOpacity>
        </View>
        
        </ScrollView>
    </View>
    )
}