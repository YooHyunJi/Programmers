function solution(k, m, score) {
    var answer = 0;
    
    var len = score.length;
    
    score = score.sort().reverse();

    for(var i=m-1; i<len; i+=m){
        answer += score[i] * m;
    }
    
    return answer;
}