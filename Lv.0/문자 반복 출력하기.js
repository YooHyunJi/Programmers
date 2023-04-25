function solution(my_string, n) {
    var answer = '';
    
    var len = my_string.length;
    
    for(var i=0; i<len; i++){
        for(var j=0; j<n; j++){
            answer += my_string[i];
        }
    }
    
    
    return answer;
}