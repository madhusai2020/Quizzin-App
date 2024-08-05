import { Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';

export default function Home(props) {
  return (
    
    <View style={{flex:2, marginBottom:30, marginTop:20, backgroundColor:'#8EC'}}>
    <ScrollView>

 <Text style={{textAlign:"center", fontSize: 50, color:"green", marginTop:30}}>Welcome to </Text>
 <Text style={{textAlign:'center', marginBottom:50, fontSize: 50, color:"green",}}>⸮Quizzin?</Text>
 <View style={{ flexDirection:"row", marginBottom:10, flex:1}}>
<View style={{flex:1, width:'20%'}}>


<Text style={{marginLeft:20, textDecorationLine:'underline', marginBottom:20, fontWeight:'bold', fontSize:30, color:'brown'}}>Easy to Use:</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>This app has features that are accessible to everyone, ranking #1 in the world for our easy to use features. </Text>
 
 </View>


 <Image style={{width:'36%', height:'85%', borderRadius:10, marginTop:40, flex:1, marginBottom:30}} source={{uri:"https://cdn-icons-png.flaticon.com/512/6214/6214152.png"}}></Image>
 </View>
 


<View>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>We have made our app one that's completely user friendly for our consumers.</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>You will easily be able to view each screen with just a click of button, so that you can just sit back and relax knowing that everything will be fine on the app.</Text>   

<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>These features include buttons that help with navigating through screens and more.</Text>




</View>
<Text style={{marginLeft:20, textDecorationLine:'underline', marginBottom:20, fontWeight:'bold', fontSize:30, marginTop:30, color:'brown'}}>Interactive:</Text>
<View style={{flexDirection:'row'}}>
<View style={{width:'40%'}}>


<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>Interactivity was one of our biggest must-haves in Quizzin, adding little features to show this. </Text>

</View>
<Image style={{width:'50%', height:'85%', marginLeft:20}} source={{uri:"https://www.spielcreative.com/blog/wp-content/themes/spielcreative/assets/images/interactive-video-statistics.png"}}></Image>
</View>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}> Some features that make Quizzin interactive are the points you get for every answer you get. This allows you to try your best.</Text>
<Text style={{marginLeft:20,marginBottom:5, fontSize:20}}>With having interactive features, it makes learning for students more fun and engaging (an achievement we want to create).</Text>    

<Text style={{marginLeft:20,marginBottom:30, fontSize:20}}> Learning should be fun, not boring, this is why you should play with Quizzin. </Text>



<Text style={{marginBottom:10, fontSize:15, color:"green", fontWeight:"bold", alignSelf:'center'}}>To view our quizzes click on the button below:</Text>


<TouchableOpacity style={{paddingVertical:6,
  paddingHorizontal:16,
  borderRadius:30, width:120, height:50,
  backgroundColor:"green", alignSelf:'center'}} 
   onPress={()=>props.navigation.navigate('Catalog')}
  >
    
  
    <Text style={{color:"lime", fontSize:20, alignSelf:'center', marginTop:5, fontFamily:'Arial', fontWeight:'bold'}}> Catalog </Text>
  </TouchableOpacity>
  </ScrollView>
    </View>

    
  );
}
