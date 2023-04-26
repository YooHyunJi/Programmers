function solution(progresses, speeds) {
    var answer = [];
    
    var len = progresses.length;
    var idx = 0;
    var cnt = 0;
    
    while(progresses.length != 0){
        len = progresses.length;
        cnt = 0;
        while(progresses[0] < 100){
            for(var i=0; i<len; i++){ progresses[i] += speeds[i]; }
        }
        
        len = progresses.length;
        for(var i=0; i<len; i++){
            if(progresses[i] >= 100){
                cnt++;
                progresses.shift();
                speeds.shift();
                i--;
                len--;
            }else{ break; }
        }
        answer.push(cnt);
    }
    
    return answer;
}