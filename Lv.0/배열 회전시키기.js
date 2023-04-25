function solution(numbers, direction) {
    var answer = [];
    
    var len = numbers.length;
    var key = 1;
    
    for(var i=0; i<len; i++){
        if(direction == 'right' && i == 0){
            key = -1;
            answer[i] = numbers[len - 1];
            continue;
       }
        answer[i] = numbers[(i+key) % len];
    }
    
    return answer;
}