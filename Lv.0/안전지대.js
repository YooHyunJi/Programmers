function solution(board) {
    var answer = 0;
    
    var len = board.length;
    var tmp_board = JSON.parse(JSON.stringify(board)); // * Deep Copy
    
    for(var i=0; i<len; i++){
        for(var j=0; j<len; j++){
            if(board[i][j] == 1){
                if(i-1 >= 0){
                    if(j-1 >= 0) tmp_board[i-1][j-1] = 1;
                    tmp_board[i-1][j] = 1;
                    if(j+1 < len) tmp_board[i-1][j+1] = 1;
                }
                if(j-1 >= 0) tmp_board[i][j-1] = 1;
                if(j+1 < len) tmp_board[i][j+1] = 1;
                if(i+1 < len){
                    if(j-1 >= 0) tmp_board[i+1][j-1] = 1;
                    tmp_board[i+1][j] = 1;
                    if(j+1 < len) tmp_board[i+1][j+1] = 1;
                }
            }
        }
    }
    
    for(var i=0; i<len; i++){
        for(var j=0; j<len; j++){
            if(tmp_board[i][j] == 0) answer++;
        }
    }
    
    return answer;
}