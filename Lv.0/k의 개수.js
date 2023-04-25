function solution(i, j, k) {
    var answer = 0;
    
    var tmp =0;
    
    for(var d=i; d<=j; d++){
        tmp = d;
        while(tmp != 0){
            if(tmp%10 == k){ answer++; }
            tmp = Math.floor(tmp/10);
        }
    }
    
    return answer;
}