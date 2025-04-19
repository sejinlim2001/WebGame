const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 10;
canvas.height = window.innerHeight - 10;

const dino = {
    x: 10,
    y: 200,
    width: 50,
    height: 50,
    draw: function() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    },
    executeforframe: function() {
        requestAnimationFrame(this.executeforframe.bind(this));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.x++;
        this.draw();
    }
}

const cactus = {
    init: function() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    },
    draw: function() {
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const dinos = Object.create(dino);
dinos.draw();
dinos.executeforframe();

const cactuses = Object.create(cactus);
cactuses.init();
cactuses.draw();




