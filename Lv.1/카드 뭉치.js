function solution(cards1, cards2, goal) {
    var answer = 'Yes';
    
    var len = goal.length;
    var idx_1 = 0;
    var idx_2 = 0;
    
    for(var i=0; i<len; i++){
        if(cards1[idx_1] == goal[i]){ idx_1++; }
        else if(cards2[idx_2] == goal[i]){ idx_2++; }
        else{ answer = 'No'; }
    }
    
    return answer;
}