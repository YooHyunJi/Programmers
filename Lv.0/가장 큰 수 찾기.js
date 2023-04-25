function solution(array) {
    var answer = [0, 0];
    
    var len = array.length;
    
    for(var i=0; i<len; i++){
        if(array[i] > answer[0]){
            answer[0] = array[i];
            answer[1] = i;
        }
    }
    
    return answer;
}