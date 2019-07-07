function getAverage(marks){
    return Math.floor(marks.reduce((a,b) => a + b, 0) / marks.length);
}

getAverage([2,2,2,2]);