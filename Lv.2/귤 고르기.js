function solution(k, tangerine) {
    var answer = 0;
    
    var len = tangerine.length;
    var distinct_tangerine = [];
    var idx = 0;
    var sum = [];
    var box = 0;
    
    tangerine = tangerine.sort(function(a, b){ return a-b;})
    
    for(var i=0; i<len; i++){
        idx = distinct_tangerine.indexOf(tangerine[i]);
        if(idx == -1){
            distinct_tangerine.push(tangerine[i]);
            sum.push(1);
        }else{
            sum[idx]++;
        }
    }
    
    sum = sum.sort(function(a, b){ return b-a;});
    len = sum.length;
    
    for(var i=0; i<len; i++){
        answer++;
        box += sum[i];
        if(box >= k){ break;}
    }
    
    return answer;
}

