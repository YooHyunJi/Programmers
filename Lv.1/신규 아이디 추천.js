function solution(new_id) {
    var answer = '';
    
//  1단계
    new_id = new_id.toLowerCase();
    console.log('STEP 1 |', new_id);
    
//  2단계
    new_id = new_id.replace(/[^a-z0-9\-\_\.]/g, '');
    console.log('STEP 2 |', new_id);
    
//  3단계
    new_id = new_id.replace(/\.+/g, '.');
    console.log('STEP 3 |', new_id);
    
//  4단계
    new_id = new_id.replace(/^\.|\.$/g, '');
    console.log('STEP 4 |', new_id);
    
//  5단계
    if(new_id == ''){ new_id = 'a'; }
    console.log('STEP 5 |', new_id);
    
//  6단계
    new_id = new_id[14] == '.'? new_id.slice(0, 14): new_id.slice(0, 15);
    console.log('STEP 6 |', new_id);
    
//  7단계
    while(new_id.length < 3){
        new_id += new_id.slice(-1);
    }
    console.log('STEP 7 |', new_id);
    
    answer = new_id;
    
    return answer;
}