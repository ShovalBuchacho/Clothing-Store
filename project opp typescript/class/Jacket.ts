abstract class Jacket extends Item {

    private _jacket_size: number;
    private _jacket_color: string;
    private _cloth_thickness: number;

    set jacket_size(size: number) {
        if ((size <= 0) || (size > 50)) {
            throw "size is either negative or 0 or above 50";
        }
        else {
            this._jacket_size = size;
        }

    }
    get jacket_size(): number {
        return this._jacket_size;
    }

    set jacket_color(color: string) {
        this._jacket_color = color;
    }
    get jacket_color(): string {
        return this._jacket_color;
    }

    set cloth_thickness(thick: number) {
        if ((thick <= 0) || (thick > 10)) {
            throw "thickness is either negative or 0 or above 10";
        }
        else {
            this._cloth_thickness = thick;
        }
    }
    get cloth_thickness(): number {
        return this._cloth_thickness;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Jacket size is:</strong> ${this.jacket_size} <br><strong> Jacket thickness is:</strong> ${this.cloth_thickness} <br>`);
        if (this.jacket_color == "White") {
            document.write(`The color of the jacket:${this.jacket_color}<br/>`);
        } else document.write(`<strong>The color of the jacket:</strong><font color=${this.jacket_color}>${this.jacket_color}</font><br/>`);

    }

    constructor(price: number, item_manufacturer: string, item_model: string, item_stuck: number, jacket_size: number = 30, jacket_color: string = "black", thickness: number = 5) {
        super(price, item_manufacturer, item_model, item_stuck);
        this.jacket_size = jacket_size;
        this.jacket_color = jacket_color;
        this.cloth_thickness = thickness;

    }
}
class Regular_Jacket extends Jacket {
    private _number_Of_Pockets: number;

    public set numberOfPockets(num: number) {
        if ((num < 0) || (num > 20)) {
            throw "num of pockets should be at least 0 and NOT above 20!"
        }
        else {
            this._number_Of_Pockets = num;
        }
    }

    public get numberOfPockets(): number {
        return this._number_Of_Pockets;

    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Jacket number of pockets is:</strong> ${this.numberOfPockets} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/jacket.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, stuck: number, size: number, color: string, thickness: number, numOfPockets = 2) {

        super(price, manufacturer, model, stuck, size, color, thickness);
        this.numberOfPockets = numOfPockets;

    }

}

class Coat extends Jacket {
    private _isRainCoat: boolean;

    public set isRainCoat(rain: boolean) {
        this._isRainCoat = rain;
    }
    public get isRainCoat(): boolean {
        return this._isRainCoat;

    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Coat is rain coat? </strong> ${this.isRainCoat}<br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/coat.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, stuck: number, size: number, color: string, thickness: number, isRain = true) {

        super(price, manufacturer, model, stuck, size, color, thickness);
        this.isRainCoat = isRain;

    }

}