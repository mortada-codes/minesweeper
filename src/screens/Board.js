import React,{useState,useCallback,useReducer} from 'react';
import { View,Text,StyleSheet,Dimensions,} from 'react-native';

const { width, } = Dimensions.get('window')
import Cell from '../components/Cell';
import Header from '../components/Header';
import GameEnd from './GameEnd';
import { generateBoard,visitCell, } from '../engine/GameEngine';



const initialState = {board: generateBoard(),isGameEnd:false,hasWin:false};

function reducer(state, action) {
  switch (action.type) {
    case 'new_game':
      return {board: generateBoard(),isGameEnd:false,hasWin:false};
    case 'visit_cell':
      return {...visitCell(state.board,action.payload)};
    default:
     state;
  }
}



export default ()=>{


        const [{board,isGameEnd,hasWin},dispatch] = useReducer(reducer,initialState)


  
    const onCellPress = useCallback((location)=>{
        dispatch({type:'visit_cell',payload:location})
    },[])
return (
    <View>
        <Header isPlaying={!isGameEnd}/>
        {
            board.map((r,rIndex)=>{

                return (
                    <View key={`${rIndex}`} style={{flexDirection:'row'}}>
                        {
                                r.map((c,cIndex)=>(<Cell key={`${rIndex}_${cIndex}`} width={width/board.length} cell={board[rIndex][cIndex]}  location={[rIndex,cIndex]} onPress={onCellPress}/>))
                        }
                    </View>
                    
            )
        })
    }

           {isGameEnd && <GameEnd hasWin={hasWin}  onPressRetry={()=>dispatch({type:'new_game'})} />} 
    </View>
    
)
}


const styles = StyleSheet.create({

})