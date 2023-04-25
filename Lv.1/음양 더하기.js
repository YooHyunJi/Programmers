function solution(absolutes, signs) {
    var answer = 0;
    
    var len = absolutes.length;
    var num = 0;
    
    for(var i=0; i<len; i++){
        num = signs[i] == true? absolutes[i]: absolutes[i]*(-1);
        answer += num;
    }
    
    return answer;
}