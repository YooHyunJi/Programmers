function solution(n) {
    var answer = 0;
    
    var divisor = 0;
    
    for(var i=1; i<=n; i++){
        divisor = 0;
        for(var j=1; j<=i; j++){
            if(i % j == 0){
                divisor++;
            }
            if(divisor == 3){
                answer++;
                break;
            }
        }
    }
    
    return answer;
}