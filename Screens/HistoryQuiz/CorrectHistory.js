import { useRoute } from '@react-navigation/native'
import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'


export default function CorrectHistory(props) {
    const route = useRoute()
    const PScreenNameHistory= route.params.data2
    const PScoreHistory= parseInt(route.params.datacHistory)
    return (
        <View style={{backgroundColor:"lime", flex:1, alignItems:"center", justifyContent:"center"}}>
            <Text style={{fontSize:50, color:"black", marginBottom:100}}> Correct answer! Good job!!</Text>
       <Image style={{height:'40%', width:'70%', marginBottom:100}}source={{uri:"https://st2.depositphotos.com/1605004/6196/v/450/depositphotos_61961463-stock-illustration-comic-book-explosion-with-text.jpg"}}></Image>
           
           <TouchableOpacity style={{ paddingVertical:6,
paddingHorizontal:16,
borderRadius:30, width:200, height:60, alignSelf:'center',backgroundColor:"black" }} 
onPress={()=>props.navigation.navigate(PScreenNameHistory, {data1:PScoreHistory})}
>


<Text style={{color:"white", fontSize:40,fontWeight:"90", marginLeft:10, alignItems:"center"}}>Next -{'>'}</Text></TouchableOpacity>

        </View>
    )
}
