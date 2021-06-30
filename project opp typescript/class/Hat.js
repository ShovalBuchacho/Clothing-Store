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
var Hat = /** @class */ (function (_super) {
    __extends(Hat, _super);
    function Hat(price, item_manufacturer, item_model, item_stuck, hatSize, hat_color, diameter) {
        if (hatSize === void 0) { hatSize = 30; }
        if (hat_color === void 0) { hat_color = "Red"; }
        if (diameter === void 0) { diameter = 5; }
        var _this = _super.call(this, price, item_manufacturer, item_model, item_stuck) || this;
        _this.hat_size = hatSize;
        _this.hat_color = hat_color;
        _this.hat_diameter = diameter;
        return _this;
    }
    Object.defineProperty(Hat.prototype, "hat_size", {
        get: function () {
            return this._hat_size;
        },
        set: function (size) {
            if ((size <= 0) || (size > 60)) {
                throw "size is either negative or 0 or above 60";
            }
            else {
                this._hat_size = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hat.prototype, "hat_color", {
        get: function () {
            return this._hat_color;
        },
        set: function (color) {
            this._hat_color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Hat.prototype, "hat_diameter", {
        get: function () {
            return this._hat_diameter;
        },
        set: function (diameter) {
            if ((diameter <= 0) || (diameter > 15)) {
                throw "size is either negative or 0 or above 15";
            }
            else {
                this._hat_diameter = diameter;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Hat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Hat size is:</strong> " + this.hat_size + " <br> <strong>Hat diameter is:</strong> " + this.hat_diameter + " <br>");
        if (this.hat_color == "White") {
            document.write("The color of the hat:" + this.hat_color + "<br/>");
        }
        else
            document.write("<strong>The color of the hat:</strong><font color=" + this.hat_color + ">" + this.hat_color + "</font><br/>");
    };
    return Hat;
}(Item));
var Kasket = /** @class */ (function (_super) {
    __extends(Kasket, _super);
    function Kasket(price, manufacturer, model, stuck, size, color, diameter, print) {
        if (diameter === void 0) { diameter = 6; }
        var _this = _super.call(this, price, manufacturer, model, stuck, size, color, diameter) || this;
        _this.isCommercialPrint = print;
        return _this;
    }
    Object.defineProperty(Kasket.prototype, "isCommercialPrint", {
        get: function () {
            return this._isCommercialPrint;
        },
        set: function (is) {
            this._isCommercialPrint = is;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Kasket.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Hat contains commercial print?</strong> " + this.isCommercialPrint + " <br>");
    };
    /** A function that calls the image */
    Kasket.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/kasket.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Kasket;
}(Hat));
var Brimmed_Hat = /** @class */ (function (_super) {
    __extends(Brimmed_Hat, _super);
    function Brimmed_Hat(price, manufacturer, model, stuck, size, color, diameter, height) {
        if (diameter === void 0) { diameter = 6; }
        if (height === void 0) { height = 10; }
        var _this = _super.call(this, price, manufacturer, model, stuck, size, color, diameter) || this;
        _this.HatHeight = height;
        return _this;
    }
    Object.defineProperty(Brimmed_Hat.prototype, "HatHeight", {
        get: function () {
            return this._HatHeight;
        },
        set: function (height) {
            if ((height <= 0) || (height > 20)) {
                throw "height is either negative or 0 or above 20";
            }
            else {
                this._HatHeight = height;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Brimmed_Hat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>hat height is:</strong> " + this.HatHeight + " <br>");
    };
    /** A function that calls the image */
    Brimmed_Hat.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/brimmed.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Brimmed_Hat;
}(Hat));
//# sourceMappingURL=Hat.js.map