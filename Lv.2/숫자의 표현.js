function solution(n) {
    var answer = 0;
    
    var sum = 0;
    var inc = 0;
    
    for(var i=1; i<=n; i++){
        sum = 0;
        inc = 0;
        while(sum < n){
            sum += (i+inc);
            inc++;
        }
        if(sum == n){ answer++; }
    }
    
    return answer;
}