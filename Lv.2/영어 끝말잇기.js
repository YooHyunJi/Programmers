function solution(n, words) {
    var answer = [];

    var len = words.length;
    var person = 0;
    var turn = 0;
    
    for(var i=1; i<len; i++){
        if(words[i-1].slice(-1) != words[i][0] ||
            words.slice(0, i).indexOf(words[i]) != -1){
            person = i % n + 1;
            turn = Math.ceil((i+1)/n);
            break;
        }
    }
    answer.push(person);
    answer.push(turn);
    
    return answer;
}