function solution(my_string) {
    var answer = [];
    
    var len_string = my_string.length;
    var len_number = 0;
    var tmp = 0;
    
    for(var i=0; i<len_string; i++){
        if('0' <= my_string[i] && my_string[i] <= '9'){
            answer.push(my_string[i] * 1);
        }
    }
    
    len_number = answer.length;
    for(var i=0; i<len_number; i++){
        for(var j=0; j<i; j++){
            if(answer[i] < answer[j]){
                tmp = answer[i];
                answer[i] = answer[j];
                answer[j] = tmp;
            }
        }
    }
        
    return answer;
}