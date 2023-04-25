function solution(babbling) {
    var answer = 0;
    
    var arr_bab = ['aya', 'ye', 'woo', 'ma'];
    var len_1 = babbling.length;
    var len_2 = 0;
    var cnt = 0;
    
    for(var i=0; i<len_1; i++){
        for(var j=0; j<4; j++){
            var regex = new RegExp(`${arr_bab[j]}`, 'g');
            babbling[i] = babbling[i].replace(regex, j+1);
        }
    }
    
    for(var i=0; i<len_1; i++){     
        if(!isNaN(babbling[i]*1)){
            cnt = 0;
            len_2 = babbling[i].length;
            for(var j=0; j<len_2-1; j++){
                if(babbling[i][j] != babbling[i][j+1]){ cnt++; }
                else{ break; }
            }
            if(cnt == len_2-1){ answer++; }
        }
    }
    
    return answer;
}