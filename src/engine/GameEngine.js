export const BOARD_LENGTH = 9;
export const MINES_COUNT = 10
export const generateRandomNumber = (min,max)=>Math.floor(Math.random() * (max-min)) + min

export const generateBoard = ()=>{

const gameArr = Array.from({length:BOARD_LENGTH}).map(i=>Array.from({length:BOARD_LENGTH})); 

let mines = 1
    while(mines<=MINES_COUNT){

        const rowIndex = generateRandomNumber(0,BOARD_LENGTH)
        const colIndex = generateRandomNumber(0,BOARD_LENGTH)

        if(!gameArr[rowIndex][colIndex]){
            gameArr[rowIndex][colIndex] = { value:'*',visited:false}
            mines++
        }
    }
    
    return gameArr
}

const isGameEnd = (board,)=>{

   return board.map(i=>i.every((c=>c?.visited | (isMine(c)&& !c?.visited)))).every((i)=>i)
}

export const visitCell = (board,location)=>{
     
    const calculatedBoard =calculateMinesNeighbors(board,location) 
    return { board:calculatedBoard,isGameEnd:isGameEnd(calculatedBoard),hasWin:!isMine(board[location[0]][location[1]])}
}

export const isMine = (c)=>  c?.value=='*'

export const calculateMinesNeighbors = (board,location,)=>{
   
    let rIndex = location[0];
    let cIndex = location[1];
    const queue = [location]
    const isGameOver = isMine(board[rIndex][cIndex])
    
    if(isGameOver){
        board.forEach( (row,rI) => {
            row.forEach((c,cI)=>{
                  queue.push([rI,cI])  
            })
        });
    }
    debugger
    while(queue.length !=0){
        let cellSum = 0
       const currentCell = queue.shift()
       rIndex = parseInt(currentCell[0])
       cIndex = parseInt(currentCell[1])  
       if(isMine(board[rIndex][cIndex])){
        board[rIndex][cIndex].visited = isGameOver;
       }   
        if( board[rIndex][cIndex]?.visited  | isMine(board[rIndex][cIndex])){
            
            
            continue;
        
        }
        const neighbors = getNeighbors(rIndex,cIndex)
         neighbors.map(i=>{

            if(isMine(board[i[0]][i[1]])){
                cellSum++
            }
            
        })
        board[rIndex][cIndex] = {value:cellSum,visited:true}
        if(cellSum ==0  ){
               neighbors.map(i=>{
                
                  queue.push(i)
               })
           } 
        
    }
    return board.slice()
}




export const getNeighbors =(r,c)=>{
    const neighbors = []
     neighbors.push([r-1 , c-1])
     neighbors.push([r-1 , c])
     neighbors.push([r-1 , c+1])
     neighbors.push([r , c+1])
     neighbors.push([r+1 , c+1])
     neighbors.push([r+1 , c])
     neighbors.push([r+1 , c-1])
     neighbors.push([r,  c-1])
     
     return neighbors.filter(i=> i[0]>-1 && i[0]< BOARD_LENGTH && i[1]>-1 && i[1]< BOARD_LENGTH )
}

