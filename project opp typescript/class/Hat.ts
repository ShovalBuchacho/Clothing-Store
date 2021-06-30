abstract class Hat extends Item {

    private _hat_size: number;
    private _hat_color: string;
    private _hat_diameter: number;

    set hat_size(size: number) {
        if ((size <= 0) || (size > 60)) {
            throw "size is either negative or 0 or above 60";
        }
        else {
            this._hat_size = size;
        }
    }
    get hat_size(): number {
        return this._hat_size;
    }

    set hat_color(color: string) {
        this._hat_color = color;
    }
    get hat_color(): string {
        return this._hat_color;
    }

    set hat_diameter(diameter: number) {
        if ((diameter <= 0) || (diameter > 15)) {
            throw "size is either negative or 0 or above 15";
        }
        else {
            this._hat_diameter = diameter;
        }
    }
    get hat_diameter(): number {
        return this._hat_diameter;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Hat size is:</strong> ${this.hat_size} <br> <strong>Hat diameter is:</strong> ${this.hat_diameter} <br>`);
        if (this.hat_color == "White") {
            document.write(`The color of the hat:${this.hat_color}<br/>`);
        } else document.write(`<strong>The color of the hat:</strong><font color=${this.hat_color}>${this.hat_color}</font><br/>`);
    }

    constructor(price: number, item_manufacturer: string, item_model: string, item_stuck: number, hatSize: number = 30, hat_color: string = "Red", diameter: number = 5) {
        super(price, item_manufacturer, item_model, item_stuck);
        this.hat_size = hatSize;
        this.hat_color = hat_color;
        this.hat_diameter = diameter;

    }
}
class Kasket extends Hat {
    private _isCommercialPrint: boolean;

    public set isCommercialPrint(is: boolean) {
        this._isCommercialPrint = is;
    }
    public get isCommercialPrint(): boolean {
        return this._isCommercialPrint;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Hat contains commercial print?</strong> ${this.isCommercialPrint} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/kasket.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, stuck: number, size: number, color: string, diameter: number = 6, print) {

        super(price, manufacturer, model, stuck, size, color, diameter);
        this.isCommercialPrint = print;

    }
}
class Brimmed_Hat extends Hat {
    private _HatHeight: number;

    public set HatHeight(height: number) {
        if ((height <= 0) || (height > 20)) {
            throw "height is either negative or 0 or above 20";
        }
        else {
            this._HatHeight = height;
        }
    }
    public get HatHeight(): number {
        return this._HatHeight;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>hat height is:</strong> ${this.HatHeight} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/brimmed.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(price: number, manufacturer: string, model: string, stuck: number, size: number, color: string, diameter: number = 6, height: number = 10) {

        super(price, manufacturer, model, stuck, size, color, diameter);
        this.HatHeight = height;

    }
}