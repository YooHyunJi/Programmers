function solution(quiz) {
    var answer = [];
    
    var len = quiz.length;
    var arr_tmp = [];
    var a = 0;
    var b = 0;
    var result = 0;
    var tmp_result = 0;
    var compute = ''
    var judge = '';
    
    for(var i=0; i<len; i++){
        arr_tmp = quiz[i].split(' ');
        // console.log(arr_tmp);
        a = arr_tmp[0] * 1;
        b = arr_tmp[2] * 1;
        compute = arr_tmp[1];
        result = arr_tmp[4];
        
        tmp_result = compute == '+'? a+b: a-b;
        judge = tmp_result == result? 'O': 'X';
        
        answer.push(judge);
    }
    
    return answer;
}