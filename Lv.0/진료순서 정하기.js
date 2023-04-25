function solution(emergency) {
    var answer = [];
        
    var len = emergency.length;
    
    answer= Array.from({length: len}, () => 0);
    
    for(var i=0; i<len; i++){
        for(var j=0; j<len; j++){
            if(emergency[i] <= emergency[j]){
                answer[i]++;
            }
        }
    }
    
    return answer;
}
