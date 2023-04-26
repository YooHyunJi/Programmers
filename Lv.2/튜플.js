function solution(s) {
    var answer = [];
    
    var len = 0;
    var tmp = [];
    var idx = 0;
    
    s = s.slice(2, -2);
    s = s.split(/\D,\D/g);
    len = s.length;
    
    for(var i=0; i<len; i++){
        tmp = s[i].split(',').map(Number);
        s[i] = tmp;
    }
    
    if(len == 1){
        answer.push(s[0][0]);
    }else{
        s = s.sort(function(a, b){ return a.length - b.length});
        for(var i=0; i<len; i++){
            for(var j=i+1; j<len; j++){
                idx = s[j].indexOf(s[i][0]);
                s[j].splice(idx, 1);
            }
            answer.push(s[i].pop());
        }
    }
    
    return answer;
}