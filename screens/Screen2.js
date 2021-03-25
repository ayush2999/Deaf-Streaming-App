import React,{ Component } from 'react';
import MiniCard from './screen1/MiniCard'
import {  ActivityIndicator, FlatList,SafeAreaView, StyleSheet, Text, View, StatusBar, Platform,Image, ScrollView,TouchableOpacity} from 'react-native';

class Screen2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
          loading:true,  
          key: props.route.params.key,
          title:props.route.params.title,
          Data:[],
        };
      }
      componentDidMount(){
        //   console.log(this.state)
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${this.state.title}&type=video&key=AIzaSyDe2B3MdHxbaaTc3g0KXKMJUayif0JTr5U`)
          .then(res => res.json())
          .then((data )=> {
              this.setState({
                  ...this.state,
                  loading:false,
                  Data:data
              })
          })
          .catch(err =>{
              console.log(err);
          })
      }
      render(){
          if(this.state.loading){
              return(
                <View style={{flex:1,justifyContent:"center",alignItems:'center'}}>
                  <ActivityIndicator size="large" color="#138086'"/>
                </View>
              )
          }
          else{
            // console.log(this.state.Data.items)
          return(
              <SafeAreaView style={styles.container}>
                  <View style = {styles.nav}>
                    <View style={styles.navText}>
                      <Text style={{fontSize:20}}>{this.state.title}</Text>
                      </View>
                  </View>
                  {/* {console.log(this.state.Data.items)} */}
               <FlatList
                    data={this.state.Data.items}
                    renderItem={({item})=>{
                        return <MiniCard
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            channelId={item.snippet.channelId}
                            channelTitle={item.snippet.channelTitle}
                            data={this.state.Data.items}
                            screen={"screen2"}
                        />
                    }}
                    keyExtractor={item=>item.id.videoId}
                />
              </SafeAreaView>
          )
      }
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
  });

export default Screen2;