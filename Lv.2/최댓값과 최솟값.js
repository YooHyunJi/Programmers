function solution(s) {
    var answer = '';
    
    s = s.split(' ').map(Number);
    
    var len = s.length;
    var min = s[0];
    var max = s[0];
    
    for(var i=1; i<len; i++){
        if(s[i] < min){ min = s[i]; }
        else if(s[i] > max){ max = s[i]; }
    }
    
    answer = '' + min + ' ' + max;
    
    return answer;
}