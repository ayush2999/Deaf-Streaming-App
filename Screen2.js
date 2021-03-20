import React,{ Component } from 'react';
import {Card} from 'react-native-material-cards';
import MiniCard from './MiniCard'
import { FlatList,SafeAreaView, StyleSheet, Text, View, StatusBar, Platform,Image, ScrollView,TouchableOpacity} from 'react-native';

class Screen2 extends Component{
    constructor(props) {
        super(props);
        this.state = {
          loading:true,  
          key: props.route.params.key,
          Data:null,
        };
      }
      componentDidMount(){
          fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=100&q=deaf&type=video&key=AIzaSyDe2B3MdHxbaaTc3g0KXKMJUayif0JTr5U`)
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
               <Text>Wait...</Text>
              )
          }
          else{
            // console.log(this.state.Data.items)
          return(
              <SafeAreaView style={styles.container}>
               <FlatList
                    data={this.state.Data.items}
                    renderItem={({item})=>{
                        return <MiniCard
                            videoId={item.id.videoId}
                            title={item.snippet.title}
                            channel={item.snippet.channelId}
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
  });

export default Screen2;