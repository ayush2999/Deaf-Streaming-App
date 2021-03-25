import React,{ Component } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar, Platform,Dimensions , ScrollView,TouchableOpacity} from 'react-native';
import { Video } from 'expo-av';

class Screen1 extends Component{
  constructor(props) {
    super(props);
    this.state = {
      setkey: 0,
    };
    this.videoHandler=this.videoHandler.bind(this)
  }
  videoHandler=(item)=>{
    // console.log(item)
    this.setState({
      setkey:item.key
    })
    this.props.navigation.navigate('Screen2',{key:item.key,title:item.title})
  }
  render(){
    const videoPath = require('../../assets/welcome.mp4');
    return (
      <SafeAreaView style={styles.container}>
        <View style = {styles.nav}>
           <View style={styles.navText}>
            <Text style={{fontSize:20}}>Deaf Streaming</Text>
            </View>
        </View>
        <View style={{flex:1,backgroundColor:'#e7e7e7'}}>
          <View style={styles.videoView}>
            <Video source={videoPath} 
            resizeMode="contain"
            shouldPlay
            isLooping
             style={styles.videoStyle}/>  
          </View>
          </View>
          <View style={{backgroundColor:'white',flex:1}}>
           <ScrollView scrollEventThrottle={16} onScroll={this.handleScroll}> 
             <View style={{marginTop:20}}>
               {
                 videoList.map(item =>{
                   return(
                     <TouchableOpacity onPress={()=>this.videoHandler(item)}>
                           <View style={{flex:1,margin:20,backgroundColor: "#e7e7e7",borderRadius: 14}}>
                          <Video source={item.source} 
                          resizeMode="contain"
                          shouldPlay
                          isLooping
                          style={{position:"relative",height:300,width:"100%"}}/>  
                          </View>
                      </TouchableOpacity>
                   )
                 })
               }
             </View> 
            </ScrollView>
        </View>
      </SafeAreaView>
         
    );
  }
}
const videoList =[
  {title:"Deaf News",source:require('../../assets/1.mp4'),key:1},
  {title:"Deaf ASL",source:require('../../assets/2.mp4'),key:2},
  {title:"Deaf Short Films",source:require('../../assets/3.mp4'),key:3},
  {title:"Deaf Entertainment",source:require('../../assets/4.mp4'),key:4},
  {title:"Deaf Food Recipes by Shikha",source:require('../../assets/6.mp4'),key:6},
  {title:"Baba Ramdev Diabetes Yoga",source:require('../../assets/7.mp4'),key:7}, 
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
    backgroundColor:'#138086',
  },
  navText:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  videoView: {
    justifyContent:'center', 
    alignItems: 'center', 
    flex: 1,
    flexDirection: 'column',
  },
  videoStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height:'100%',
    
  },
});

export default Screen1;