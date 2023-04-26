function solution(arr) {
    var answer = arr[0];
    
    var len = arr.length;
    var x;
    var y;
    var r;
    
    for(var i=1; i<len; i++){
        x = answer;
        y = arr[i];
        r = x % y;
        while(r != 0){
            x = y;
            y = r;
            r = x % y;
        }
        answer = y * (answer/y) * (arr[i]/y);
    }
    
    return answer;
}