function solution(balls, share) {
    var answer = 1;
    
    var up = 1;
    var down = 1;
    
    for(var i=0; i<share; i++){
        up *= (balls - i);
        down *= (share - i);
    }
    
    answer = up / down;
    
    return answer;
}