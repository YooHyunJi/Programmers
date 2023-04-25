function solution(s) {
    var answer = 0;
    
    var len = s.length;
    var arr_num = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    var num
    
    if(s.replace(/\d/g, '') == ''){
        answer = s;
    }else{
        for(var i=0; i<len; i++){
            if(arr_num.indexOf(s[i]) != -1){
                num = s[i];
            }else{
                switch(s[i]){
                    case 'z':
                        num = '0';
                        i += 3;
                        break;
                    case 'o':
                        num = '1';
                        i += 2;
                        break;
                    case 't':
                        if(s[i+1] == 'w'){
                            num = '2';
                            i += 2;
                        }else{
                            num = '3';
                            i += 4;
                        }
                        break;
                    case 'f':
                        if(s[i+1] == 'o'){
                            num = '4';
                            i += 3;
                        }else{
                            num = '5';
                            i += 3;
                        }
                        break;
                    case 's':
                        if(s[i+1] == 'i'){
                            num = '6';
                            i += 2;
                        }else{
                            num = '7';
                            i += 4;
                        }
                        break;
                    case 'e':
                        num = '8';
                        i += 4;
                        break;
                    case 'n':
                        num = '9';
                        i += 3;
                        break;
                }
            }
                answer += num;
        }
    }
    answer *= 1;
    
    return answer;
}