import{View,Text, TouchableOpacity, Image} from 'react-native'

import { useRoute } from '@react-navigation/native'

function ResS(props){
const route = useRoute()
let pscoreLA =route.params.dataLA;
  
  return(
    <View style={{flex:1, justifyContent:'center',alignItems:'center', backgroundColor:'#FF00FF'}}>
    <Image style={{height:'30%', width:'100%', marginBottom:30}}source={{uri:"https://media.istockphoto.com/id/1307790441/vector/congratulations-banner-vector-handwritten-lettering.jpg?s=612x612&w=0&k=20&c=wfQ1ycQwMswvBm7ezJdzMYrJmStyOt9Ire9f98ytHTM="}}></Image>
       <Text style={{fontSize:20, marginBottom:20, fontWeight:'bold', marginTop:50}}> Congrats on finishing the quiz!</Text>
       <Text style={{fontSize:20}}> Do you want to try again or choose another</Text> 
     <Text style={{marginLeft:20, marginBottom:20, fontSize:20}}>quiz to play:</Text>
     <Text style={{fontSize:20,fontWeight:'bold', marginBottom:20}}> Your Total Score is =  {pscoreLA} out of 20 points</Text>
      <View style={{flexDirection:"row", marginTop:5}}>
        <TouchableOpacity
     style={{paddingVertical:6,
            paddingHorizontal:16,
             width:150, height:30,marginLeft:10,marginRight:80, borderRadius:30,
            backgroundColor:"lime" }} 
             onPress={()=>props.navigation.navigate('ScreenOne')}
            >
              
            
              <Text style={{color:"black", alignSelf:'center'}}>Try again</Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{paddingVertical:6,
            paddingHorizontal:16,width:150, height: 30, backgroundColor:"red", borderRadius:30}} onPress={()=>props.navigation.navigate('Catalog')}>
                   <Text style={{color:"black", alignSelf:'center'}}>Home</Text>
            </TouchableOpacity>
            </View>
    </View>
  )
}
export default ResS