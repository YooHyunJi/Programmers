function solution(a, b) {
    var answer = 0;
    
    var start = a<b? a: b;
    var end = a+b - start;
    
    for(var i=start; i<=end; i++){ answer += i; }
    
    return answer;
}