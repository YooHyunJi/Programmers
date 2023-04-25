function solution(k, score) {
    var answer = [];
    
    var len = score.length;
    var arr_honor = [];
    var idx = 0;
    
    for(var i=0; i<k; i++){
        if(i == score.length){ break; }
        idx = 0;
        for(var j=0; j<arr_honor.length; j++){
            if(score[i] < arr_honor[j]){ break; }
            idx++;
        }
        arr_honor.splice(idx, 0, score[i]);
        answer[i] = arr_honor[0];
    }
    
    for(var i=k; i<len; i++){
        idx = 0;
        if(score[i] <= arr_honor[0]){
        }else{
            for(var j=0; j<k; j++){
                if(score[i] < arr_honor[j]){ break; }
                 idx++;
            }
            arr_honor.splice(idx, 0, score[i]);
            arr_honor = arr_honor.slice(1, k+1);
        }
        answer.push(arr_honor[0]);
    }
    
    return answer;
}