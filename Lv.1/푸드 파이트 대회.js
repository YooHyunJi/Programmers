function solution(food) {
    var answer = '';
    
    var placement = '';
    var len = food.length;
    
    for(var i=0; i<len; i++){
        placement += (''+i).repeat(Math.floor(food[i]/2));
    }
    answer = placement + '0' + placement.split('').reverse().join('');
    
    return answer;
}