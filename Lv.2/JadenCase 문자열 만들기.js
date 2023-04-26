function solution(s) {
    var answer = '';
    
    var len = s.length;
    var alphabet = '';
    var start = true;
    
    for(var i=0; i<len; i++){
        alphabet = s[i];
        if(alphabet == ' '){
            start = true;
        }else if(start == true){
            alphabet = alphabet.toUpperCase();
            start = false;
        }else{
            alphabet = alphabet.toLowerCase();
        }
        answer += alphabet;
    }
    
    return answer;
}