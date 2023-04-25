function solution(array, n) {
    var answer = 0;
    
    var len = array.length;
    var gap = 100;
    var new_gap = 0;
    var cnt = 0;
    var arr_answer = [];
    
    for(var i=0; i<len; i++){
        new_gap = Math.abs(array[i] - n);
        if(new_gap <= gap){
            gap = new_gap;
            answer = array[i];
        }
    }
    
    for(var i=0; i<len; i++){
        if(gap == Math.abs(array[i] - n)){
            arr_answer.push(array[i]);
        }
    }
    len = arr_answer.length;
    
    if(len != 1){ 
        answer = arr_answer[0] < arr_answer[1] ? arr_answer[0] : arr_answer[1];
    }
    
    return answer;
}