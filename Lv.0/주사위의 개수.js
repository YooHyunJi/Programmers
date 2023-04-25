function solution(box, n) {
    var answer = 1;
    
    for(var i=0; i<3; i++){
        answer *= Math.floor(box[i] / n);
    }
    
    return answer;
}