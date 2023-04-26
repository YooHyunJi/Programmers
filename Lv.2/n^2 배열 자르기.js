function solution(n, left, right) {
    var answer = [];
    
    var from_part = Math.floor(left/n);
    var from_idx = left%n;
    var to_part = Math.floor(right/n);
    
    var num = from_part+1;
    
    for(var i=from_part; i<=to_part; i++){
        for(var j=1; j<=num; j++){
            answer.push(num);
        }
        for(var j=1; j<=n-num; j++){
            answer.push(num+j);
        }
        num++;
    }
    
    answer = answer.splice(from_idx, right-left+1);
    
    return answer;
}