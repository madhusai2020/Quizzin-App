import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView} from 'react-native'

export default function Three(props) {
   const route = useRoute()
  let pScoreCoding =route.params.data1;
  let scorewCoding=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Coding Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Which of these is a Coding language?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenCoding', {datawCoding:pScoreCoding, data2: 'Four'})}><Text style={{fontSize:20}}>Itch</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenCoding', {datawCoding:pScoreCoding, data2: 'Four'})}><Text style={{ fontSize:20}}>Bite</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenCoding', {datawCoding:pScoreCoding, data2: 'Four'})}><Text style={{fontSize:20}}>Bark</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectCoding', {data2:'Four', datacCoding:pScoreCoding+5})}><Text style={{ fontSize:20}}>Scratch</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}