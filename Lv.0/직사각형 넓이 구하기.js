function solution(dots) {
    var answer = 0;
    
    var x = [dots[0][0]];
    var y = [dots[0][1]];
    
    for(var i=1; i<=2; i++){
        if(dots[i][0] != x[0]  && x.length == 1){
            x.push(dots[i][0]);
        }
        if(dots[i][1] != y[0]  && y.length == 1){
            y.push(dots[i][1]);
        }
    }
    
    if(x[0] < x[1]){
        answer = x[1] - x[0];
    }else{
        answer = x[0] - x[1];
    }
    
    if(y[0] < y[1]){
        answer *= y[1] - y[0];
    }else{
        answer *= y[0] - y[1];
    }
    
    return answer;
}