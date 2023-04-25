function solution(N, stages) {
    var answer = [];
    
    var arr_fail = [];
    var arr_try = [];
    var arr_rank = [];
    var rate = 0;
    var arr_sort = [];
    var len = 0;
    
    for(var i=1; i<=N; i++){
        arr_fail = stages.filter(lv => lv == i);
        arr_try = stages.filter(lv => lv >= i)
        
        rate = arr_fail.length == 0? -1: arr_fail.length / arr_try.length;
        arr_rank.push(rate);
    }
    
    arr_sort = [...(new Set(arr_rank))].sort().reverse();
    len = arr_sort.length;
    
    for(var i=0; i<len; i++){
        for(var j=0; j<N; j++){
            if(arr_sort[i] == arr_rank[j]){
                answer.push(j+1);
            }
        }
    }
    
    
    return answer;
}