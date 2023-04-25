function solution(array) {
    var answer = 0;
    
    var len = array.length;
    
    for(var i=0; i<len; i++){
        while(array[i] != 0){
            if(array[i] % 10 == 7){ answer++; }
            array[i] = Math.floor(array[i] / 10);
        }
    }
    
    return answer;
}