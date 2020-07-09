export const formatTime = (seconds)=>{

    return `${('0'+parseInt(seconds/(60*60))).slice(-2)}:${('0'+parseInt((seconds/60)%60)).slice(-2)}:${('0'+seconds %60).slice(-2)}`
}
