import React,{ Component } from 'react';
import {Card} from 'react-native-material-cards';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Platform,Image, ScrollView,TouchableOpacity} from 'react-native';
// import Video from 'react-native-video';
import { Video } from 'expo-av';

class Screen1 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      setkey: 0
    };
    this.videoHandler=this.videoHandler.bind(this)
  }
  videoHandler=(item)=>{
    // console.log(item)
    this.setState({
      setkey:item.key
    })
    this.props.navigation.navigate('Screen2',{key:item.key})
  }
  render(){
    // console.log(this.state.setkey)
    const videoPath = require('./welcome.mp4');
    return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.nav}>
           <View style={styles.navText}>
            <Text style={{fontSize:20}}>D-Stream</Text>
            </View>
        </View>
        <View style={{flex:1}}>
          <View style={{backgroundColor:'white',flex:1}}>
            {/* <Image source = {require('./assets/b.png')} style={styles.homeImage}/> */}
            <View style={{flex:1}}>
            <Video source={videoPath} 
            resizeMode="cover"
            shouldPlay
            isLooping
             style={styles.video}/>  
             </View>
            {/* <Text>fdg</Text> */}
          </View>
          <View style={{backgroundColor:'pink',flex:2}}>
           <ScrollView> 
             <View style={{margin:20}}>
               {
                 videoList.map(item =>{
                   return(
                     <TouchableOpacity onPress={()=>this.videoHandler(item)}>
                     <Card key={item.key} style={{padding:100,alignItems:'center'}}>
                       <Text>{item.title}</Text>
                      </Card> 
                      </TouchableOpacity>
                   )
                 })
               }
             </View> 
            </ScrollView>
         
          </View>
        </View>
      </SafeAreaView>
        
    );
  }
}
const videoList =[
  {title:"ayush",key:1},
  {title:"ayush",key:2},
  {title:"ayush",key:3},
  {title:"ayush",key:4},
  {title:"ayush",key:5},
  {title:"ayush",key:6},
  {title:"ayush",key:7},
  {title:"ayush",key:8},
]

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  homeImage:{
    resizeMode:'stretch',
    width:'100%',
    height:"100%",
   },
  nav: {
    width:'100%',
    height:40,
    backgroundColor:'blue',
  },
  navText:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  video:{
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    
  },
});

export default Screen1;