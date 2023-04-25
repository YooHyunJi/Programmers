function solution(s){
    var answer = true;

    var arr_left = [];
    var len = s.length;
    var top = 0;
    
    for(var i=0; i<len; i++){
        if(s[i] == '('){
            // console.log('left');
            arr_left.push(s[i]);
            top++;
        }else{
            // console.log('right');
            if(top != 0){
                arr_left.pop();
                top--;
            }else{
                answer = false;
                break;
            }
        }
    }
    if(top != 0){ answer = false; }

    return answer;
}