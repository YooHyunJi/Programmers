function solution(numbers) {
    var answer = 0;
    
    var alphabet = '';
    var digit = 0;
    var position = 0;
    
    while(numbers != ''){
        alphabet = numbers[0];
        answer *= 10;
        
        switch(alphabet){
            case 'z':
                digit = 0;
                position = 4;
                break;
            case 'o':
                digit = 1;
                position = 3;
                break;
            case 't':
                if(numbers[1] == 'w'){
                    digit = 2;
                    position = 3;
                }else{
                    digit = 3;
                    position = 5;
                }
                break;
            case 'f':
                if(numbers[1] == 'o'){
                    digit = 4;
                    position = 4;
                }else{
                    digit = 5;
                    position = 4;
                }
                break;
            case 's':
                if(numbers[1] == 'i'){
                    digit = 6;
                    position = 3;
                }else{
                    digit = 7;
                    position = 5;
                }
                break;
            case 'e':
                digit = 8;
                position = 5;
                break;
            case 'n':
                digit = 9;
                position = 4;
                break;
        }
        answer += digit;
        numbers = numbers.substr(position);
    }
    
    return answer;
}