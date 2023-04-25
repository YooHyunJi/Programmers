function solution(lottos, win_nums) {
    var answer = [];
    
    var len = lottos.length;
    var idx = 0;
    var best = 0;
    var worst = 0;
    var unknown = 0;
    
    for(var i=0; i<len; i++){
        if(lottos[i] == 0){ 
            unknown++; 
            continue;
        }
        idx = win_nums.indexOf(lottos[i]);
        if(idx != -1){
            lottos.splice(i, 1);
            win_nums.splice(idx, 1);
            i--;
        }
    }
    
    best = lottos.length - unknown + 1;
    worst = lottos.length + 1;
    
    best = best>6? 6: best;
    worst = worst>6? 6: worst;
    
    answer = [best, worst];
    
    return answer;
}