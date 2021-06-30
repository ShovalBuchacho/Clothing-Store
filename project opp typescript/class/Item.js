var Item = /** @class */ (function () {
    /** Base class constructor */
    function Item(item_price, item_manufacturer, item_model, item_stuck) {
        if (item_manufacturer === void 0) { item_manufacturer = ""; }
        if (item_model === void 0) { item_model = ""; }
        this.item_price = item_price;
        this.item_manufacturer = item_manufacturer;
        this.item_model = item_model;
        this.item_stuck = item_stuck;
    }
    Object.defineProperty(Item.prototype, "item_price", {
        get: function () {
            return this._item_price;
        },
        /** Function of price */
        set: function (price) {
            if (price >= 0) {
                this._item_price = price;
            }
            else {
                throw "set price for item param price is negative!";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "item_manufacturer", {
        get: function () {
            return this._item_manufacturer;
        },
        /** Manufacturer function */
        set: function (manuf) {
            this._item_manufacturer = manuf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "item_model", {
        get: function () {
            return this._item_model;
        },
        /** Model function */
        set: function (model) {
            this._item_model = model;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "brand", {
        /** A function that returns a model and manufacturer */
        get: function () {
            var add;
            add = this.item_manufacturer + "&nbsp" + this.item_model;
            return add;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Item.prototype, "item_stuck", {
        get: function () {
            return this._item_stuck;
        },
        /** Function showing amount remaining in stock (not part of project, I added) */
        set: function (stuck) {
            if ((stuck >= 0) && (stuck <= 100)) {
                this._item_stuck = stuck;
            }
            else {
                throw "There are no more shirts from this model";
            }
        },
        enumerable: false,
        configurable: true
    });
    /**A function that returns the class information */
    Item.prototype.displayDetails = function () {
        document.write("<strong> Manufacturer: </strong>" + this.item_manufacturer + "&nbsp&nbsp<strong> Model: </strong>" + this.item_model + "<br/><strong>Item price is:</strong> " + this.item_price + " <br> <strong>Quantity left in stock:</strong> " + this.item_stuck + "<br> ");
    };
    /**A function that returns a price without vat */
    Item.prototype.getPriceWithoutVat = function () {
        document.write("<strong>Get Price Without Vat:</strong> " + (this.item_price / 1.17).toFixed(2) + " <br/> ");
    };
    return Item;
}());
//# sourceMappingURL=Item.js.map