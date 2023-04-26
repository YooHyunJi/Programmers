function solution(m, n, board) {
    var answer = 0;
    
    var board_copied;
    var flag;
    var round = 0;
    var tmp_square = '';
    var tmp_column = '';
    var first = '';
    var progress = 0;
    
    // 문자열 -> 배열 변환
    for(var i=0; i<m; i++){
        board[i] = board[i].split('');
    }
    
    // 더이상 지워질 블록이 없을 때까지 반복
    do{
        board_copied = JSON.parse(JSON.stringify(board));
        flag = false;
        
        for(var i=0; i<m-1; i++){
            for(var j=0; j<n-1; j++){
                tmp_square = board[i][j] + board[i][j+1] + board[i+1][j] + board[i+1][j+1];
                
                //공백 포함 시 생략
                if(/[A-Z]{4}/.test(tmp_square) == false){ continue; };
                
                var regex = new RegExp(`${tmp_square[0]}{4}`);
                if(regex.test(tmp_square)){
                    board_copied[i][j] = '*'; board_copied[i][j+1] = '*';
                    board_copied[i+1][j] = '*'; board_copied[i+1][j+1] = '*';
                    
                    flag = true;
                }
            }
        }
        
        board = Array.from(Array(m), () => new Array(n).fill('*'));
        for(var i=0; i<n; i++){
            tmp_column = '';
            progress = 1;

            for(var j=m-1; j>=0; j--){
                if(board_copied[j][i] != '*'){ 
                    board[m-progress][i] = board_copied[j][i]; 
                    progress++;
                }
            }
        }
    }while(flag == true);
    
    for(var i=0; i<m; i++){
        for(var j=0; j<n; j++){
            if(board[i][j] == '*'){ answer++; }
        }
    }
    
    return answer;
}