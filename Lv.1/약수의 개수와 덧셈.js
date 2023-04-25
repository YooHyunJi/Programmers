function solution(left, right) {
    var answer = 0;
    
    var div = 0;
    
    for(var i=left; i<=right; i++){
        div = 0;
        for(var j=1; j<=i; j++){
            if(i%j == 0){
                div++;
            }
        }
        if(div%2 == 0){ answer += i; }
        else{ answer -= i;}
    }
    
    return answer;
}