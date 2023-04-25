
function solution(s) {
    var answer = '';
    var len = s.length;
    var std = 0;
    
    console.log(len);
    
    if(len%2 == 1){
        std = Math.floor(len/2);
        answer = s[std];
    }else{
        std = len/2 - 1;
        answer = s[std] + s[std+1];
    }
    
    return answer;
}