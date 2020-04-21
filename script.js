var myCanvas = document.getElementById('canvas')
var context = myCanvas.getContext('2d');
myCanvas.width = myCanvas.scrollWidth;
myCanvas.height = myCanvas.scrollHeight;

// ke 1 : Pistol tertutup

context.beginPath();
context.moveTo(50,40);
context.lineTo(400,40);
context.lineTo(450,90);
context.lineTo(410,110);
context.lineTo(430,280);
context.lineTo(340,280);
context.lineTo(325,160);
context.lineTo(240,170);
context.lineTo(235,120);
context.lineTo(50,120);
context.lineTo(50,90);
context.lineTo(30,90);
context.lineTo(30,50);
context.lineTo(50,50);
context.lineTo(50,38);
context.lineWidth = 5;
context.fillStyle = 'black'
context.fill();
context.strokeStyle = 'black';
context.stroke();

context.beginPath();
context.moveTo(345,160);
context.lineTo(400,115);
context.lineTo(420,270);
context.lineTo(360,270);
context.lineTo(345,160);
context.fillStyle = 'grey';
context.fill();

context.beginPath();
context.moveTo(337,280);
context.lineTo(432,280);
context.lineTo(434,300);
context.lineTo(339,300);
context.closePath();
context.fillStyle = 'black'
context.fill();
context.strokeStyle = 'black';
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.scale(1, 1);
context.arc(282, 157, 42, 3, Math.PI * 2, false);
context.closePath();
context.fillStyle = 'white'
context.fill();
context.strokeStyle = 'black';
context.stroke();



// ke 2 : Gerakan terbuka dan tertutup

context.beginPath();
context.moveTo(50,400);
context.lineTo(400,400);
context.lineTo(450,450);
context.lineTo(410,470);
context.lineTo(430,640);
context.lineTo(340,640);
context.lineTo(325,520);
context.lineTo(240,530);
context.lineTo(235,480);
context.lineTo(50,480);
context.lineTo(50,450);
context.lineTo(30,450);
context.lineTo(30,410);
context.lineTo(50,410);
context.lineTo(50,398);
context.lineWidth = 5;
context.fillStyle = 'black'
context.fill();
context.strokeStyle = 'black';
context.stroke();

context.beginPath();
context.moveTo(345,520);
context.lineTo(400,475);
context.lineTo(420,630);
context.lineTo(360,630);
context.lineTo(345,520);
context.fillStyle = 'grey';
context.fill();

// kotak ke 1 : banyangan tertutup
context.beginPath();
context.moveTo(337,640);
context.lineTo(432,640);
context.lineTo(434,660);
context.lineTo(339,660);
context.closePath();
// context.fillStyle = 'black'
// context.fill();
context.strokeStyle = 'black';
context.stroke();

//  kotak ke dua : pertengahan
context.beginPath();
context.moveTo(347,640);
context.lineTo(423,640);
context.lineTo(430,690);
context.lineTo(353,690);
context.closePath();
context.fillStyle = 'yellow';
context.fill();
context.strokeStyle = 'black';
context.stroke();

context.beginPath();
context.moveTo(344,690);
context.lineTo(438,690);
context.lineTo(440,710);
context.lineTo(346,710);
context.closePath();
context.fillStyle = 'black';
context.fill();
context.strokeStyle = 'black';
context.stroke();

// kotak ke 3 : terbuka
context.beginPath();
context.moveTo(347,640);
context.lineTo(423,640);
context.lineTo(438,760);
context.lineTo(360,760);
context.closePath();
context.strokeStyle = 'black';
context.stroke();

context.beginPath();
context.moveTo(352,760);
context.lineTo(447,760);
context.lineTo(450,780);
context.lineTo(354,780);
context.closePath();
context.strokeStyle = 'black';
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.scale(1, 1);
context.arc(282, 517, 42, 3, Math.PI * 2, false);
context.closePath();
context.fillStyle = 'white'
context.fill();
context.strokeStyle = 'black';
context.stroke();



// ke 3 : Pistol terbuka

context.beginPath();
context.moveTo(600,40);
context.lineTo(950,40);
context.lineTo(1000,90);
context.lineTo(960,110);
context.lineTo(980,280);
context.lineTo(890,280);
context.lineTo(875,160);
context.lineTo(790,170);
context.lineTo(785,120);
context.lineTo(600,120);
context.lineTo(600,90);
context.lineTo(580,90);
context.lineTo(580,50);
context.lineTo(600,50);
context.lineTo(600,38);
context.lineWidth = 5;
context.fillStyle = 'black'
context.fill();
context.strokeStyle = 'black';
context.stroke();

context.beginPath();
context.moveTo(895,160);
context.lineTo(950,115);
context.lineTo(970,270);
context.lineTo(910,270);
context.lineTo(895,160);
context.fillStyle = 'grey';
context.fill();

context.beginPath();
context.moveTo(897,280);
context.lineTo(973,280);
context.lineTo(988,400);
context.lineTo(910,400);
context.closePath();
context.fillStyle = 'yellow';
context.fill();
context.strokeStyle = 'black';
context.stroke();

context.beginPath();
context.moveTo(902,400);
context.lineTo(997,400);
context.lineTo(999,420);
context.lineTo(904,420);
context.closePath();
context.fillStyle = 'black';
context.fill();
context.strokeStyle = 'black';
context.stroke();

context.beginPath();
context.lineWidth = 4;
context.scale(1, 1);
context.arc(832, 157, 42, 3, Math.PI * 2, false);
context.closePath();
context.fillStyle = 'white'
context.fill();
context.strokeStyle = 'black';
context.stroke();

context.font = '20pt calibri';
context.fillStyle = 'black';
context.fillText('( Pistol tertutup )', 295, 340 );
context.fillText('( Gerakan terbuka dan tertutup )', 230, 820 );
context.fillText('( Pistol terbuka )', 860, 460 );



