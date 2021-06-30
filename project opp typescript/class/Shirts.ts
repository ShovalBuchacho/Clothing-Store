abstract class Shirt extends Item {

    private _shirt_length: number;
    private _shirt_size: number;
    private _shirt_color: string;

    /** The length of the sleeves of the shirt */

    set shirt_length(length: number) {
        if ((length <= 0) || (length > 3)) {
            throw "length is either negative or 0 or above 3";
        }
        else {
            this._shirt_length = length;
        }
    }
    get shirt_length(): number {
        return this._shirt_length;
    }
    /** The size of the shirt */

    set shirt_size(size: number) {
        if ((size <= 0) || (size > 100)) {
            throw "size is either negative or 0 or above 100";
        }
        else {
            this._shirt_size = size;
        }
    }
    get shirt_size(): number {
        return this._shirt_size;
    }
    /** The color of the shirt */

    set shirt_color(color: string) {
        this._shirt_color = color;
    }
    get shirt_color(): string {
        return this._shirt_color;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Length of sleeves:</strong> ${this.shirt_length} <br><strong> Shirt size is:</strong> ${this.shirt_size} <br/>`);
        if (this.shirt_color == "White") {
            document.write(`The color of the shirt:${this.shirt_color}<br/>`);
        } else document.write(`<strong>The color of the shirt:</strong><font color=${this.shirt_color}>${this.shirt_color}</font><br/>`);
    }
    /** The constructor of the class of _Shirt */

    constructor(price: number, item_manufacturer: string, item_model: string, item_stuck: number, shirt_length: number, shirt_size: number, shirt_color: string) {
        super(price, item_manufacturer, item_model, item_stuck);
        this.shirt_length = shirt_length;
        this.shirt_size = shirt_size;
        this.shirt_color = shirt_color;
    }
}

class T_shirt extends Shirt {
    private _tshirtprint: string;

    /** Function of print on the shirt */

    public set tshirtprint(name: string) {
        this._tshirtprint = name;
    }
    public get tshirtprint(): string {
        return this._tshirtprint;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails()
        document.write(`<strong>T-shirt print is:</strong> ${this.tshirtprint} <br> `);

    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/tshirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(tshirtprint: string = "null", price: number, manufacturer: string, model: string, stuck: number, length: number, size: number, color: string, ) {
        super(price, manufacturer, model, stuck, length, size, color);
        this.tshirtprint = tshirtprint;
    }
}

class Buttoned_Shirt extends Shirt {
    private _buttonsNumber: number;

    public set buttonsNumber(num: number) {
        if (num > 0) {
            this._buttonsNumber = num;
        }
        else {
            throw "num of buttons is negative!";

        }
    }
    public get buttonsNumber(): number {
        return this._buttonsNumber
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Num of buttons is:</strong> ${this.buttonsNumber} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/normalshirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(buttonnumber: number, price: number, manufacturer: string, model: string, stuck: number, length: number, size: number, color: string) {
        super(price, manufacturer, model, stuck, length, size, color);
        this.buttonsNumber = buttonnumber;
    }
}
class Women_Shirt extends Shirt {

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
        document.write(`<strong>Type of cloth is:</strong> ${this.typeOfCloth} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/womenshirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(typeOfCloth: string, price: number, manufacturer: string, model: string, stuck: number, length: number, size: number, color: string) {
        super(price, manufacturer, model, stuck, length, size, color);
        this.typeOfCloth = typeOfCloth;
    }
}
