function solution(clothes) {
    var answer = 1;
    
    var len_1 = clothes.length;
    var len_2 = 0;
    var clothes_type = [];
    var tmp = [];
    var idx = 0;
    
    for(var i=0; i<len_1; i++){
        idx = clothes_type.indexOf(clothes[i][1]);
        if(idx == -1){
            clothes_type.push(clothes[i][1]);
            clothes_type.push(1);
        }else{
            clothes_type[idx+1]++;
        }
    }
    console.log(clothes_type);
    len_1 = clothes_type.length/2;
    
    for(var i=0; i<len_1; i++){
        answer *= (clothes_type[2*i+1] + 1);
    }
    answer--;
    
    return answer;
}
