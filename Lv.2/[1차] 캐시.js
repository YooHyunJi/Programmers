function solution(cacheSize, cities) {
    var answer = 0;
    
    var len = cities.length;
    var cache_idx = 0;
    var arr_cache = [];
    var idx = 0;
    
    if(cacheSize == 0){
        answer = 5 * len;
    }else{
        for(var i=0; i<len; i++){
            idx = arr_cache.indexOf(cities[i].toLowerCase());
            // cache hit
            if(idx != -1){
                answer += 1;
                // LRU rank update
                arr_cache.splice(idx, 1);
                arr_cache.push(cities[i].toLowerCase());
            }
            // cache miss
            else{
                answer += 5;
                // cache space O
                if(arr_cache.length < cacheSize){
                    arr_cache.push(cities[i].toLowerCase());
                }
                // cache space X
                else{
                    arr_cache.shift();
                    arr_cache.push(cities[i].toLowerCase());
                }
            }
        }
    }
    
    return answer;
}