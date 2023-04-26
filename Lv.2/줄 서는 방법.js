function solution(n, k) {
    var answer = [];
    
    var pool = [];
    var progress = 0;
    var n_tmp = n;
    function factorial(n){};
    
    for(var i=1; i<=n; i++){ pool.push(i); }
    
    for(var i=0; i<n; i++){
        progress = Math.ceil(k/factorial(n_tmp-1))-1;
        answer.push(pool[progress]);
        pool.splice(progress, 1);
        k -= factorial(n_tmp-1)*(progress);
        n_tmp--;
    }
    
    return answer;
    
    function factorial(n){
        var answer = 1;
        for(var i=1; i<=n; i++){
            answer *= i;
        }
        return answer;
    }
}