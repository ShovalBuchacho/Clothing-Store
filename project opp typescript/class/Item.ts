abstract class Item {/*Base class מחלקת הבסיס*/

    private _item_price: number;
    private _item_manufacturer: string;
    private _item_model: string;
    private _item_stuck: number;

    /** Function of price */
    public set item_price(price: number) {
        if (price >= 0) {
            this._item_price = price;
        }
        else {
            throw "set price for item param price is negative!";
        }
    }
    public get item_price(): number {
        return this._item_price;
    }
    /** Manufacturer function */
    public set item_manufacturer(manuf: string) {
        this._item_manufacturer = manuf;
    }
    public get item_manufacturer(): string {
        return this._item_manufacturer;
    }
    /** Model function */
    public set item_model(model: string) {
        this._item_model = model;

    }
    public get item_model(): string {
        return this._item_model;
    }
    /** A function that returns a model and manufacturer */
    public get brand(): string {
        let add: string;
        add = this.item_manufacturer + "&nbsp" + this.item_model;
        return add;
    }
    /** Function showing amount remaining in stock (not part of project, I added) */
    public set item_stuck(stuck: number) {
        if ((stuck >= 0) && (stuck <= 100)) {

            this._item_stuck = stuck;
        }
        else {
            throw "There are no more shirts from this model";
        }
    }
    public get item_stuck(): number {
        return this._item_stuck;
    }


    /**A function that returns the class information */
    public displayDetails(): void {
        document.write(`<strong> Manufacturer: </strong>${this.item_manufacturer}&nbsp&nbsp<strong> Model: </strong>${this.item_model}<br/><strong>Item price is:</strong> ${this.item_price} <br> <strong>Quantity left in stock:</strong> ${this.item_stuck}<br> `);
    }

    /**A function that returns a price without vat */
    getPriceWithoutVat(): void {
        document.write(`<strong>Get Price Without Vat:</strong> ${(this.item_price / 1.17).toFixed(2)} <br/> `);
    }
    /**A function that returns an image */
    abstract displayImage(): void;

    /** Base class constructor */
    constructor(item_price: number, item_manufacturer: string = "", item_model: string = "", item_stuck: number) {
        this.item_price = item_price;
        this.item_manufacturer = item_manufacturer;
        this.item_model = item_model;
        this.item_stuck = item_stuck;
    }
}
