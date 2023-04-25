function solution(t, p) {
    var answer = 0;
    
    var len_t = t.length;
    var len_p = p.length;
    
    p = p*1;
    
    for(var i=0; i<len_t-len_p+1; i++){
        if(t.slice(i, i+len_p)*1 <= p){ answer++; }
    }
    
    return answer;
}