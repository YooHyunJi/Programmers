function solution(arr1, arr2) {
    var answer = [];
    
    var len_1 = arr1.length;
    var len_2 = arr1[0].length;
    var sum = 0;
    
    var arr_tmp = [];
    
    for(var i=0; i<len_1; i++){
        arr_tmp = [];
        for(var j=0; j<len_2; j++){
            sum = arr1[i][j] + arr2[i][j];
            arr_tmp.push(sum);
        }
        answer.push(arr_tmp);
    }
    
        
    return answer;
}