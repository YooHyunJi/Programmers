function solution(A,B){
    var answer = 0;

    var len = A.length;
    var tmp = 0;
    
    A = A.sort((a, b)=> a-b);
    B = B.sort((a, b)=> b-a);
    
    for(var i=0; i<len; i++){
        answer += A[i] * B[i];
    }

    return answer;
}