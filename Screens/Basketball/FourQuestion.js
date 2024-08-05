import { useRoute } from '@react-navigation/native';
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function ThreeQuestion(props) {
   const route = useRoute()
  let pScoreBasketball =route.params.data1;
  let scorewBasketball=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Basketball Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Bonus NBA Question: Who has the most blocks in NBA history?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://cdn.vox-cdn.com/thumbor/u4hitwq3fr2og3wBFVWWSWlcTh8=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19418809/usa_today_13729745.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center" ,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultBasketball', {dataBasketball:pScoreBasketball+5})}><Text style={{fontSize:20}}>Hakeem Olajuwon</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:50 ,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultBasketball', {dataBasketball:pScoreBasketball})}><Text style={{ fontSize:20}}>Dikembe Mutumbo</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center" ,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultBasketball', {dataBasketball:pScoreBasketball})}><Text style={{fontSize:20}}>Lebron James</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50 ,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultBasketball', {dataBasketball:pScoreBasketball})}><Text style={{ fontSize:20}}>Kareem Abdul Jabbar</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}

