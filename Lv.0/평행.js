function solution(dots) {
    var answer = 0;
    
    var arr = [];
    
    for(var i=0; i<3; i++){
        for(var j=i+1; j<4; j++){
            arr.push((dots[i][1]-dots[j][1]) / (dots[i][0]-dots[j][0]));
        }
    }
    
    for(var i=0; i<5; i++){
        for(var j=i+1; j<6; j++){
            if(arr[i] == arr[j]){
                return 1;
            }
        }
    }
    
    return answer;
}
            
