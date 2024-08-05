import { useRoute } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity,ScrollView } from 'react-native'

export default function NewScreen(props) {
  const route = useRoute()
  let Pscore =route.params.data1;
  
  let scorew=0;
  
    return (
        <View style={{alignItems:"center", justifyContent:"center", flex:1}}>
        <ScrollView>
            <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Spanish Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>How do you say "How are you?" in Spanish?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://i.pinimg.com/736x/26/bb/54/26bb54150f0c4e7fa39f3f8b2fdec295.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:10, backgroundColor:"red", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen',{dataw:parseInt(Pscore), data2:'ThirdQuestion'})}><Text style={{fontSize:20}}>Comment allez-vous</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:10, backgroundColor:"lime", textAlign:"center", marginLeft:100, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen',{dataw:parseInt(Pscore), data2:'ThirdQuestion'})}><Text style={{ fontSize:20}}>You How</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:50, flex:1, justifyContent:'center', alignItems:'center', height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:10, backgroundColor:"#87CEEB", textAlign:"center", justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('WrongScreen',{dataw:parseInt(Pscore), data2:'ThirdQuestion'})}><Text style={{fontSize:20}}>Cómo te llamas?</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:10, backgroundColor:"orange", textAlign:"center", marginLeft:100, justifyContent:'center', alignItems:'center'}} onPress={()=>props.navigation.navigate('CorrectScreen',{datac:parseInt(Pscore)+5,data2:'ThirdQuestion'})}><Text style={{ fontSize:20}}>Cómo estás?</Text></TouchableOpacity>
            </View>
            <View>
            
            </View>
            </ScrollView>
        </View>
    )
}
