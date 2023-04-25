function solution(my_string) {
    var answer = '';
    
    var len = my_string.length;
    var dic = '';
    
    for(var i=0; i<len; i++){
        if(dic.indexOf(my_string[i]) == -1){
            dic += my_string[i];
            answer += my_string[i];
        }
    }
    
    return answer;
}