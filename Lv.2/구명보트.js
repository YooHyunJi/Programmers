function solution(people, limit) {
    var answer = 0;
    
    var boat = 0;
    
    people = people.sort(function(a, b){ return a-b; })
    
    while(people.length != 0){
        if(people.slice(-1)*2 <= limit){ break; }
        answer++;
        boat = people.pop();
        if(boat+people[0] <= limit){ people.shift(); }
    }
    answer += Math.ceil(people.length/2);
    
    return answer;
}