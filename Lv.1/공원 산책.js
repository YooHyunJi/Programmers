function solution(park, routes) {
    var answer = [0, 0];
    
    for(var i=0; i<park.length; i++){
        if(park[i].indexOf('S') != -1){
            answer = [i, park[i].indexOf('S')];
            break;
        }
    }
    
    for(var i=0; i<routes.length; i++){
        var direction = routes[i].split(' ')[0];
        var power = routes[i].split(' ')[1] * 1;
        var success = true;
        
        switch(direction){
            case 'W': 
                if(answer[1] - power < 0){ success = false; }
                else{
                    for(var j=1; j<=power; j++){
                        if(park[answer[0]][answer[1]-j] == 'X'){ success = false; }
                    }
                }
                if(success == true){ answer[1] -= power; }
                break;
                
            case 'E': 
                if(answer[1] + power >= park[0].length){ success = false; }
                else{
                    for(var j=1; j<=power; j++){
                        if(park[answer[0]][answer[1]+j] == 'X'){ success = false; }
                    }
                }
                if(success == true){ answer[1] += power; }
                break;
                
            case 'S': 
                if(answer[0] + power >= park.length){ success = false; }
                else{
                    for(var j=1; j<=power; j++){
                        if(park[answer[0]+j][answer[1]] == 'X'){ success = false; }
                    }
                }
                if(success == true){ answer[0] += power; }
                break;
                
            case 'N': 
                if(answer[0] - power < 0){success = false; }
                else{
                    for(var j=1; j<=power; j++){
                        if(park[answer[0]-j][answer[1]] == 'X'){ success = false; }
                    }
                }
                if(success == true){ answer[0] -= power; }
                break;
        }
    }
    
    return answer;
}