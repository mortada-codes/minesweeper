
import React,{useEffect,useState} from 'react';
import { View,Text,StyleSheet,} from 'react-native';

import { formatTime } from '../util';






export default  ({isPlaying})=>{
    const [gameTime,setGameTime] = useState(0)
            useEffect(()=>{
                 if(!isPlaying) return;   
                const INTERVALID =   setInterval(()=>{
                 setGameTime(prv=>++prv)           
                },1000) 
                return ()=> INTERVALID && clearInterval(INTERVALID)   
            },[isPlaying])


    return (<View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{fontSize:26}}>00</Text>
           <Text style={{fontSize:26}} >{formatTime(gameTime)}</Text> 
           <Text style={{fontSize:26}}>00</Text>
    </View>)
}
