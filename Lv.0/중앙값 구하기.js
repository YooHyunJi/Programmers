function solution(array) {
    var answer = 0;
    
    const len = array.length;
    var tmp = 0;
    
    for(var i=0; i<len; i++){
        for(var j=i+1; j<len; j++){
            if(array[i] > array[j]){
                tmp = array[i];
                array[i] = array[j];
                array[j] = tmp;
            }
        }
    }
    
    var mid_idx = parseInt(len / 2);
    answer = array[mid_idx];
    
    return answer;
}