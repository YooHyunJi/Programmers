function solution(str1, str2) {
    var answer = 2;
    
    if(str1.indexOf(str2) != -1){ answer -= 1;}
    
    return answer;
}