import React from 'react'
import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function FourthQuestion(props) {
  const route = useRoute()
  let pscoreScience =route.params.data1;
  let scorew=0;

    return (
        <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
         <ScrollView>  
         <View style={{flex:2, marginBottom:150}}> 
        <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Science Quiz</Text>
        <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>How many bones do sharks have in their bodies?</Text>
        <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/1004792742/photo/megalodon-scene-3d-illustration.jpg?s=612x612&w=0&k=20&c=32FRpoHx1Ff1o1FU2OPr1twOftSeuYhTpofqz_DSPK8="}}></Image>
        </View>
      <View style={{flexDirection:"row", marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
      <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectScreenScience', {datacScience:pscoreScience+5, data2:'EightQuiz' })}><Text style={{fontSize:20}}>Zero!</Text></TouchableOpacity>
        <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:50, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pscoreScience, data2:'EightQuiz' })}><Text style={{ fontSize:20}}>One!</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", marginTop:20, marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
      <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience',{datawScience:pscoreScience, data2:'EightQuiz' })}><Text style={{fontSize:20}}>Two!</Text></TouchableOpacity>

        <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreenScience', {datawScience:pscoreScience, data2:'EightQuiz' })}><Text style={{ fontSize:20}}>Three!</Text></TouchableOpacity>
        </View>
        
        </ScrollView>
    </View>
    )
}