function solution(n) {
    var answer = 0;
    
    for(var i=1; i<Math.sqrt(n); i++){
        if(n % i == 0) answer ++;
    }
    
    answer *= 2;
    
    if(Math.pow(i, 2) == n) answer++;
    
    return answer;
}