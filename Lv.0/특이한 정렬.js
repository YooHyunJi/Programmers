function solution(numlist, n) {
    var answer = [];
    
    var d = 1;
    var cnt = 0;
    var len = numlist.length;
    
    if(numlist.indexOf(n) != -1){ 
        answer.push(n); 
        cnt++;
    }
    
    while(1){
        if(n+d <= 10000){
            if(numlist.indexOf(n+d) != -1){ 
                answer.push(n+d); 
                cnt++;
            }
        }
        if(n-d >= 1){
            if(numlist.indexOf(n-d) != -1){ 
                answer.push(n-d); 
                cnt++;
            }
        }
        
        d++;
        if(cnt == len){ break; }
    }
    
    
    return answer;
}