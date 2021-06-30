var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shoes = /** @class */ (function (_super) {
    __extends(Shoes, _super);
    function Shoes(price, item_manufacturer, item_model, item_stuck, shoe_size, shoe_color, madein) {
        var _this = _super.call(this, price, item_manufacturer, item_model, item_stuck) || this;
        _this.shoe_size = shoe_size;
        _this.shoe_color = shoe_color;
        _this.madeIn = madein;
        return _this;
    }
    Object.defineProperty(Shoes.prototype, "madeIn", {
        get: function () {
            return this._madeIn;
        },
        set: function (country) {
            this._madeIn = country;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shoes.prototype, "shoe_size", {
        get: function () {
            return this._shoe_size;
        },
        set: function (size) {
            if ((size <= 0) || (size > 50)) {
                throw "size is either negative or 0 or above 50";
            }
            else {
                this._shoe_size = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shoes.prototype, "shoe_color", {
        get: function () {
            return this._shoe_color;
        },
        set: function (color) {
            this._shoe_color = color;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Shoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Shoe size is:</strong> " + this.shoe_size + " <br><strong> Made in:</strong> " + this.madeIn + " <br>");
        if (this.shoe_color == "White") {
            document.write("<strong>The color of the shoes:</strong>" + this.shoe_color + "<br/>");
        }
        else
            document.write("<strong>The color of the shoes:</strong><font color=" + this.shoe_color + ">" + this.shoe_color + "</font><br/>");
    };
    return Shoes;
}(Item));
var Elegant_Shoes = /** @class */ (function (_super) {
    __extends(Elegant_Shoes, _super);
    function Elegant_Shoes(price, manufacturer, model, item_stuck, size, color, madein, islaces) {
        var _this = _super.call(this, price, manufacturer, model, item_stuck, size, color, madein) || this;
        _this.isLaces = islaces;
        return _this;
    }
    Object.defineProperty(Elegant_Shoes.prototype, "isLaces", {
        get: function () {
            return this._isLaces;
        },
        set: function (laces) {
            this._isLaces = laces;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details*/
    Elegant_Shoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        var _Type;
        (function (_Type) {
            _Type[_Type["canvas"] = 0] = "canvas";
            _Type[_Type["Leather"] = 1] = "Leather";
            _Type[_Type["Suede"] = 2] = "Suede";
        })(_Type || (_Type = {}));
        var keys = Object.keys(_Type);
        var real_keys = keys.slice(keys.length / 2, keys.length);
        var random = real_keys[Math.floor(Math.random() * real_keys.length)];
        document.write("<strong>The material type of shoe:</strong> " + random + "<br>");
        document.write("<strong> Does the shoe have laces?</strong> " + this.isLaces + "<br> ");
    };
    /** A function that calls the image */
    Elegant_Shoes.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/elegantshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Elegant_Shoes;
}(Shoes));
var Sport_shoes = /** @class */ (function (_super) {
    __extends(Sport_shoes, _super);
    function Sport_shoes(price, manufacturer, model, item_stuck, size, color, madein, islaces, date) {
        var _this = _super.call(this, price, manufacturer, model, item_stuck, size, color, madein) || this;
        _this.Manufacturing_Date = date;
        _this.isLaces = islaces;
        return _this;
    }
    Object.defineProperty(Sport_shoes.prototype, "isLaces", {
        get: function () {
            return this._isLaces;
        },
        /** Boolean function Is there laces in the shoe*/
        set: function (laces) {
            this._isLaces = laces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sport_shoes.prototype, "Manufacturing_Date", {
        get: function () {
            return this._Manufacturing_Date;
        },
        /** Function of Manufacturing date*/
        set: function (date) {
            this._Manufacturing_Date = date;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details*/
    Sport_shoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Shoes manufacturing date is:</strong> " + this.Manufacturing_Date.toLocaleDateString() + " <br><strong> Does the shoe have laces?</strong> " + this.isLaces + "<br>");
    };
    /** A function that calls the image */
    Sport_shoes.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/sportshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Sport_shoes;
}(Shoes));
var Comfort_Shoes = /** @class */ (function (_super) {
    __extends(Comfort_Shoes, _super);
    function Comfort_Shoes(price, manufacturer, model, item_stuck, size, color, madein, islaces, isSole) {
        if (islaces === void 0) { islaces = true; }
        var _this = _super.call(this, price, manufacturer, model, item_stuck, size, color, madein) || this;
        _this.isSole = isSole;
        _this.isLaces = islaces;
        return _this;
    }
    Object.defineProperty(Comfort_Shoes.prototype, "isLaces", {
        get: function () {
            return this._isLaces;
        },
        /** Boolean function Is there laces in the shoe*/
        set: function (laces) {
            this._isLaces = laces;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Comfort_Shoes.prototype, "isSole", {
        get: function () {
            return this._isSole;
        },
        /** Boolean function Is there a shoe insole */
        set: function (type) {
            this._isSole = type;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details*/
    Comfort_Shoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Do they contain insole in the shoe?</strong> " + this.isSole + " <br> <strong>Does the shoe have laces?</strong> " + this.isLaces + " <br>");
    };
    /** A function that calls the image */
    Comfort_Shoes.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/comfortshoes.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Comfort_Shoes;
}(Shoes));
var Heels_shoes = /** @class */ (function (_super) {
    __extends(Heels_shoes, _super);
    function Heels_shoes(typeOfHills, price, manufacturer, model, item_stuck, size, color, madein) {
        return _super.call(this, price, manufacturer, model, item_stuck, size, color, madein) || this;
    }
    /**A call to a function that displays the class details*/
    Heels_shoes.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        var _Type;
        (function (_Type) {
            _Type[_Type["High_heel"] = 1] = "High_heel";
            _Type[_Type["Low_heel"] = 2] = "Low_heel";
            _Type[_Type["Medium_heel"] = 3] = "Medium_heel";
        })(_Type || (_Type = {}));
        var keys = Object.keys(_Type);
        var real_keys = keys.slice(keys.length / 3, keys.length);
        var random = real_keys[Math.floor(Math.random() * 3) + 1];
        document.write("<strong>The heel type of the shoe:</strong> " + random + "<br>");
    };
    /** A function that calls the image */
    Heels_shoes.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/hills.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Heels_shoes;
}(Shoes));
//# sourceMappingURL=Shoes.js.map