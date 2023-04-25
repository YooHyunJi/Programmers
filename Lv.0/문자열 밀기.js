function solution(A, B) {
    var answer = 0;
    
    var len = A.length;
    var tmp = '';
    
    if(A == B){ return 0; }
    
    for(var i=1; i<=len; i++){
        A = A[len-1] + A.slice(0, len-1);
        if(A == B){
            answer = i;
            break;
        }
        if(i == len){ answer -= 1; }
    }
    
    return answer;
}