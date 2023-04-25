function solution(a, b, n) {
    var answer = 0;
    
    var giveCola = 0;
    var takeCola = 0;
    
    while(n>=a){
        giveCola = n - (n%a);
        takeCola = (giveCola/a)*b;
        n = n - giveCola + takeCola;
        
        answer += takeCola;
    }
    
    return answer;
}