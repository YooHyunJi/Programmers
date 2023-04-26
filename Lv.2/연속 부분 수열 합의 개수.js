function solution(elements) {
    var answer = 0;
    
    var len = elements.length;
    var arr_sum = [];
    var sum = 0;
    var tmp_elements = [];
    
    elements = elements.concat(elements);
    
    for(var i=1; i<=len; i++){
        for(var j=0; j<len; j++){
            tmp_elements = elements.slice(j, j+i);
            sum = tmp_elements.reduce((a, b) => a+b);
            arr_sum.push(sum);
        }
    }
    
    answer = [...new Set(arr_sum)].length;
    
    return answer;
}
