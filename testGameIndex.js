$(function () {

  var gameBox = $('#gameBox');
  var player = $('#player');
  var gold = $('#win');
  var wallOne = $('#wallOne');
  var wallTwo = $('#wallTwo');
  
  var widthBox = parseInt(gameBox.width());
  var playerStart = parseInt(player.css('left', '5%'))
  var playerLeft = parseInt(player.css('left'));
  var playerTop = parseInt(player.css('top'));
  
  var game = setInterval(function () {
                         
                         if(collision(player, wallOne) || collision(player, wallTwo) || parseInt(player.css('top'))<=0 || parseInt(player.css('bottom'))<= 0 || parseInt(player.css('left'))<= 0 || parseInt(player.css('right'))<=0) {
                         parseInt(player.css('left', '50px'));
                         playerLeft = 50;
                         parseInt(player.css('top', '200px'));
                         playerTop = 200;
                         }
                        else {
                            if(collision(player, gold)) {
                                winGame();
                            }
                            else {
                         
                            }
                            }
    
                            }, 40);
  
  
  $(document).on('keydown', function(e) {
                 
                var key = e.keyCode;
                 if(key === 87) {
                 playerTop-=10;
                 parseInt(player.css('top', playerTop));
                 
                 }
                 else if(key === 68) {
                 playerLeft+=10;
                 parseInt(player.css('left', playerLeft));
                 }
                 else if(key === 65) {
                 playerLeft-=10;
                 parseInt(player.css('left', playerLeft));
                 }
                 else if(key === 83) {
                 playerTop+=10;
                 parseInt(player.css('top', playerTop));
                 }
                
                 });
  
  $('#winBox').click(function () {
                     location.reload();
                     });
  
  function winGame () {
    clearInterval(game);
  
    $('#winBox').fadeIn(1500);
    $('#player').fadeOut(1500);
  }
  
  function collision($div1, $div2) {
  
    var x1 = $div1.offset().left;
    var y1 = $div1.offset().top;
    var h1 = $div1.outerHeight(true);
    var w1 = $div1.outerWidth(true);
    var b1 = y1 + h1;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var y2 = $div2.offset().top;
    var h2 = $div2.outerHeight(true);
    var w2 = $div2.outerWidth(true);
    var b2 = y2 + h2;
    var r2 = x2 + w2;
  
    if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
        return true;
    }
  });
