function solution(my_string) {
    var answer = 0;
    
    var len = my_string.length;
    
    for(var i=0; i<len; i++){
        if('0' <= my_string[i] <= '9'){
            answer += (my_string[i] * 1);
        }
    }
    
    return answer;
}