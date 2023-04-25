function solution(s, n) {
    var answer = '';
    
    var len = s.length;
    var code = 0;
    var alphabet = '';
    
    for(var i=0; i<len; i++){
        alphabet = ' ';
        if(s[i] != ' '){
            code = s[i].charCodeAt();
            // 대문자
            if(65 <= code && code <= 90){
                code += n;
                if(code > 90){
                    code -= 26;
                }
            }else{
                code += n;
                if(code > 122){
                    code -= 26;
                }
            }
            alphabet = String.fromCharCode(code);
        }
        answer += alphabet;
    }
    
    return answer;
}