import React,{memo,} from 'react';
import {  View,Text,TouchableOpacity,StyleSheet} from 'react-native';







export default  memo(({width,location,onPress,cell})=>(<TouchableOpacity style={[{width,height:width,},styles.cell]} disabled={cell?.visited}  onPress={()=>onPress(location)}>
    <View style={styles.cellContent}>
<Text style={styles.text} testID="CellValue" >{cell?.visited?cell.value:''}</Text>
    </View>
</TouchableOpacity>))


const styles = StyleSheet.create({

    cell:{
        backgroundColor:'gray',
        borderWidth:1,
        borderColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    cellContent:{
        justifyContent:'center',
        alignItems:'center',
    },
    visitedCell:{

    },
    text:{
        color:'white',
        textAlignVertical:'center',  
    },

})