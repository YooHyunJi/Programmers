function solution(s) {
    var answer = '';
    
    var pre_answer = '';
    var alphabet = '';
    var dictionary = '';

    while(s != ''){
        alphabet = s[0];
        if(dictionary.indexOf(alphabet) == -1){
            dictionary += alphabet;
            pre_answer += alphabet;
        }else{
            pre_answer = pre_answer.replace(alphabet, '');
        }
        s = s.substr(1);
    }
    
    for(var i=97; i<=122; i++){
        if(pre_answer.indexOf(String.fromCharCode(i)) != -1){
            answer += String.fromCharCode(i);
        }
    }
    
    return answer;
}