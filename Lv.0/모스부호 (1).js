function solution(letter) {
    var answer = '';
    
    var morse = { 
    '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
    '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
    '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
    '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
    '-.--':'y','--..':'z'
    };
    var letter_arr = letter.split(' ');
    
    for(var i=0; i< letter_arr.length; i++){
        answer += morse[letter_arr[i]];
    }
    
    return answer;
}