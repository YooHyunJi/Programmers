function solution(a, b) {
    var answer = '';
    var code = 0;
    var month_30 = [4, 6, 9, 11];
    var month_31 = [1, 3, 5, 7, 8, 10, 12];
    
    for(var i=1; i<=a-1; i++){
        if(i == 2){ code += 29; }
        else if(month_30.indexOf(i) != -1){ code += 30; }
        else{ code += 31;}
    }
    code += b;
    code = code % 7;
    // console.log(code);
    
    switch(code){
        case 0:
            answer = "THU";
            break;
        case 1:
            answer = "FRI";
            break;
        case 2:
            answer = "SAT";
            break;
        case 3:
            answer = "SUN";
            break;
        case 4:
            answer = "MON";
            break;
        case 5:
            answer = "TUE";
            break;
        case 6:
            answer = "WED";
            break;
    }
    
    return answer;
}