function solution(age) {
    var answer = '';
    
    while(age > 0){
        answer += String.fromCharCode(age % 10 + 97);
        age = Math.floor(age / 10);
    }
    
    answer = answer.split('').reverse().join('');
    
    return answer;
}