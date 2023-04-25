function solution(num, total) {
    var answer = [];
    var std = Math.ceil(total/num);
    var start = std - Math.floor(num/2);
    
    for(var i=0; i<num; i++){
        answer.push(start);
        start++;
    }
    
    return answer;
}