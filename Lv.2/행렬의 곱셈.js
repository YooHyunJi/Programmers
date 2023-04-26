function solution(arr1, arr2) {
    var answer = [];
    
    var len_1 = arr1.length;
    var len_mid = arr1[0].length;
    var len_2 = arr2[0].length;
    var sum = 0;
    var tmp_arr = [];
    
    for(var i=0; i<len_1; i++){
        tmp_arr = [];
        for(var j=0; j<len_2; j++){
            sum = 0;
            for(var k=0; k<len_mid; k++){
                sum += arr1[i][k] * arr2[k][j];
            }
            tmp_arr.push(sum);
        }
        answer.push(tmp_arr);
    }
    
    return answer;
}