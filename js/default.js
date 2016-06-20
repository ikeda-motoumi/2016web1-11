var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('かずあてげいむ 0～2のすうじをいれてね！！！！！！！！！'));

var message;
if(answer === number){
  message = 'ﾁｯ　　　　　　　　＼そりゃよかったね♪そりゃよかったね♪／ \n　　　　ｌ一一一 /n　　　..│　　　│　　　　　　　ﾉｌ＿N /n　　　E=三三三ｺ　　　　　　ﾅ.　n　ｌ　　　　　　　ｎ /n　　__ノ◎◎　│　　　　　_ノ◎.◎│　　　　　　ノ‐一ζ　　　　　λ..λ \n　ﾉ　　　　　　│　　　.ﾉ~　　　　　.│　　　＿./◎◎＾l　　　　〝ﾚﾚｖ.vl \n　.入　　　　　　│　　　入　　　　..　│　γ　　　　　　│　　　ｒ-◎◎.│ \n　　`ゝ一く＾　　ｌ．　　　＾ゝ一く＾　　ヽ　入　　　　　..│　.（　　　　　　ｌ \n..._ノ/　　　　　　＾~゜§＾ﾉ　　　　　　　＼＿ゝーイ　　Ｌ＿入.　　ッｲ　ヽ＿ \nζﾚ　　　　　　　Ｔ＾~　７//tt-----シ-ζﾚ　　　　　、＿ζﾉ　　　　　＿_ζ \n　.│　　　　　　　〉　　////l│││./p　（　　　　　　│　.│　　　　　│ \n　　＼　　　　　./　　///./│l.l.l..l..l　ﾉ　　入　　　　　/　　入　　　　　../ \n　　　〈　　　シゝ゛=ー　＾-^----^く　＾＾へ-〈　　/-^ト--l...ッＹ　　....xイ=-ゝ \n　　　と＿/>..ノゝ　　　　..と__/>　／　　　　と__/..-イ　　　　と___.ゝ-イ　\n';
}else if(answer < number){
  message = 'もっと...おおきいです...';
}else if(answer > number){
  message = '小者め';
}else {
  message = '0~3をにゅうりょくしてくださいいいいいいいいいいいいいいいいいいいいいいいいい';
}

document.getElementById('choice').textContent = message;
