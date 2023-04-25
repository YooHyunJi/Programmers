function solution(my_string) {
    var answer = '';
    
    var len = my_string.length;
    var al = '';
    
    for(var i=0; i<len; i++){
        al = my_string[i];
        if('a' <= al && al <= 'z'){
            answer += al.toUpperCase();
        }else{
            answer += al.toLowerCase();
        }
    }
    
    return answer;
}