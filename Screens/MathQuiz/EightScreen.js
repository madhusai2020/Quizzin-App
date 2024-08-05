import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function ThreeScreen(props) {
   const route = useRoute()
  let pScoreMath =route.params.data1;
  let scorewMath=0;
    return (
        <View style={{justifyContent:"center", alignItems:"center", flex:1}}>
        <ScrollView>
        <View style={{flex:2, marginBottom:150}}>
            <Text style={{fontSize:20, textAlign:'center', marginBottom:20,alignSelf:'center'}}>Math Quiz</Text>
            <Text style={{fontSize:20, marginBottom:30, alignSelf:'center'}}>Who is the scientist who was born on Pi Day?
</Text>
            <Image style={{height:'100%', width:'100%', marginBottom:100}}source={{uri:"https://media.istockphoto.com/id/1453524892/photo/female-scientist-looking-under-microscope-and-using-laptop-in-a-laboratory.webp?b=1&s=170667a&w=0&k=20&c=f6ITpViA6q4W56XB0X2whl3LTxIHf6f1EF-c3FQRRas="}}></Image>
            </View>
          <View style={{flexDirection:"row", marginBottom:50, flex:1 ,justifyContent:"center", alignItems:"center", height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:40, backgroundColor:"red", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultMath', {dataMath:pScoreMath})}><Text style={{fontSize:20}}>Thomas Edison</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"lime", textAlign:"center", marginLeft:50,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultMath', {dataMath:pScoreMath})}><Text style={{ fontSize:20}}>Galileo</Text></TouchableOpacity>
            </View>
            <View style={{flexDirection:"row", marginTop:20, marginBottom:100, flex:1 ,justifyContent:"center", alignItems:"center", height:70  }}>  
          <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"#87CEEB", textAlign:"center",justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultMath', {dataMath:pScoreMath})}><Text style={{fontSize:20}}>Isaac Newton</Text></TouchableOpacity>
            <TouchableOpacity style={{height:'100%', width:'40%', borderRadius:30, fontWeight:"bold",fontSize:20, backgroundColor:"orange", textAlign:"center", marginLeft:50,justifyContent:"center", alignItems:"center"}} onPress={()=>props.navigation.navigate('ResultMath', { dataMath:pScoreMath+5})}><Text style={{ fontSize:20}}>Albert Einstein</Text></TouchableOpacity>
            </View>
           
            </ScrollView>
        </View>
    )
}