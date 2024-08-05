import React from 'react'
import { View, Text, TouchableOpacity, Image,ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native'

export default function FourthQuestion(props) {
  const route = useRoute()
  let pscore =route.params.data1;
  let scorew=0;

    return (
        <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
         <ScrollView>  
         <View style={{flex:2, marginBottom:150}}> 
        <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Spanish Quiz</Text>
        <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>How do you say "basketball" in Spanish?</Text>
        <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.gettyimages.com/id/183256716/photo/ball-and-basketball-court.jpg?s=612x612&w=gi&k=20&c=j4n2xknaJ-tL-tGZyvUxXpjhBFEteP0nx9L7ZMk0oZI="}}></Image>
        </View>
      <View style={{flexDirection:"row", marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
      <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen', {dataw:pscore, data2:'SixthQuestion' })}><Text style={{fontSize:20}}>futbol</Text></TouchableOpacity>
        <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:50, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen', {dataw:pscore, data2:'SixthQuestion' })}><Text style={{ fontSize:20}}>basketball</Text></TouchableOpacity>
        </View>
        <View style={{flexDirection:"row", marginTop:20, marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70 }}>  
      <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectScreen',{datac:pscore+5, data2:'SixthQuestion' })}><Text style={{fontSize:20}}>basquetbol</Text></TouchableOpacity>

        <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen', {dataw:pscore, data2:'SixthQuestion' })}><Text style={{ fontSize:20}}>deportes</Text></TouchableOpacity>
        </View>
        <View>
        
        </View>
        </ScrollView>
    </View>
    )
}