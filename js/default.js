var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('かずあてげいむ 0～2のすうじをいれてね！！！！！！！！！'));

var message;
if(answer === number){
  massage = '...ﾁｯ...';
}else if(answer < number){
  message = 'もっと...おおきいです...';
}else if(answer > number){
  message = '小者め';
}else {
  message = '0~3をにゅうりょくしてくださいいいいいいいいいいいいいいいいいいいいいいいいい';
}

document.getElementById('choice').textContent = message;
