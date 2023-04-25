function solution(s, skip, index) {
    var answer = '';
    
    var len_s = s.length;
    var len_skip = skip.length;
    var alphabet = '';
    var jump = 0;
    // console.log(String.fromCharCode('a'.charCodeAt() + 3));
    
    // console.log('a: ', 'a'.charCodeAt());
    // console.log('z: ', 'z'.charCodeAt());
    
    skip = skip.split('');
    for(var i=0; i<len_skip; i++){
        skip[i] = skip[i].charCodeAt();
    }
    // console.log(skip);
    
    for(var i=0; i<len_s; i++){
        alphabet = s[i].charCodeAt();
        for(var j=0; j<index; j++){
            alphabet++;
            alphabet = alphabet>122? alphabet-26: alphabet;
            if(skip.indexOf(alphabet) != -1){ j--; }
        }
        answer += String.fromCharCode(alphabet);
    }
    
    return answer;
}