import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function MoviesQuiz(props) {
  return (
    <View style={{ backgroundColor: '#FFAE42', flex: 1 }}>
      <ScrollView>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 40 }}>Quiz Details</Text>
          <Image
            style={{
              width: 500,
              height: 350,
              borderRadius: 10,
              marginLeft: 40,
              marginTop: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: 30,
            }}
            source={{
              uri: 'https://media.istockphoto.com/id/911590226/vector/movie-time-vector-illustration-cinema-poster-concept-on-red-round-background-composition-with.jpg?s=612x612&w=0&k=20&c=QMpr4AHrBgHuOCnv2N6mPUQEOr5Mo8lE7TyWaZ4r9oo=',
            }}></Image>
          <Text
            style={{
              textDecorationLine: 'underline',
              fontWeight: 'bold',
              fontSize: 40,
              marginLeft: 50,
              marginBottom: 20,
            }}>
            Movies Quiz:
          </Text>
        </View>
        <Text style={{ fontSize: 15, marginLeft: 40, marginBottom: 30 }}>
          This is a quiz based on your understanding in Movies. Let's see if you
          are a true expert in Movies or a student. Try your best and strive to
          get 100% on the test! This test will be filled with challenging and
          hard problems. Try your best and good Luck!!
        </Text>
        <Text
          style={{
            fontSize: 30,
            textDecorationLine: 'underline',
            fontWeight: 'bold',
            marginLeft: 30,
            marginBottom: 20,
          }}>
          Rules:
        </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
          -- No looking up answers online
        </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
          -- Dont't try to ask others for help, as it is a test to see how much
          you know not what others know.
        </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
          -- Try your best and get 100%
        </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
          -- With every answer you get correct you will recieve 5 points, so try
          to get every answer correct.
        </Text>
        <Text style={{ fontSize: 20, marginLeft: 20, marginBottom: 10 }}>
          -- Getting every answer correct will get more points. So try to answer
          everything correctly. Good Luck and try your best!
        </Text>
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
            onPress={() => props.navigation.navigate('FirstQuestion')}>
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
  );
}
