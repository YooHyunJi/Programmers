function solution(keymap, targets) {
    var answer = [];
    
    var len_keymap = keymap.length;
    var arr_idx = new Array(len_keymap).fill(0);
    var len_target = targets.length;
    var total_touch = 0;
    var min = 0;
    
    for(var i=0; i<len_target; i++){
        total_touch = 0;
        
        for(var j=0; j<targets[i].length; j++){
            arr_idx = [];
            min = 0;
            
            for(var k=0; k<len_keymap; k++){
                if(keymap[k].indexOf(targets[i][j]) != -1){
                    arr_idx.push(keymap[k].indexOf(targets[i][j]) + 1);
                }
            }
            if(arr_idx.length == 0){
                total_touch = -1;
                break;
            }
            min = Math.min.apply(null, arr_idx);
            total_touch += min;
        }
        answer.push(total_touch);
    }
    
    return answer;
}