abstract class Pants extends Item {
    private _pants_length: number;
    private _pants_size: number;
    private _pants_color: string;

    set pants_length(length: number) {
        if ((length <= 0) || (length > 3)) {
            throw "length is either negative or 0 or above 3";
        }
        else {
            this._pants_length = length;
        }
    }
    get pants_length(): number {
        return this._pants_length;
    }

    set pants_size(size: number) {
        if ((size <= 0) || (size > 100)) {
            throw "size is either negative or 0 or above 100";
        }
        else {
            this._pants_size = size;
        }

    }
    get pants_size(): number {
        return this._pants_size;
    }

    set pants_color(color: string) {
        this._pants_color = color;
    }
    get pants_color(): string {
        return this._pants_color;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Length of pants:</strong> ${this.pants_length} <br><strong> Pants size is:</strong> ${this.pants_size} <br>`);
        if (this.pants_color == "White") {
            document.write(`The color of the pants:${this.pants_color}<br/>`);
        } else document.write(`<strong>The color of the pants:</strong><font color=${this.pants_color}>${this.pants_color}</font><br/>`);
    }
    constructor(price: number, item_manufacturer: string, item_model: string, item_stuck: number, pants_length: number, pants_size: number, pants_color: string) {
        super(price, item_manufacturer, item_model, item_stuck);
        this.pants_length = pants_length;
        this.pants_size = pants_size;
        this.pants_color = pants_color;
    }
}
class Jeans extends Pants {
    private _Jeans_tears: boolean;

    public set Jeans_tears(tears: boolean) {
        this._Jeans_tears = tears;
    }
    public get Jeans_tears(): boolean {
        return this._Jeans_tears;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Does the jeans contain tears?</strong> ${this.Jeans_tears} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/jeans.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(Jeans_tears: boolean = true, price: number, manufacturer: string, model: string, stuck: number, length: number, size: number, color: string) {
        super(price, manufacturer, model, stuck, length, size, color);
        this.Jeans_tears = Jeans_tears;
    }
}

class Fabric_pants extends Pants {

    private _numOfPockets: number;

    public set numOfPockets(num: number) {
        this._numOfPockets = num;
    }
    public get numOfPockets(): number {
        return this._numOfPockets;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Num of pockets:</strong> ${this.numOfPockets} <br>`);
    }

    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/normalpants.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(numOfPockets: number, price: number, manufacturer: string, model: string, stuck: number, length: number, size: number, color: string) {

        super(price, manufacturer, model, stuck, length, size, color);
        this.numOfPockets = numOfPockets;
    }
}

class Shorts extends Pants {
    private _typeOfCloth: string;

    public set typeOfCloth(type: string) {
        this._typeOfCloth = type;
    }
    public get typeOfCloth(): string {
        return this._typeOfCloth;

    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Type of cloth:</strong> ${this._typeOfCloth} <br>`);
    }

    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/shorts.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(typeOfCloth: string = "silk", price: number, manufacturer: string, model: string, stuck: number = 0, length: number, size: number, color: string) {
        super(price, manufacturer, model, stuck, length, size, color);
        this._typeOfCloth = typeOfCloth;
    }
}