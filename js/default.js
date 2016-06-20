var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('かずあてげいむ 0～2のすうじをいれてね！！！！！！！！！'));

var message;
if(answer === number){
  message = '...ﾁｯ...
                     ＼よかったね♪そりゃよかったね♪／
　　　　ｌ一一一 
　　　..│　　　│　　　　　　　ﾉｌ＿N 
　　　E=三三三ｺ　　　　　　ﾅ.　n　ｌ　　　　　　　ｎ 
　　__ノ◎◎　│　　　　　_ノ◎.◎│　　　　　　ノ‐一ζ　　　　　λ..λ 
　ﾉ　　　　　　│　　　.ﾉ~　　　　　.│　　　＿./◎◎＾l　　　　〝ﾚﾚｖ.vl 
.入　　　　　　│　　　入　　　　..　│　γ　　　　　　│　　　ｒ-◎◎.│ 
　　`ゝ一く＾　　ｌ．　　　＾ゝ一く＾　　ヽ　入　　　　　..│　.（　　　　　　ｌ 
..._ノ/　　　　　　＾~゜§＾ﾉ　　　　　　　＼＿ゝーイ　　Ｌ＿入.　　ッｲ　ヽ＿ 
ζﾚ　　　　　　　Ｔ＾~　７//tt-----シ-ζﾚ　　　　　、＿ζﾉ　　　　　＿_ζ 
　.│　　　　　　　〉　　////l│││./p　（　　　　　　│　.│　　　　　│ 
　　＼　　　　　./　　///./│l.l.l..l..l　ﾉ　　入　　　　　/　　入　　　　　../ 
　　　〈　　　シゝ゛=ー　＾-^----^く　＾＾へ-〈　　/-^ト--l...ッＹ　　....xイ=-ゝ 
　　　と＿/>..ノゝ　　　　..と__/>　／　　　　と__/..-イ　　　　と___.ゝ-イ　
';
}else if(answer < number){
  message = 'もっと...おおきいです...';
}else if(answer > number){
  message = '小者め';
}else {
  message = '0~3をにゅうりょくしてくださいいいいいいいいいいいいいいいいいいいいいいいいい';
}

document.getElementById('choice').textContent = message;
