function solution(n) {
    var answer = '';
    
    answer = '수박'.repeat(Math.floor(n/2));
    if(n%2 == 1){
        answer += '수';
    }
    
    return answer;
}