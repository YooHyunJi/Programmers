function solution(strings, n) {
    var answer = [];
    
    var len = strings.length;
    var arr_idx = Array.from({length: len}, ()  => 0);
    
    strings.sort();
    
    for(var i=1; i<len; i++){
        for(var j=0; j<i; j++){
            if(strings[i][n] >= strings[j][n]){
                arr_idx[i]++;
            }else{
                arr_idx[j]++;
            }
        }
    }
    
    for(var i=0; i<len; i++){
        answer[arr_idx[i]] = strings[i];
    }
    
    return answer;
}