window.addEventListener('load',function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = 'green';
    ctx.strokeStyle = 'yellow';
    ctx.lineWidth = 30;
    ctx.lineCap = 'round';

    let size = 200;
    let sides = 5;
    let maxLevel = 3;
    let scale = 0.5;
    let spread = 0.8;
    let branches = 2;


    function drawBranch(level){
        if(level>maxLevel)return;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(size,0);
        ctx.stroke();
        for(let i = 0; i < branches; i++){
            ctx.save();
            ctx.translate(size - (size/branches)*i,0);
            ctx.rotate(spread);
            ctx.scale(scale,scale);
            drawBranch(level + 1);
            ctx.restore();

            ctx.save();
            ctx.translate(size - (size/branches)*i,0);
            ctx.rotate(-spread);
            ctx.scale(scale,scale);
            drawBranch(level + 1);
            ctx.restore();
        }
    }


    function drawFractal(){
        ctx.save();
        ctx.translate(canvas.width/2,canvas.height/2);
        ctx.scale(1,1);
        ctx.rotate(0);
        for(let i=0; i < sides; i++){
            ctx.rotate((Math.PI*2)/sides);
            drawBranch(0);
        }
        ctx.restore();
    }
    drawFractal();

});