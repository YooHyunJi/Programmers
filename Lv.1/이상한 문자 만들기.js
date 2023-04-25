function solution(s) {
    var answer = '';
    
    var len = s.length;
    var alphabet = '';
    var code = 0;
    var start = 0;
    
    for(var i=0; i<len; i++){
        alphabet = ' ';
        if(s[i] != ' '){
            // alphabet = s[i];
            code = s[i].charCodeAt();
            // 짝수 -> 대문자 변환
            if(start%2 == 0){
                if(97 <= code && code <= 122){ code -= 32; }
            }
            // 홀수 -> 소문자 변환
            else{
                if(65 <= code && code <= 90){ code += 32; }
            }
            alphabet = String.fromCharCode(code);            
            start++;
        }else{
            start = 0;
        }
        answer += alphabet;
    }
    
    return answer;
}