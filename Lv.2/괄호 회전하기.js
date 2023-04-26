function solution(s) {
    var answer = 0;
    
    var len = s.length;
    var tmp_s = '';
    var stack = [];
    var top = -1;
    var idx = 0;
    var first_right = false;
    var arr_left = ['(', '{', '['];
    var arr_right = [')', '}', ']'];
    
    for(var i=0; i<len; i++){
        tmp_s = s.slice(i, len) + s.slice(0, i);
        stack = [];
        top = -1;
        first_right = false;
        
        for(var j=0; j<len; j++){
            if(arr_left.indexOf(tmp_s[j]) != -1){
                stack.push(tmp_s[j]);
                top++;
            }else{
                if(top == -1){ first_right = true; }
                idx = arr_right.indexOf(tmp_s[j]);
                if(arr_left[idx] == stack[top]){
                    stack.pop();
                    top--;
                }else{ break; }
            }
        }
        if(stack == '' && first_right == false){ answer++; }
    }
    
    return answer;
}