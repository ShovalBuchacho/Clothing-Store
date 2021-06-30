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
var Shirt = /** @class */ (function (_super) {
    __extends(Shirt, _super);
    /** The constructor of the class of _Shirt */
    function Shirt(price, item_manufacturer, item_model, item_stuck, shirt_length, shirt_size, shirt_color) {
        var _this = _super.call(this, price, item_manufacturer, item_model, item_stuck) || this;
        _this.shirt_length = shirt_length;
        _this.shirt_size = shirt_size;
        _this.shirt_color = shirt_color;
        return _this;
    }
    Object.defineProperty(Shirt.prototype, "shirt_length", {
        get: function () {
            return this._shirt_length;
        },
        /** The length of the sleeves of the shirt */
        set: function (length) {
            if ((length <= 0) || (length > 3)) {
                throw "length is either negative or 0 or above 3";
            }
            else {
                this._shirt_length = length;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shirt.prototype, "shirt_size", {
        get: function () {
            return this._shirt_size;
        },
        /** The size of the shirt */
        set: function (size) {
            if ((size <= 0) || (size > 100)) {
                throw "size is either negative or 0 or above 100";
            }
            else {
                this._shirt_size = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shirt.prototype, "shirt_color", {
        get: function () {
            return this._shirt_color;
        },
        /** The color of the shirt */
        set: function (color) {
            this._shirt_color = color;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Shirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Length of sleeves:</strong> " + this.shirt_length + " <br><strong> Shirt size is:</strong> " + this.shirt_size + " <br/>");
        if (this.shirt_color == "White") {
            document.write("The color of the shirt:" + this.shirt_color + "<br/>");
        }
        else
            document.write("<strong>The color of the shirt:</strong><font color=" + this.shirt_color + ">" + this.shirt_color + "</font><br/>");
    };
    return Shirt;
}(Item));
var T_shirt = /** @class */ (function (_super) {
    __extends(T_shirt, _super);
    function T_shirt(tshirtprint, price, manufacturer, model, stuck, length, size, color) {
        if (tshirtprint === void 0) { tshirtprint = "null"; }
        var _this = _super.call(this, price, manufacturer, model, stuck, length, size, color) || this;
        _this.tshirtprint = tshirtprint;
        return _this;
    }
    Object.defineProperty(T_shirt.prototype, "tshirtprint", {
        get: function () {
            return this._tshirtprint;
        },
        /** Function of print on the shirt */
        set: function (name) {
            this._tshirtprint = name;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    T_shirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>T-shirt print is:</strong> " + this.tshirtprint + " <br> ");
    };
    /** A function that calls the image */
    T_shirt.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/tshirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return T_shirt;
}(Shirt));
var Buttoned_Shirt = /** @class */ (function (_super) {
    __extends(Buttoned_Shirt, _super);
    function Buttoned_Shirt(buttonnumber, price, manufacturer, model, stuck, length, size, color) {
        var _this = _super.call(this, price, manufacturer, model, stuck, length, size, color) || this;
        _this.buttonsNumber = buttonnumber;
        return _this;
    }
    Object.defineProperty(Buttoned_Shirt.prototype, "buttonsNumber", {
        get: function () {
            return this._buttonsNumber;
        },
        set: function (num) {
            if (num > 0) {
                this._buttonsNumber = num;
            }
            else {
                throw "num of buttons is negative!";
            }
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Buttoned_Shirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Num of buttons is:</strong> " + this.buttonsNumber + " <br>");
    };
    /** A function that calls the image */
    Buttoned_Shirt.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/normalshirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Buttoned_Shirt;
}(Shirt));
var Women_Shirt = /** @class */ (function (_super) {
    __extends(Women_Shirt, _super);
    function Women_Shirt(typeOfCloth, price, manufacturer, model, stuck, length, size, color) {
        var _this = _super.call(this, price, manufacturer, model, stuck, length, size, color) || this;
        _this.typeOfCloth = typeOfCloth;
        return _this;
    }
    Object.defineProperty(Women_Shirt.prototype, "typeOfCloth", {
        get: function () {
            return this._typeOfCloth;
        },
        set: function (type) {
            this._typeOfCloth = type;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Women_Shirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Type of cloth is:</strong> " + this.typeOfCloth + " <br>");
    };
    /** A function that calls the image */
    Women_Shirt.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/womenshirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Women_Shirt;
}(Shirt));
//# sourceMappingURL=Shirts.js.map