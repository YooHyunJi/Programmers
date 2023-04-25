function solution(dartResult) {
    var answer = 0;
    
    const regex = /\d{1,2}[S, D, T][*, #]*/g;
    
    var len = 0;
    var score = 0;
    var bonus = '';
    var option = '';
    var arr_score = [];
    
    dartResult = dartResult.match(regex);
    len = dartResult.length;
    
    for(var i=0; i<len; i++){
        score = dartResult[i][0] * 1;
        bonus = dartResult[i][1];
        option = dartResult[i][2];
        if(bonus == '0'){
            score = 10;
            bonus = dartResult[i][2];
            option = dartResult[i][3];
        }
        
        switch(bonus){
            case 'S':
                bonus = 1;
                break;
            case 'D':
                bonus = 2;
                break;
            case 'T':
                bonus = 3;
                break;
        }
        score = score ** bonus;
        arr_score.push(score);
        
        if(option){
            if(option == '*'){ option = 2; } else{ option = -1; }
            arr_score[i] *= option;
            if(option == 2 && i > 0){
                arr_score[i-1] *= option;
            }
        }
    }
    
    answer = arr_score.reduce((a, b) => a+b);
    
    return answer;
}