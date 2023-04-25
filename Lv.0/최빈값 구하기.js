function solution(array) {
    var answer = 0;
    
    var only_array = [...new Set(array)];
    var len = array.length;
    var only_len = only_array.length;
    var cnt_array = Array.from({length: only_len}, () => 0);
    var cnt_freq = 0;
    var idx = 0;
    
    for(var i=0; i< only_len; i++){
        cnt_array[i] = (array.filter(v => v == only_array[i])).length;
    }
    
    cnt_freq = Math.max.apply(null, cnt_array);
    
    if((cnt_array.filter(v => v == cnt_freq)).length > 1){ return -1; }
    else{
        idx = cnt_array.indexOf(cnt_freq);
        answer = only_array[idx];
    }    
    
    // console.log(cnt_array);
    // console.log(cnt_freq);
    
    return answer;
}