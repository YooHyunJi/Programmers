function solution(n) {
    var answer = 2;
    
    if(Math.sqrt(n) == Math.ceil(Math.sqrt(n))){ answer = 1;}
        
    return answer;
}