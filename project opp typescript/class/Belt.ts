abstract class Belt extends Item {

    private _belt_color: string;
    private _belt_buckle_color: string;

    private _belt_dimensions: Dimensions;

    set belt_dimensions(dim: Dimensions) {
        this._belt_dimensions = dim;
    }
    get belt_dimensions(): Dimensions {
        return this._belt_dimensions;
    }

    set belt_color(color: string) {
        this._belt_color = color;
    }
    get belt_color(): string {
        return this._belt_color;
    }

    set belt_buckle_color(color: string) {
        this._belt_buckle_color = color;
    }
    get belt_buckle_color(): string {
        return this._belt_buckle_color;
    }

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();

        if (this.belt_buckle_color == "White") {

            document.write(`<strong>Belt color is:</strong>${this.belt_color}<br/>`);
        }
        else document.write(`<strong>Belt color is:</strong><font color=${this.belt_color}>${this.belt_color}</font><br/>`);

        document.write(`<strong> Belt dimnesion height:</strong> ${this.belt_dimensions.height} <br> 
                        <strong> Belt dimnesion width:</strong> ${this.belt_dimensions.width} <br>      
                        <strong> Belt dimnesion length:</strong> ${this.belt_dimensions.length} <br>`);
    }

    constructor(price: number, item_manufacturer: string, item_model: string, item_stuck: number, belt_color: string, belt_buckle_color: string, dimensions: Dimensions = new Dimensions()) {
        super(price, item_manufacturer, item_model, item_stuck);
        this.belt_buckle_color = belt_buckle_color;
        this.belt_color = belt_color;
        this.belt_dimensions = dimensions;
    }
}
class Regular_Belt extends Belt {

    /**A call to a function that displays the class details */
    public displayDetails(): void {
        super.displayDetails();

        enum _Type {
            metal, cloth, plastic, leather
        }
        let keys = Object.keys(_Type)
        let real_keys = keys.slice(keys.length / 2, keys.length)
        let random = real_keys[Math.floor(Math.random() * 4) + 0]
        document.write(`<strong>The buckle material is:</strong> ${random}<br>`)



        if (this.belt_buckle_color == "White") {
            document.write(`<strong>Belt buckle color is:</strong>${this.belt_buckle_color}<br/>`);
        } else document.write(`<strong>Belt buckle color is:</strong><font color=${this.belt_buckle_color}>${this.belt_buckle_color}</font><br/>`);
    }

    public displayImage(): void {
        var img = document.createElement('img');
        img.src = "items/belt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    }
    constructor(price: number, manufacturer: string, model: string, stuck: number, color: string, buckle: string, dimensions: Dimensions) {

        super(price, manufacturer, model, stuck, color, buckle, dimensions);

    }

}

