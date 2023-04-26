function solution(n,a,b)
{
    var answer = 0;
    
    var small = a<b? a: b;
    var big = a<b? b: a;
    
    for(var i=1; i<=Math.log2(n); i++){
        if(small+1 == big && big%2 == 0){
            answer = i;
            break;
        }else{
            small = Math.ceil(small/2);
            big = Math.ceil(big/2);
        }
    }

    return answer;
}