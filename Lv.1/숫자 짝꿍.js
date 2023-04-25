function solution(X, Y) {
    var answer = '';
    
    var num = 0;
    var regex = new RegExp();
    var arr_X = [];
    var arr_Y = [];
    var cnt = 0;
    
    
    for(var i=9; i>=0; i--){
        num = i;
        regex = RegExp(`${num}`, 'g');
    
        arr_X = X.match(regex);
        arr_Y = Y.match(regex);
        
        if(arr_X != null && arr_Y != null){
            cnt = arr_X.length < arr_Y.length? arr_X.length: arr_Y.length;
            answer += (''+num).repeat(cnt);
        }
    }
    
    if(answer == ''){
         answer = '-1';
    }
    else if(0+answer == 0){
        answer = '0';
    }

    
    return answer;
}