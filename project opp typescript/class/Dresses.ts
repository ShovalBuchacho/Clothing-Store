abstract class Dress extends Item {

    private _scope: number;
    private _dress_size: number;
    private _dress_color: string;

    set dress_size(size: number) {
        if ((size <= 0) || (size > 50)) {
            throw "size is either negative or 0 or above 50";
        }
        else {
            this._dress_size = size;
        }
    }
    get dress_size(): number {
        return this._dress_size;
    }

    set dress_color(color: string) {
        this._dress_color = color;
    }
    get dress_color(): string {
        return this._dress_color;
    }

    set scope(scope: number) {
        if ((scope <= 0) || (scope > 20)) {
            throw "scope is either negative or 0 or above 50";
        }
        else {
            this._scope = scope;
        }
    }
    get scope(): number {
        return this._scope;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Dress size is:</strong> ${this.dress_size}<br><strong> Scope of dress:</strong> ${this.scope} <br>`);
        if (this.dress_color == "White") {
            document.write(`The color of the dress:${this.dress_color}<br/>`);
        } else document.write(`<strong>The color of the dress:</strong><font color=${this.dress_color}>${this.dress_color}</font><br/>`);
    }

    constructor(price: number, item_manufacturer: string, item_model: string, item_stuck: number, dress_size: number, dress_color: string, scope: number) {
        super(price, item_manufacturer, item_model, item_stuck);
        this.dress_size = dress_size;
        this.dress_color = dress_color;
        this._scope = scope;
    }
}
class Skirt extends Dress {

    /**A call to a function that displays the class details */
    public displayDetails(): void {

        super.displayDetails();

        enum _Type {
            Short_Skirt, Long_Skirt
        }
        let keys = Object.keys(_Type)
        let real_keys = keys.slice(keys.length / 2, keys.length)
        let random = real_keys[Math.floor(Math.random() * real_keys.length)]
        document.write(`<strong>The type of skirt</strong>: ${random}<br>`)
    }

/** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/skirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, stuck: number, size: number, color: string, scope: number) {

        super(price, manufacturer, model, stuck, size, color, scope);
    }
}

class Long_Dress extends Dress {
    private _dressLength: number;
    private _isExposed: boolean;

    public set dressLength(num: number) {
        if ((num >= 0) && (num < 3)) {
            this._dressLength = num;
        }
        else {
            throw "length is either too big or negative!";
        }
    }
    public get dressLength(): number {
        return this._dressLength
    }

    public set isExposed(exposed: boolean) {
        if ((exposed = true) || (exposed = false)) {
            this._isExposed = exposed;
        }
        else {
            throw "exposed should be boolean!"
        }
    }
    public get isExposed(): boolean {
        return this._isExposed;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>length is:</strong> ${this.dressLength} <br><strong> Is exposed?</strong> ${this.isExposed} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/longDress.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(dressLength: number, exposed: boolean, price: number, manufacturer: string, model: string, stuck: number, size: number, color: string, scope: number) {

        super(price, manufacturer, model, stuck, size, color, scope);
        this.dressLength = dressLength;
        this.isExposed = exposed;
    }
}
class Evening_dress extends Dress {

    private _typeOfCloth: string;
    private _dressLength: number;
    private _isExposed: boolean;

    public set typeOfCloth(type: string) {
        this._typeOfCloth = type;
    }
    public get typeOfCloth(): string {
        return this._typeOfCloth;
    }

    public set dressLength(num: number) {
        if ((num >= 0) && (num < 3)) {
            this._dressLength = num;
        }
        else {
            throw "length is either too big or negative!";
        }
    }
    public get dressLength(): number {
        return this._dressLength
    }

    public set isExposed(exposed: boolean) {
        this._isExposed = exposed;
    }
    public get isExposed(): boolean {
        return this._isExposed;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();
        document.write(`<strong>Type of cloth is:</strong> ${this.typeOfCloth} <br> <strong>Length of dress:</strong> ${this.dressLength} <br> <strong>Is exposed?</strong> ${this.isExposed} <br>`);
    }

    /** A function that calls the image */
    public displayImage(): void {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/fancyDress.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }

    constructor(typeOfCloth: string, dressLength: number, exposed: boolean, price: number, manufacturer: string, model: string, stuck: number, size: number, color: string, scope: number) {

        super(price, manufacturer, model, stuck, size, color, scope);
        this.typeOfCloth = typeOfCloth;
        this.dressLength = dressLength;
        this.isExposed = exposed;
    }
}
