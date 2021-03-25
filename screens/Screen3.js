import React, {Component} from 'react';
import { Text, View,Dimensions,FlatList,TouchableOpacity,Image} from 'react-native';
import Constant from 'expo-constants'
import { WebView } from 'react-native-webview';


class Screen3 extends Component{
    constructor(props) {
        super(props);
        this.state = {
          videoId:props.route.params.videoId,
          title:props.route.params.title,
          Data:props.route.params.data,
          channelId:props.route.params.channelId,
        };
        this.eventHandler=this.eventHandler.bind(this)
      }
      eventHandler(videoId,channelId,title){
        this.setState({
          videoId:videoId,
          title:title,
          channelId:channelId,
        })
      }
      render(){
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
                    data={this.state.Data}
                    renderItem={({item})=>{
                        return (  <TouchableOpacity
                          onPress={() => this.eventHandler(item.id.videoId,item.snippet.channelId,item.snippet.title)}
                          >
                        <View style={{flexDirection:"row",margin:10,marginBottom:0}}>
                            <Image 
                              source={{uri:`https://i.ytimg.com/vi/${item.id.videoId}/hqdefault.jpg`}}
                              style={{
                                  width:"45%",
                                  height:100
                              }} />
                              <View style={{
                                  paddingLeft:7
                              }}>
                                  <Text style={{
                                      fontSize:17,
                                      width:Dimensions.get("screen").width/2,
                                    
                                  }}
                                  ellipsizeMode="tail"
                                  numberOfLines={3}
                                  >{item.snippet.title}</Text>
                                  <Text style={{fontSize:12}}>{item.snippet.channelId}</Text>
                              </View>
                        </View>
                        </TouchableOpacity>
                        )
                    }}
                    keyExtractor={item=>item.id.videoId}
                />
                {/* {console.log(this.state.title)} */}
            </View>
        </View>
          )
    }
}

export default Screen3