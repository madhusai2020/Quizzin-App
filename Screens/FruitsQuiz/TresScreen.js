import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function TresScreen(props) {
    const route = useRoute()
  let pScoreFruits =route.params.data1;
  let scorewFruits=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20, alignSelf:'center'}}>Fruits Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>What fruit produces potassium?</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://images.pexels.com/photos/2487443/pexels-photo-2487443.jpeg?cs=srgb&dl=pexels-matheus-cenali-2487443.jpg&fm=jpg"}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenFruits', {datawFruits:pScoreFruits, data2: 'CuatroScreen'})}><Text style={{fontSize:20}}>Oranges</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenFruits', {datawFruits:pScoreFruits, data2: 'CuatroScreen'})}><Text style={{ fontSize:20}}>Apples</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70 }}>  
          <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('WrongScreenFruits', {datawFruits:pScoreFruits, data2: 'CuatroScreen'})}><Text style={{fontSize:20}}>Tomatoes</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'30%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:100,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('CorrectFruits', {data2:'CuatroScreen', datacFruits:pScoreFruits+5})}><Text style={{ fontSize:20}}>Bananas</Text></TouchableOpacity>
            </View>
            
            </ScrollView>
        </View>
    )
}
