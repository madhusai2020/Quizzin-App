import { useRoute } from '@react-navigation/native'
import React, {useState} from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function SecondQuiz(props) {
  const route = useRoute()
  
  let PScoreHistory =route.params.data1;
  
  let scorewHistory=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>History Quiz</Text>
            <Text style={{fontSize:19, marginBottom:30, alignSelf:'center'}}>In what time frame did the Civil War occur in?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://api.time.com/wp-content/uploads/2015/04/civil-war-in-color-lincoln-27.jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'50%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenHistory', {datawHistory:parseInt(PScoreHistory), data2: 'ThirdQuiz'})}><Text style={{fontSize:20}}>Apr. 7, 1861- May 8, 1865 </Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'50%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:10,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenHistory', {datawHistory:parseInt(PScoreHistory), data2: 'ThirdQuiz'})}><Text style={{ fontSize:20}}>Pandemic Years</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'50%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectHistory', {datacHistory:parseInt(PScoreHistory)+5, data2:'ThirdQuiz'})}><Text style={{fontSize:20}}>Apr. 12, 1861-May 13, 1865</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'50%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:10,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenHistory', {datawHistory:parseInt(PScoreHistory), data2: 'ThirdQuiz'})}><Text style={{ fontSize:20}}>Apr. 12, 1865-May 13, 1869</Text></TouchableOpacity>
            </View>
            <View>
            
            </View>
            </ScrollView>
        </View>
    )
}

