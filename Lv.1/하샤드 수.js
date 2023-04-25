function solution(x) {
    var answer = true;
    
    var up = x;
    var bottom = 0;
    
    while(x != 0){
        bottom += x%10;
        x = Math.floor(x/10);
    }
    
    if(up % bottom != 0){ answer = false; }
    
    return answer;
}