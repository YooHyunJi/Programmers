function solution(array, commands) {
    var answer = [];
    
    var len = commands.length;
    var start = 0;
    var end = 0;
    var find = 0;
    var arr_tmp = [];
    var tmp_answer = 0;
    var tmp = 0;
    
    for(var i=0; i<len; i++){
        start = commands[i][0];
        end = commands[i][1];
        find = commands[i][2] - 1;
        
        if(start == end){
            tmp_answer = array[start-1];
        }else{
            arr_tmp = array.slice(start-1, end);
            for(var j=0; j<end-start; j++){
                for(var k=j+1; k <end-start+1; k++){
                    if(arr_tmp[j] > arr_tmp[k]){
                        tmp = arr_tmp[j];
                        arr_tmp[j] = arr_tmp[k];
                        arr_tmp[k] = tmp;
                    }
                }
            }
            tmp_answer = arr_tmp[find];
        }
        answer.push(tmp_answer);
    }
    
    return answer;
}