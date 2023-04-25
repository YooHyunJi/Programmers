function solution(sides) {
    var answer = 0;
    
    var tmp = 0;
    
    if(sides[0] > sides[1]){
        tmp = sides[0];
        sides[0] = sides[1];
        sides[1] = tmp;
    }
    
    for(var i=1; i< sides[1]; i++){
        if(sides[0] + i > sides[1]) answer ++;
    }
    for(var i=sides[1]; ; i++){
        if(sides[0] + sides[1] > i) answer ++;
        else break;
    }
    
    return answer;
}