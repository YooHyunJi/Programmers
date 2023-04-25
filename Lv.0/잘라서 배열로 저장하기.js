function solution(my_str, n) {
    var answer = [];
    
    var idx = 0;
    var len = my_str.length;
    
    while(idx < len){
        answer.push(my_str.substr(idx, n));
        idx += n;
    }
    
    return answer;
}