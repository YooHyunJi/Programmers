function solution(n) {
    var answer = 1;
    
    var cnt = 0;
    
    if(n != 2){
        for(var i=3; i<=n; i++){
            cnt = 0;
            if(i%2 == 0){ 
                continue; 
            }else{
                for(var j=1; j<=Math.sqrt(i); j++){
                    if(i%j == 0){ 
                        cnt ++; 
                        if(cnt == 2){ 
                            break; 
                        }
                    }
                }
                if(cnt == 1){ answer++; }
            }
        }
    }
    
    return answer;
}