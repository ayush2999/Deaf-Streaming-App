import React, {Component} from 'react';
import { StyleSheet, Text, View,Dimensions,FlatList} from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';
import MiniCard from './MiniCard';


class Screen3 extends Component{
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
          videoId:props.route.params.videoId,
          title:props.route.params.title,
          Data:[],
          channelId:props.route.params.channelId,
          loading:true
        };
      }
      componentDidMount(){
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=deaf&type=video&key=AIzaSyCu3SZOq3JrAKm83AuWzxrXcwHIZH1_nmQ`)
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
          return(
            <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
            <View style={{width:"100%",height:200}}>
               {/* <HTML source={{ html: htmlContent }} />   */}
               <WebView
               startInLoadingState={true}
               javaScriptEnabled={true}
               domStorageEnabled={true}
               mediaPlaybackRequiresUserAction={false}
               allowsFullscreenVideo={true} 
               source={{uri:`https://www.youtube.com/embed/${this.state.videoId}`}}
               />
            </View>
            <Text style={{
                fontSize:20,
                width:Dimensions.get("screen").width - 50,
                margin:9
            }}
            numberOfLines={2}
            ellipsizeMode="tail"
            >
              {this.state.title}
            </Text>
            <View style={{borderBottomWidth:1}}/>
            <View>
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
                {/* {console.log(this.state.title)} */}
            </View>
        </View>
          )
      }
    }
}

export default Screen3