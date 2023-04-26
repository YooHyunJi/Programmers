function solution(citations) {
    var answer = 0;
    
    var h = citations[0];
    var mentioned = 0;
    var not_mentioned = 0;
    
    while(h >= 0){
        mentioned = 0;
        citations.map(a => {
            if(a >= h) { mentioned++; }
        });
        not_mentioned = citations.length - mentioned;
        if(mentioned >= h && not_mentioned <= h){
            answer = h;
            break;
        }
        h--;
    }
    
    return answer;
}