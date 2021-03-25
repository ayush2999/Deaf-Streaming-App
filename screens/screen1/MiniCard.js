import React from 'react';
import {Text, View,Image,Dimensions,TouchableOpacity} from 'react-native';
import { useNavigation,useTheme } from '@react-navigation/native';

const MiniCard = (props)=>{
    const navigation = useNavigation();
    const {colors} = useTheme()
    const textcolor = colors.iconColor
    // console.log(props);
    
  return(
      <TouchableOpacity
      onPress={()=>navigation.navigate("Screen3",{videoId:props.videoId,title:props.title,data:props.data,
        channelId:props.channelId})}
      >
    <View style={{flexDirection:"row",margin:10,marginBottom:0}}>
        <Image 
           source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
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
                   color:textcolor
               }}
               ellipsizeMode="tail"
               numberOfLines={3}
               >{props.title}</Text>
               <Text style={{fontSize:12, color:textcolor,width:Dimensions.get("screen").width/2}} numberOfLines={2}>{props.channelTitle}</Text>
           </View>
    </View>
    </TouchableOpacity>
  )
}

export default MiniCard