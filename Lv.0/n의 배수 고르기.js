function solution(n, numlist) {
    var answer = [];
    
    var len = numlist.length;
    
    for(var i=0; i<len; i++){
        if(numlist[i] % n == 0){ answer.push(numlist[i]); }
    }
    
    return answer;
}