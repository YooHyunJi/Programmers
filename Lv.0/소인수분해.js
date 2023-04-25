function solution(n) {
    var answer = [];
    
    for(var i=2; i<=n; i++){
        if(n % i == 0){
            answer.push(i);
            while(n % i == 0){
                n /= i;
            }
        }
        if(n == 1) break;
    }
    
    return answer;
}