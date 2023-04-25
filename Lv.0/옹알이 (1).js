function solution(babbling) {
    var answer = 0;
    
    var len = babbling.length;
    var array = ["aya", "ye", "woo", "ma"];
    
    for(var i=0; i<len; i++){
        for(var j=0; j<4; j++){
            babbling[i] = babbling[i].replace(array[j], ' ');
        }
        babbling[i] = babbling[i].replace(/ /g, '');
        if(babbling[i] == '') answer++;
    }
    
    return answer;
}