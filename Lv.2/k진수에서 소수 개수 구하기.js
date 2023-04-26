function solution(n, k) {
    var answer = 0;
    
    n = n.toString(k)
    var len = n.length;
    var tmp_num = '';
    var arr_prime = []
    var cnt = 0;
    
    for(var i=0; i<len; i++){
        if(i == len-1){
            tmp_num += n[i];
            arr_prime.push(tmp_num*1);
            break;
        }
        if(n[i] == '0'){
            if(tmp_num != ''){ arr_prime.push(tmp_num*1); }
            tmp_num = '';
        }
        else{ tmp_num += n[i]; }
    }
    
    len = arr_prime.length;
    
    for(var i=0; i<len; i++){
        cnt = 0;
        if(arr_prime[i] == 1){ continue; }
        for(var j=1; j<=Math.sqrt(arr_prime[i]); j++){
            if(arr_prime[i] % j == 0){ cnt++; }
        }
        if(cnt == 1){ answer++; }
    }
    
    
    
    return answer;
}