function solution(board, moves) {
    var answer = 0;
    
    var len_board = board.length;
    var len_moves = moves.length;
    var target_line = 0;
    var target_item = 0;
    var arr_bucket = [];
    var len_bucket = 0;
    
    for(var i=0; i<len_moves; i++){
        target_line = moves[i] - 1;
        target_item = 0;
        
        for(var j=0; j<len_board; j++){
            // console.log(board[j][target_line]);
            if(board[j][target_line] != 0){
//              item이 board -> bucket으로 이동
                target_item = board[j][target_line];
                board[j][target_line] = 0;
                
                // console.log('line ' + (target_line+1) + '\'s '+ target_item +
                //             ' is not 0');
                
//              bucket이 비었거나 bucket의 latest와 다르면 push
                if(len_bucket == 0 || arr_bucket[len_bucket-1] != target_item){
                    // console.log('emtpy or different');
                    arr_bucket.push(target_item);
                    len_bucket++;
                }
//              bucket의 latest와 같으면 pop
                else{
                    // console.log('same');
                    arr_bucket.pop();
                    len_bucket--;
                    answer++;
                }
                break;
            }
        }
    }
    
    answer *= 2; 
    
    return answer;
}