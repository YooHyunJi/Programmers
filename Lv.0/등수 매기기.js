function solution(score) {
    var answer = [];
    
    var arr_std = [];
    var len = score.length;
    var std = 0;
    
    for(var i=0; i<len; i++){
        std = (score[i][0] + score[i][1])/2;
        arr_std.push(std);
    }
    
    answer = Array.from({length: len}, () => 1);
    for(var i=0; i<len; i++){
        for(var j=0; j<len; j++){
            if(arr_std[i] < arr_std[j]){
                answer[i]++;
            }
        }
    }
    return answer;
}