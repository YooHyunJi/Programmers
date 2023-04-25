function solution(phone_number) {
    var answer = '';
    
    var len = phone_number.length;
    var star = '*'.repeat(len-4);
    var last = phone_number.slice(-4,);
    
    answer = star.concat(last);
    
    return answer;
}