function solution(dirs) {
    var answer = 0;
    
    var len = dirs.length;
    var position_now = [0, 0];
    var position_path = [0, 0];
    var string_path = '';
    var arr_history = [];
    var idx = 0;
    var direction = 1;
    
    for(var i=0; i<len; i++){
        switch(dirs[i]){
            case 'U':
                idx = 1;
                direction = 1;
                break;
            case 'D':
                idx = 1;
                direction = -1;                
                break;
            case 'L':
                idx = 0;
                direction = -1;                
                break;
            case 'R':
                idx = 0;
                direction = 1;                
                break;
        }
        if(position_now[idx] + direction >= -5 && position_now[idx] + direction <= 5){
            position_now[idx] += direction;
            position_path[idx] += direction*0.5;
            string_path = position_path[0]+' '+position_path[1];
            if(arr_history.indexOf(string_path) == -1){
                arr_history.push(string_path);
            }
            position_path[idx] += direction*0.5;
        }
    }
    answer = arr_history.length;
    
    return answer;
}