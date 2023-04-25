function solution(n) {
    var answer = 0;
    
    var ternary = [];
    var len = 0;
    
    while(n != 0){
        ternary.push(n%3);
        n = Math.floor(n/3);
    }
    
    len = ternary.length;
    
    for(var i=0; i<len; i++){
        answer += ternary[len-1-i] * (3**i);
    }
    
    return answer;
}