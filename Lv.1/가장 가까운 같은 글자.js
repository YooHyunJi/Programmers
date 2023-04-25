function solution(s) {
    var answer = [];
    
    var len = s.length;
    
    for(var i=0; i<len; i++){
        for(var j=i-1; j>=0; j--){
            if(s[i] == s[j]){ 
                answer.push(i-j);
                break; 
            }
        }
        if(answer.length != i+1){ answer.push(-1); }
    }
    
    return answer;
}