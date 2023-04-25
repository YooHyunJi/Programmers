function solution(d, budget) {
    var answer = 0;
    
    var len = d.length;
    var tmp = 0;
    
    for(var i=0; i<len-1; i++){
        for(var j=i+1; j<len; j++){
            if(d[i] > d[j]){
                tmp = d[i];
                d[i] = d[j];
                d[j] = tmp;
            }
        }
    }
    
    for(var i=0; i<len; i++){
        if(budget - d[i] >= 0){
            budget -= d[i];
            answer++;
        }
    }
    
    return answer;
}