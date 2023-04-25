function solution(n) {
    var answer = 1;
    
    for(answer; answer<n; answer++){
        if(n%answer == 1){ break; }
    }
    
    return answer;
}