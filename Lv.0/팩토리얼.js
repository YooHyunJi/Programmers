function solution(n) {
    var answer = 0;
    
    var multi = 1;
    
    for(var i=1; i<=10; i++){
        multi *= i;
        if(multi == n){
            answer = i;
            break;
        }
        else if(multi >= n){
            answer = i - 1;
            break;
        }
    }
    
    return answer;
}