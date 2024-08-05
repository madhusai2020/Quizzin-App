import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'

export default function HistoryQuiz(props) {
    return (
        <View style={{flex:1, backgroundColor:'#cbbddb'}} >
        <ScrollView>
        <View style={{justifyContent:"center", alignItems:"center"}}>
            <Text style={{fontSize:40}}>Quiz Details</Text>
            <Image style={{width:400, height:200, borderRadius:10, marginTop:10, justifyContent:'center', alignItems:"center"}} source={{uri:"https://www.myperfectresume.com/wp-content/uploads/2021/07/work-history-section.jpg"}}></Image>
            <Text style={{textDecorationLine:"underline", fontWeight:"bold", fontSize:40, marginLeft:40, marginBottom:20}}>History Quiz:</Text>
        </View>
        <Text style={{fontSize:15, marginLeft:10, marginBottom:20}}>This is a quiz based on your understanding in History. Let's see if you are a true expert in History or a student. Try your best and strive to get 100% on the test! This test will be filled with challenging and hard problems. Try your best and good Luck!!</Text>
        <Text style={{fontSize:30, textDecorationLine:"underline", fontWeight:"bold", marginLeft:10}}>Rules:</Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- No looking up answers online</Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- Dont't try to ask others for help, as it is a test to see how much you know not what others know.</Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- No Wikipedia Allowed</Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- Try your best and get 100%</Text>
        <Text style={{fontSize:20, marginLeft:20}}>-- With every answer you get correct you will recieve 5 points, so try to get every answer correct.</Text>
        <Text style={{fontSize:20, marginLeft:20, marginBottom:10}}>-- Getting every answer correct will get more points. So try to answer everything correctly. Good Luck and try your best!</Text>
         <View style={{ flexDirection: 'row', marginTop: 5, marginBottom: 20 }}>
          <TouchableOpacity
            style={{
              paddingVertical: 6,
              paddingHorizontal: 16,
              width: 150,
              height: 30,
              marginLeft: 30,
              marginRight: 40,
              borderRadius: 30,
              backgroundColor: 'lime',
            }}
            onPress={() => props.navigation.navigate('FirstQuiz')}>
            <Text
              style={{
                color: 'black',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Play Game
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              paddingVertical: 6,
              paddingHorizontal: 16,
              width: 150,
              height: 30,
              backgroundColor: 'red',
              borderRadius: 30,
              marginRight: 20,
            }}
            onPress={() => props.navigation.navigate('Catalog')}>
            <Text
              style={{
                color: 'black',
                alignSelf: 'center',
                fontWeight: 'bold',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
        </View>
            </ScrollView>
        </View>
    )
}
