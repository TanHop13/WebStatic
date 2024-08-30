window.addEventListener("load", function() {
    const canvas = document.getElementById('mapCanvas1');
    const ctx = canvas.getContext('2d');

    // Set up default
    ctx.lineWidth = 2;
    ctx.font = ' 16px Arial';
    ctx.strokeStyle = '#333';
    ctx.fillStyle = '#333';

    // Draw Building
    function drawBox(x, y, width, height, text, color) {
        //Draw Box
        const radius = 10;
        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();
        ctx.stroke();
        
        // Add text in box
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillStyle = color;
        ctx.textBaseline = 'middle';
        const lines = text.split('\n');
        lines.forEach((line, index) => {
            ctx.fillText(line, x + width / 2, y + height / 2 + (index - lines.length / 2 + 0.5) * 20);
        });
        ctx.fillStyle = '#333';
    }

    function drawLaneRow(x, y, length) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + length, y);
        ctx.stroke();
    }

    function drawLaneColum(x, y, length) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x , y + length);
        ctx.stroke();
    }

    // Draw an arrow
    function drawArrow(x, y, direction) {
        ctx.beginPath();
        ctx.moveTo(x, y);
        if (direction === 'down') {
            ctx.lineTo(x - 10, y - 20);
            ctx.moveTo(x, y);
            ctx.lineTo(x + 10, y - 20);
        } else if (direction === 'up') {
            ctx.lineTo(x - 10, y + 20);
            ctx.moveTo(x, y);
            ctx.lineTo(x + 10, y + 20);
        } else { //right
            ctx.lineTo(x + 20, y - 10); 
            ctx.moveTo(x, y);
            ctx.lineTo(x + 20, y + 10);
        }
        ctx.stroke();
    }

    // Draw a street name
    function drawStreetName(text, x, y, angle = 0) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.font = 'bold 16px Arial';
        ctx.fillText(text, 0, 0);
        ctx.restore();
    }

    // Draw building for the upper row
    drawBox(110, 10, 170, 100, 'Company\nTrans Viet');
    drawBox(290, 10, 130, 100, 'Restaurant\nHoang Ty');
    drawBox(430, 10, 130, 100, 'Restaurant A Ma');
    drawBox(570, 10, 130, 100, 'LUXURY Spa');
    drawBox(830, 10, 130, 100, 'KOBE VIET');

    // Draw building for the lower row
    drawBox(110, 250, 140, 110, 'AURORA\n APARTMENT');
    drawBox(260, 250, 260, 110, 'BRANCH 1\n97 Vo Van Tan', 'red');
    drawBox(530, 250, 170, 110, 'RUBY STAR');
    drawBox(830, 250, 130, 110, 'GUTA CAFE')

    // Draw street names
    drawStreetName('Vo Van Tan Street', canvas.width / 2 - 70, 180);
    drawStreetName('Ba Huyen Thanh Quan Street', 50, 160, -Math.PI / 2);
    drawStreetName('Truong Dinh Street', 760, 160, Math.PI / 2);

    // Draw arrows
    drawArrow(50, 40, 'down');
    drawArrow(50, 320, 'down');

    drawArrow(760, 40, 'up');
    drawArrow(760, 260, 'up');

    drawArrow(canvas.width / 2 + 130, 180, 'left');
    drawArrow(canvas.width / 2 - 270, 180, 'left');
    drawArrow(canvas.width / 2 + 360, 180, 'left');

    //Draw lane row
    drawLaneRow(100, 120, 610);
    drawLaneRow(100, 240, 610);

    drawLaneRow(820, 120, 150);
    drawLaneRow(820, 240, 150);

    //Draw lane colum
    drawLaneColum(100, 0, 120);
    drawLaneColum(710, 0, 120);

    drawLaneColum(100, 240, 130);
    drawLaneColum(710, 240, 130);

    drawLaneColum(820, 0, 120);
    drawLaneColum(820, 240, 130);

    // BRANCH 2
    const canvas2 = document.getElementById('mapCanvas2');
    const ctx2 = canvas2.getContext('2d');

    ctx2.lineWidth = 2;
    ctx2.font = '16px Arial';
    ctx2.strokeStyle = '#333';
    ctx2.fillStyle = '#333';

    function drawBox2(x, y, width, height, text, color) {
        const radius = 10;
        ctx2.beginPath();
        ctx2.moveTo(x + radius, y);
        ctx2.lineTo(x + width - radius, y);
        ctx2.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx2.lineTo(x + width, y + height - radius);
        ctx2.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx2.lineTo(x + radius, y + height);
        ctx2.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx2.lineTo(x, y + radius);
        ctx2.quadraticCurveTo(x, y, x + radius, y);
        ctx2.closePath();
        ctx2.stroke();
        
        ctx2.font = 'bold 14px Arial';
        ctx2.textAlign = 'center';
        ctx2.fillStyle = color;
        ctx2.textBaseline = 'middle';
        const lines = text.split('\n');
        lines.forEach((line, index) => {
            ctx2.fillText(line, x + width / 2, y + height / 2 + (index - lines.length / 2 + 0.5) * 20);
        });
        ctx2.fillStyle = '#333';
    }

    function drawLaneRow2(x, y, length) {
        ctx2.beginPath();
        ctx2.moveTo(x, y);
        ctx2.lineTo(x + length, y);
        ctx2.stroke();
    }

    function drawLaneColum2(x, y, length) {
        ctx2.beginPath();
        ctx2.moveTo(x, y);
        ctx2.lineTo(x , y + length);
        ctx2.stroke();
    }

    function drawArrow2(x, y, direction) {
        ctx2.beginPath();
        ctx2.moveTo(x, y);
        if (direction === 'down') {
            ctx2.lineTo(x - 10, y - 20);
            ctx2.moveTo(x, y);
            ctx2.lineTo(x + 10, y - 20);
        } else if (direction === 'up') {
            ctx2.lineTo(x - 10, y + 20);
            ctx2.moveTo(x, y);
            ctx2.lineTo(x + 10, y + 20);
        } else if (direction === 'right'){
            ctx2.lineTo(x + 20, y - 10); 
            ctx2.moveTo(x, y);
            ctx2.lineTo(x + 20, y + 10);
        } else {
            ctx2.lineTo(x - 20, y - 10); 
            ctx2.moveTo(x, y);
            ctx2.lineTo(x - 20, y + 10);
        }
        ctx2.stroke();
    }

    function drawStreetName2(text, x, y, angle = 0) {
        ctx2.save();
        ctx2.translate(x, y);
        ctx2.rotate(angle);
        ctx2.font = 'bold 16px Arial';
        ctx2.fillText(text, 0, 0);
        ctx2.restore();
    }

    // Draw building for the left row
    drawBox2(20, 20, 140, 100, 'Hello Coffee\nCompany');
    drawBox2(20, 130, 140, 100, 'SKYTEL\nHomeStay');
    drawBox2(20, 310, 140, 200, 'BRANCH 2\n35-37\nHo Hao Hon', 'red');
    drawBox2(20, 520, 140, 90, 'WinMart+');
    drawBox2(20, 620, 140, 70, 'Viet Cam Travel');

    // Draw boxes for the upper row
    drawBox2(310, 90, 140, 100, 'HAPPY HOMES');
    drawBox2(460, 90, 160, 100, ' CO THOI\nCamera Store');
    drawBox2(310, 200, 140, 130, '3 LAO MAP\nRestaurant');
    drawBox2(310, 340, 140, 100, 'COFFEE & BOOK');
    drawBox2(460, 340, 160, 100, 'Linh Dan Pharmacy');
    drawBox2(460, 270, 160, 60, 'House');
    drawBox2(460, 200, 160, 60, 'House');
    drawBox2(720, 90, 240, 170, 'House');
    drawBox2(720, 270, 115, 170, 'CALIBEE');
    drawBox2(845, 270, 115, 170, 'Hung Minh Phu\nCompany');

    // Draw boxes for the lower row
    drawBox2(310, 570, 170, 120, 'Com Tam Huynh');
    drawBox2(490, 570, 210, 120, 'Beauty Salon');
    drawBox2(710, 570, 250, 120, 'Fruit Food Store');

    // Draw street names
    drawStreetName2('Co Giang Street', canvas2.width / 2 + 150, 510);
    drawStreetName2('Ho Hao Hon Street', 240, 360, -Math.PI / 2);
    drawStreetName2('Alley 42 Ho Hao Hon', canvas2.width / 2 + 150, 40);

    // Draw arrows
    drawArrow2(canvas.width / 2 + 380, 510, 'left');
    drawArrow2(canvas.width / 2 - 50, 510, 'left');
    drawArrow2(canvas.width / 2 + 330, 510, 'right');
    drawArrow2(canvas.width / 2 - 100, 510, 'right');

    drawArrow2(canvas.width / 2 + 380, 40, 'left');
    drawArrow2(canvas.width / 2 - 50, 40, 'left');
    drawArrow2(canvas.width / 2 + 330, 40, 'right');
    drawArrow2(canvas.width / 2 - 100, 40, 'right');

    drawArrow2(240, 120, 'up');
    drawArrow2(240, 170, 'down');
    drawArrow2(240, 540, 'up');
    drawArrow2(240, 590, 'down');

    //Draw lane row
    drawLaneRow2(0, 240, 170);
    drawLaneRow2(0, 300, 170);

    drawLaneRow2(300, 80, 670);
    drawLaneRow2(300, 450, 330);
    drawLaneRow2(630, 120, 80);
    drawLaneRow2(710, 450, 260);

    
    drawLaneRow2(300, 560, 670)
    //Draw lane colum
    drawLaneColum2(170, 0, 240);
    drawLaneColum2(170, 300, 400);

    drawLaneColum2(300, 80, 370);
    drawLaneColum2(630, 120, 330);
    drawLaneColum2(710, 120, 330);

    drawLaneColum2(300, 560, 140);
})