abstract class Shoes extends Item {

    private _shoe_size: number;
    private _shoe_color: string;
    private _madeIn: string;

    set madeIn(country: string) {
        this._madeIn = country;
    }
    get madeIn(): string {
        return this._madeIn;
    }

    set shoe_size(size: number) {
        if ((size <= 0) || (size > 50)) {
            throw "size is either negative or 0 or above 50";
        }
        else {
            this._shoe_size = size;
        }
    }
    get shoe_size(): number {
        return this._shoe_size;
    }

    set shoe_color(color: string) {
        this._shoe_color = color;
    }
    get shoe_color(): string {
        return this._shoe_color;
    }

   /**A call to a function that displays the class details */
    public displayDetails(): void { 
        super.displayDetails();
        document.write(`<strong>Shoe size is:</strong> ${this.shoe_size} <br><strong> Made in:</strong> ${this.madeIn} <br>`);
        if (this.shoe_color == "White") {
            document.write(`<strong>The color of the shoes:</strong>${this.shoe_color}<br/>`);
        } else document.write(`<strong>The color of the shoes:</strong><font color=${this.shoe_color}>${this.shoe_color}</font><br/>`);
    }

    constructor(price: number, item_manufacturer: string, item_model: string, item_stuck: number, shoe_size: number, shoe_color: string, madein: string) {
        super(price, item_manufacturer, item_model, item_stuck);
        this.shoe_size = shoe_size;
        this.shoe_color = shoe_color;
        this.madeIn = madein;
    }
}
class Elegant_Shoes extends Shoes {

    /** Boolean function Is there laces in the shoe*/
    private _isLaces: boolean;

    set isLaces(laces: boolean) {
        this._isLaces = laces;
    }
    get isLaces(): boolean {
        return this._isLaces;
    }

    /**A call to a function that displays the class details*/
    public displayDetails(): void {
        super.displayDetails();
        enum _Type {
            canvas, Leather, Suede
        }
        let keys = Object.keys(_Type)
        let real_keys = keys.slice(keys.length / 2, keys.length)
        let random = real_keys[Math.floor(Math.random() * real_keys.length)]
        document.write(`<strong>The material type of shoe:</strong> ${random}<br>`)
        document.write(`<strong> Does the shoe have laces?</strong> ${this.isLaces}<br> `);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/elegantshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, item_stuck: number, size: number, color: string, madein: string, islaces: boolean) {

        super(price, manufacturer, model, item_stuck, size, color, madein);
        this.isLaces = islaces;
    }
}

class Sport_shoes extends Shoes {
    private _Manufacturing_Date: Date;
    private _isLaces: boolean;

    /** Boolean function Is there laces in the shoe*/
    set isLaces(laces: boolean) {
        this._isLaces = laces;
    }
    get isLaces(): boolean {
        return this._isLaces;
    }
    /** Function of Manufacturing date*/
    public set Manufacturing_Date(date: Date) {
        this._Manufacturing_Date = date;
    }
    public get Manufacturing_Date(): Date {
        return this._Manufacturing_Date;
    }

    /**A call to a function that displays the class details*/
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Shoes manufacturing date is:</strong> ${this.Manufacturing_Date.toLocaleDateString()} <br><strong> Does the shoe have laces?</strong> ${this.isLaces}<br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/sportshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(price: number, manufacturer: string, model: string, item_stuck: number, size: number, color: string, madein: string, islaces: boolean, date: Date) {
        super(price, manufacturer, model, item_stuck, size, color, madein);
        this.Manufacturing_Date = date;
        this.isLaces = islaces;
    }
}

class Comfort_Shoes extends Shoes {
    private _isSole: boolean;
    private _isLaces: boolean;

    /** Boolean function Is there laces in the shoe*/
    set isLaces(laces: boolean) {
        this._isLaces = laces;
    }
    get isLaces(): boolean {
        return this._isLaces;
    }

    /** Boolean function Is there a shoe insole */
    public set isSole(type: boolean) {
        this._isSole = type;
    }
    public get isSole(): boolean {
        return this._isSole;
    }

    /**A call to a function that displays the class details*/
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Do they contain insole in the shoe?</strong> ${this.isSole} <br> <strong>Does the shoe have laces?</strong> ${this.isLaces} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/comfortshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(price: number, manufacturer: string, model: string, item_stuck: number, size: number, color: string, madein: string, islaces: boolean = true, isSole: boolean) {
        super(price, manufacturer, model, item_stuck, size, color, madein);
        this.isSole = isSole;
        this.isLaces = islaces;
    }
}
class Heels_shoes extends Shoes {
    /**A call to a function that displays the class details*/
    public displayDetails(): void {
        super.displayDetails();

        enum _Type {
            High_heel = 1, Low_heel = 2, Medium_heel = 3
        }
        let keys = Object.keys(_Type)
        let real_keys = keys.slice(keys.length / 3, keys.length)
        let random = real_keys[Math.floor(Math.random() * 3) + 1]
        document.write(`<strong>The heel type of the shoe:</strong> ${random}<br>`)
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/hills.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(typeOfHills: boolean, price: number, manufacturer: string, model: string, item_stuck: number, size: number, color: string, madein: string) {
        super(price, manufacturer, model, item_stuck, size, color, madein);
    }
}