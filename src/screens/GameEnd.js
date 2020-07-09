
import React,{useEffect,} from 'react';
import { Animated, View,Text,Button,StyleSheet,Dimensions,Easing,} from 'react-native';

const { height } = Dimensions.get('window')




export default  ({onPressRetry,hasWin})=>{

    const scale = new  Animated.Value(1)  
    const translateY = new  Animated.Value(height)
    
    useEffect(()=>{
        Animated.sequence([
            Animated.timing(translateY,{toValue:0,easing:Easing.out(Easing.ease),duration:1000,useNativeDriver:true}),
            Animated.loop(Animated.timing(scale,{toValue:1.4,easing:Easing.out(Easing.ease),duration:100,useNativeDriver:true,}),{iterations:4,resetBeforeIteration:true}),
            Animated.timing(scale,{toValue:1,easing:Easing.out(Easing.ease),duration:100,useNativeDriver:true,})
        ]).start()
    },[])
 
    return (
        <View style={styles.container}>
        <Animated.View style={[styles.content,{transform:[{scaleX:scale},{scaleY:scale},{translateY}]}]} >
              <Text style={styles.text} testID="GameEndMessage">{hasWin?'YOU WON':'GAME OVER'}</Text>  
                <Button onPress={onPressRetry} title="RETRY"/>
        </Animated.View>
        </View>
    )
}


const styles = StyleSheet.create({

  container:{
      justifyContent:'center',
  alignItems:'center',
  height:'100%',
  width:'100%',
  position:'absolute',
    zIndex:1,
    },
    content:{
        backgroundColor:'purple',
        height:200,
        width:'80%',
        justifyContent:'center',
    },
    text:{
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center'      
    }  
})