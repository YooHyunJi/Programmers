function solution(arr) {
    var answer = [];
    
    var len = arr.length;
    var smallest = 0;
    var idx = 0;
    var arr_1 = [];
    var arr_2 = [];
    
    if(len == 1){
        answer.push(-1);
    }else{
        smallest = Math.min.apply(null, arr);
        idx = arr.indexOf(smallest);
        arr_1 = arr.slice(0, idx);
        arr_2 = arr.slice(idx+1, len);
        answer = arr_1.concat(arr_2);
    }
    
    return answer;
}