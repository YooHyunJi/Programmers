function solution(arr) {
    var answer = 0;
    var sum = arr.reduce((a, b) => a+b);
    
    answer = sum / arr.length;
    
    return answer;
}