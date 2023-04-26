function solution(priorities, location) {
    var answer = 0;
    
    var len = priorities.length;
    var max_num = 0;
    var idx = 0;
    var arr_idx = [];
    
    for(var i=0; i<len; i++){ arr_idx.push(i); }
    
    for(var i=0; i<len; i++){
        max_num = Math.max.apply(null, priorities);
        idx = priorities.indexOf(max_num);
        answer++;
        if(arr_idx[idx] == location){ 
            break; 
        }else{
            priorities = (priorities.slice(idx+1, priorities.length)).
            concat(priorities.slice(0, idx));
            arr_idx = (arr_idx.slice(idx+1, arr_idx.length)).
            concat(arr_idx.slice(0, idx));
        }
    }
    
    return answer;
}