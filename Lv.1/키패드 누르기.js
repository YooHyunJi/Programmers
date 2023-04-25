function solution(numbers, hand) {
    var answer = '';
    
    var len = numbers.length;
    var left_nums = [1, 4, 7, 10];
    var right_nums = [3, 6, 9, 12];
    var left_position = 10;
    var right_position = 12;
    var left_moving = 0;
    var right_moving = 0;
    var result = '';
    
    for(var i=0; i<len; i++){
        if(numbers[i] == 0){ numbers[i] = 11; }
        
//     현재 위치와 동일한 번호를 누르는 경우   
        if(left_position == numbers[i]){
            result = 'L';
            left_position = numbers[i];
        }
        else if(right_position == numbers[i]){
            result = 'R';
            right_position = numbers[i];
        }
        
//      1, 4, 7 -> 왼손
        else if(left_nums.indexOf(numbers[i]) != -1){
            // console.log('Left Number', numbers[i]);
            result = 'L';
            left_position = numbers[i];
        }

//      3, 6, 9 -> 오른손
        else if(right_nums.indexOf(numbers[i]) != -1){
            // console.log('Right Number', numbers[i]);
            result = 'R';
            right_position = numbers[i];
        }

//      2, 5, 8, 0 -> 가까운 손 계산
        else{
            // console.log('Middle Number', numbers[i]);
            if(left_nums.indexOf(left_position) != -1){
                left_moving = left_position + 1;
            }else{
                if(left_position < numbers[i]){ 
                    left_moving = left_position + 3; 
                }else{ 
                    left_moving = left_position - 3; 
                }
            }
            if(right_nums.indexOf(right_position) != -1){
                right_moving = right_position - 1;
            }else{
                if(right_position < numbers[i]){ 
                    right_moving = right_position + 3; 
                }else{ 
                    right_moving = right_position - 3; 
                }
            }
            console.log(left_moving, right_moving);
            
//          numbers[i]에 도달할 때까지 반복
            while(1){ 
                if(left_moving == numbers[i]){
//                  1_양 손 모두 거리 동일
                    if(right_moving == numbers[i]){
                        if(hand == 'left'){
                            result = 'L'; 
                            left_position = numbers[i];
                        }else{
                            result = 'R';
                            right_position = numbers[i];
                        }
                        break;
                    }
//                  2_왼손 먼저 도달
                    else{
                        result = 'L';
                        left_position = numbers[i];
                        break;
                    }
                }
//              3_오른손 먼저 도달
                else if(right_moving == numbers[i]){
                    result = 'R';
                    right_position = numbers[i];
                    break;
                }
//              4_도달하지 못함
                else{
                    if(right_moving < numbers[i]){ right_moving += 3; }
                    else{ right_moving -= 3; }
                    if(left_moving < numbers[i]){ left_moving += 3; }
                    else{ left_moving -= 3; }
                    // console.log(left_moving, right_moving);
                }
            }
        }
        answer += result;
    }
    
    return answer;
}