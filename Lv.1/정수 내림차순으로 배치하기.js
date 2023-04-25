function solution(n) {
    var answer = 0;
    
    answer = ((''+n).split('')).sort().reverse().join('') * 1;
    
    return answer;
}