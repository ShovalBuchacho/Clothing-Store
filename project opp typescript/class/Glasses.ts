abstract class Glasses extends Item {
    private _frame_color: string;

    set frame_color(color: string) {
        this._frame_color = color;
    }
    get frame_color(): string {
        return this._frame_color;
    }

    constructor(price: number, manuf: string, model: string, stuck: number, frameColor: string) {
        super(price, manuf, model, stuck);
        this.frame_color = frameColor;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        if (this.frame_color == "White") {
            document.write(`Color:${this.frame_color}<br/>`);
        } else document.write(`<strong>The frame color of the glasses:</strong> <font color=${this.frame_color}>${this.frame_color}</font><br/>`);
    }
}
class Sun_Glasses extends Glasses {
    private _glass_color: string;

    set glass_color(color: string) {
        this._glass_color = color;
    }
    get glass_color(): string {
        return this._glass_color;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        if (this.glass_color == "White") {
            document.write(`Color:${this.glass_color}<br/>`);
        } else document.write(`<strong>The glass color of the glasses:</strong><font color=${this.glass_color}>${this.glass_color}</font><br/>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/sunglasses.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, stuck: number, frameColor: string, glassColor: string) {
        super(price, manufacturer, model, stuck, frameColor);
        this.glass_color = glassColor;

    }

}

class Reading_glasses extends Glasses {
    private _rec_distance: number;

    set rec_distance(rec: number) {
        if ((rec <= 0) || (rec > 50)) {
            throw "distance is above 50 or negative!";
        }
        else {
            this._rec_distance = rec;
        }
    }
    get rec_distance(): number {
        return this._rec_distance;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Sungalsses reading distance is:</strong> ${this.rec_distance} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/readingglasses.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, stuck: number, readds: number, frameColor: string) {
        super(price, manufacturer, model, stuck, frameColor);
        this.rec_distance = readds;

    }

}
