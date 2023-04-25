function solution(my_string, letter) {
    var answer = '';
    
    var len = my_string.length;
    
    for(var i=0; i<len; i++){
        if(my_string[i] == letter){
            continue;
        }else{
            answer += my_string[i];
        }
    }
    
    return answer;
}