function solution(numbers) {
    var answer = -1;
    
    var sum = numbers.reduce((a, b)=> a+b);
    
    answer = 45 - sum;
    
    return answer;
}