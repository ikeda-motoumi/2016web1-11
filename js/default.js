var number = Math.floor(Math.random()*3);
var answer = parseInt(window.prompt('かずあてげいむ 0～2のすうじをいれてね！！！！！！！！！'));

var message;

test=0;

while(test=0){
if(answer === number){
  message = 'ﾁｯ'test=1;
}else if(answer < number){
  message = 'もっと...おおきいです...';
}else if(answer > number){
  message = '小者め';continue;
}else {
  message = '0~3をにゅうりょくしてくださいいいいいいいいいいいいいいいいいいいいいいいいい';
}
}
document.getElementById('choice').textContent = message;
