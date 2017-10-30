var Bubble = function (x, y, color) {
            this.x = x;
            this.y = y;
            this.px = game.cellWidth * (this.x + 1) - game.cellWidth + 250;
            this.py = game.cellWidth * (this.y + 1) - game.cellWidth + 45;
            this.color = color;
            this.light = 10;
        };

        Bubble.prototype.draw = function () {
            if (!this.color) {
                return;
            }
            var ctx = game.ctx;
            ctx.beginPath();
            //console.log("x:" + px + "y:" + py);
            ctx.arc(this.px, this.py, 22, 0, Math.PI * 2);
            ctx.strokeStyle = this.color;
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.stroke();
        };