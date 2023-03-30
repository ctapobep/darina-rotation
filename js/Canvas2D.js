class Canvas2D {
    constructor(parentElement, {width = 150, height = 150} = {}) {
        this.root = this.#createCanvas(parentElement, {width, height});
        this.size = {width, height};
        this.context = this.root.querySelector('.canvas-component_canvas-2d').getContext('2d');
    }

    /**
     * Arc direction is clockwise, starting from 3 o'clock. To draw a counter-clockwise arc, use negative values.
     * @param x - x coordinate of the center of the circle
     * @param y - y coordinate of the center of the circle
     * @param radius - radius of the circle
     * @param startAngle - start angle of the arc, in radians
     * @param endAngle - end angle of the arc, in radians
     * @param stroke - stroke color
     */
    drawArc(x, y, radius, startAngle, endAngle, stroke = 'black', counterclockwise = true) {
        this.context.beginPath();
        this.context.arc(x, y, radius, startAngle, endAngle, counterclockwise);
        this.context.strokeStyle = stroke;
        this.context.stroke();
    }

    /**
     * @param x - x coordinate of the center of the circle
     * @param y - y coordinate of the center of the circle
     * @param radius - radius of the circle
     * @param stroke - stroke color
     */
    drawCircle(x, y, radius, stroke = 'black') {
        this.drawArc(x, y, radius, 0, Math.PI * 2, stroke);
    }

    /**
     * x1, y1 - start point; x2, y2 - end point
     * @param x1
     * @param y1
     * @param x2
     * @param y2
     * @param stroke - line color
     */
    drawLine(x1, y1, x2, y2, stroke = 'black') {
        this.context.beginPath();
        this.context.moveTo(x1, y1);
        this.context.lineTo(x2, y2);
        this.context.strokeStyle = stroke;
        this.context.stroke();
    }

    /**
     * ax, ay - first point; bx, by - second point; cx, cy - third point
     * @param ax
     * @param ay
     * @param bx
     * @param by
     * @param cx
     * @param cy
     * @param stroke - triangle color
     */
    drawTriangle(ax, ay, bx, by, cx, cy, stroke = 'black') {
        this.context.beginPath();
        this.context.moveTo(ax, ay);
        this.context.lineTo(bx, by);
        this.context.lineTo(cx, cy);
        this.context.closePath();
        this.context.strokeStyle = stroke;
        this.context.stroke();
    }
    drawText(x,y,text, stroke = 'black'){
        this.context.textAlign = 'center'
        this.context.fillText(text, x, y);

    }

    clear(){
        this.context.clearRect(0, 0, this.size.width, this.size.height);
    }

    getCenter(){
        return {x: this.size.width / 2, y: this.size.height / 2}
    }

    #createCanvas(parentElement, {width, height}) {
        parentElement.insertAdjacentHTML('beforeend', this.#htmlTemplate({width, height}));
        return parentElement.lastElementChild;
    }

    #htmlTemplate({width, height}) {
        return `<div class="canvas-component">
                    <canvas class="canvas-component_canvas-2d" width="${width}" height="${height}"></canvas>
                </div>`;
    }
}