function solution(n) {
    var answer = 1;
    
    while((6 * answer) % n != 0){
        answer++;
    }
    
    return answer;
}