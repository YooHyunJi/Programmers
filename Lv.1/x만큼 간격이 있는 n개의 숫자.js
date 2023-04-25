function solution(x, n) {
    var answer = [];
    
    var num = 0;
    
    for(var i=0; i<n; i++){
        num += x;
        answer.push(num);
    }
    
    return answer;
}