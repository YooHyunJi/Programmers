function solution(common) {
    var answer = 0;
    
    var len = common.length;
    var gap_1 = common[1] - common[0];
    var gap_2 = common[2] - common[1];
    
    if(gap_1 == gap_2){
        answer = common[len-1] + gap_1;
    }else{
        gap_1 = common[1] / common[0];
        answer = common[len-1] * gap_1;
    }
    
    return answer;
}