function solution(n, arr1, arr2) {
    var answer = [];
    
    var str = '';
    
    for(var i=0; i<n; i++){
        arr1[i] = arr1[i].toString(2).split('').reverse().join('');
        arr2[i] = arr2[i].toString(2).split('').reverse().join('');
    }
    
    for(var i=0; i<n; i++){
        str = '';
        for(var j=0; j<n; j++){
            console.log(arr1[i][j], arr2[i][j]);
            if(arr1[i][j]==1 || arr2[i][j] == 1){
                str += '#';
            }else{
                str += ' ';
            }
        }
        str = str.split('').reverse().join('');
        answer.push(str);
    }
    
    return answer;
}