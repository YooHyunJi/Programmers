function solution(before, after) {
    var answer = 0;
    
    var len = before.length;
    var idx = 0;
    
    for(var i=0; i<len; i++){
        idx = after.indexOf(before[i]);
        if(idx != -1){
            after = after.replace(after[idx], '');
        }
    }
    
    if(after == ''){
        answer = 1;
    }
    
    return answer;
}