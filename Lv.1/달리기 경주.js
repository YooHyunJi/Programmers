function solution(players, callings) {
    var answer = [];
    
    var len = callings.length;  
    var dic_idx = {}
    
    for(var i=0; i<players.length; i++){ dic_idx[players[i]] = i; }
    
    for(var i=0; i<len; i++){
        var idx_pre = dic_idx[callings[i]]-1;
        var idx_post = dic_idx[callings[i]];
        
        dic_idx[players[idx_pre]] = idx_post;
        dic_idx[players[idx_post]] = idx_pre;
        
        var tmp = players[idx_pre];
        players[idx_pre] = players[idx_post];
        players[idx_post] = tmp;
    }
    
    answer = players;
    
    return answer;
}