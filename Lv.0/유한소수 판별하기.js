function solution(a, b) {
    var answer = 0;
    
    var small = 0;
    var cnt = 0;
    var biggest = 0;
    var div_arr = [];
    var len = 0;
    
    if(a % b == 0) return 1;
    
    if(a < b){ small = a; } else{ small = b; }
    
    // 기약분수 만들기
    for(var i=2; i<=small; i++){
        if(a%i == 0 && b%i == 0){
            while(a%i == 0 && b%i == 0){
                a = a/i;
                b = b/i;
            }
        }
    }
    // answer = [a, b];

    if(b==1 || b==2){
        div_arr.push(b);
        answer = 1;
    }else{
        for(var i=2; i<=b; i++){
            cnt = 0;
            // i가 b의 인수인 경우
            if(b%i == 0){
                // 2, 3은 판별 필요 없음
                if(i==2 || i==3){ div_arr.push(i); }
                // 이외의 경우 소수인지 판별
                else{
                    // cnt 0 소수, 1 합성수 
                    for(var j=2; j<=Math.sqrt(i); j++){
                        if(i%j == 0){
                            cnt++;
                            break;
                        }
                    }
                    // 소수일 경우 
                    if(cnt==0){
                        div_arr.push(i);
                    }
                }
            }
        }
    }
    
    // answer = div_arr;
    
    len = div_arr.length;
    answer = 2;
    switch(len){
        case 0:
            break;
        case 1:
            if(div_arr[0]==2 || div_arr[0]==5){
                answer = 1;
            }
            break;
        case 2:
            if(div_arr[0] + div_arr[1] == 7){
                answer = 1;
            }
            break; 
        default:
            break;
    }
    
    return answer;
}