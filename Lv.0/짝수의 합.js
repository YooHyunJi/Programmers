function solution(n) {
    var answer = 0;
    
    for (var i=0; i<=n; i=i+2){
        answer += i;  
    }
    
    return answer;
}