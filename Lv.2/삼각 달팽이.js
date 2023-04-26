function solution(n) {
    var answer = [];
    
    var snail = [];
    var max_r = n;
    var max_c = n;
    var idx_r = -1;
    var idx_c = 0;
    var num = 1;
    var max = 0;
    var direction = 'down';
    
    for(var i=1; i<=n; i++){ max += i; }
    
    for(var i=1; i<=n; i++){ snail.push(new Array(i).fill(0)); }
    
    while(num <= max){        
        if(direction == 'down' && idx_r+1 == max_r){ 
            direction = 'right';
            max_r--;
        }
        if(direction == 'right' && idx_c+1 == max_c){
            direction = 'diagonal';
            max_c -= 2;
        }
        if(direction == 'diagonal' && snail[idx_r-1][idx_c-1] != 0){
            direction = 'down';
        }
        
        switch(direction){
            case 'down':
                idx_r++;
                break;
            case 'right':
                idx_c++;
                break;
            case 'diagonal':
                idx_r--;
                idx_c--;
                break;
        }
        snail[idx_r][idx_c] = num;
        num++;
    }
    
    for(var i=0; i<n; i++){
        for(var j=0; j<i+1; j++){ answer.push(snail[i][j]); }
    }
    
    return answer;
}