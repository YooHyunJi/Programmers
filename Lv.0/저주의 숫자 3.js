function solution(n) {
    var answer = 0;
    
    var pass = 0;
    
    for(var i=0; i<n; i++){
        pass = 0;
        while(pass == 0){
            answer ++;
            if(answer%3 != 0 && answer%10 != 3 && (Math.floor(answer/10))%10 != 3){
                pass = 1;
            }
        }
    }
    
    return answer;
}