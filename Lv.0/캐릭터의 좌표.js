function solution(keyinput, board) {
    var answer = [0, 0];
    
    var len = keyinput.length;
    var x_limit = Math.floor(board[0] / 2);
    var y_limit = Math.floor(board[1] / 2);
    var key = 1;
    
    for(var i=0; i<len; i++){
        if(keyinput[i] == 'left' && answer[0]-1 >= -x_limit){
            answer[0]--;
        }
        else if(keyinput[i] == 'right' && answer[0]+1 <= x_limit){
            answer[0]++;
        }
        else if(keyinput[i] == 'down' && answer[1]-1 >= -y_limit){
            answer[1]--;
        }
        else if(keyinput[i] == 'up' && answer[1]+1 <= y_limit){
            answer[1]++;
        }
    }
    
    return answer;
}