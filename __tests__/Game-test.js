import {BOARD_LENGTH,MINES_COUNT,generateBoard,getNeighbors,calculateMinesNeighbors,generateRandomNumber, visitCell} from '../src/engine/GameEngine';

it('generated board array length should equal BOARD_LENGTH', () => {
    expect(generateBoard().length).toBe(BOARD_LENGTH);
 });


 it('generated board array length should equal BOARD_LENGTH', () => {
    const board = generateBoard();
    let minesCount = 0;
    board.forEach(r=>{
        r.forEach(c=>{
            if(c?.value =="*"){
                minesCount++
            }
        })
    })
    expect(minesCount).toBe(MINES_COUNT);

 });

 it('neighbors  array length should equal eight', () => {
    
    expect(getNeighbors(4,4).length).toBe(8);

 });

 it('neighbors  array length should equal eight', () => {
    
    expect(getNeighbors(0,0).length).toBe(3);

 });


 it('neighbors  array length should equal eight', () => {
    expect(getNeighbors(8,8).length).toBe(3);
 });


 it('when fall on mine', () => {
    const board = generateBoard();
    let location = []
    for (let r=0;r<BOARD_LENGTH;r++){
       for (let c=0;c<BOARD_LENGTH;c++){
          if(board[r][c]?.value=='*'){
             location = [r,c]
             break;
          }
       }
    }
  const state =  visitCell(board,location)
  expect(state.isGameEnd).toBeTruthy()
  expect(state.hasWin).toBe(false)
});


it('when board resolved without fall on mine', () => {
   const board = generateBoard();
   let location = []
   for (let r=0;r<BOARD_LENGTH;r++){
      for (let c=0;c<BOARD_LENGTH;c++){
         if(!board[r][c]){
            board[r][c] ={visited:true}
            location=[r,c]
         }
      }
   }
 const state =  visitCell(board,location)
 expect(state.isGameEnd).toBeTruthy()
 expect(state.hasWin).toBeTruthy()
});