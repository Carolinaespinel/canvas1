window.onload = function()
{
	var canvas = document.getElementById("canvas");
	var context=canvas.getContext("2d");
   
   context.beginPath();
   context.moveTo(30, 30);//inicial x,y
   context.lineTo(300, 30);//final x,y
   context.lineWidth = 10;
   context.strokeStyle = randomColor();
   context.stroke();

   context.beginPath();
   context.moveTo(30, 30); //inicial x,y
   context.lineTo(30, 300); //final x,y
   context.lineWidth = 10;
   context.strokeStyle = randomColor();
   context.stroke();

   context.beginPath();
   context.moveTo(30, 300); //inicial x,y
   context.lineTo(300, 300); //final x,y
   context.lineWidth = 10;
   context.strokeStyle = randomColor();
   context.stroke();

   function randomColor()
   {
       // from http://www.paulirish.com/2009/random-hex-color-code-snippets/
       return '#'+(function lol(m,s,c){return s[m.floor(m.random() * s.length)] +
       (c && lol(m,s,c-1));})(Math,'0123456789ABCDEF',4);
   }
};