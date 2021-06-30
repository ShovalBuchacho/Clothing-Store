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
var Jacket = /** @class */ (function (_super) {
    __extends(Jacket, _super);
    function Jacket(price, item_manufacturer, item_model, item_stuck, jacket_size, jacket_color, thickness) {
        if (jacket_size === void 0) { jacket_size = 30; }
        if (jacket_color === void 0) { jacket_color = "black"; }
        if (thickness === void 0) { thickness = 5; }
        var _this = _super.call(this, price, item_manufacturer, item_model, item_stuck) || this;
        _this.jacket_size = jacket_size;
        _this.jacket_color = jacket_color;
        _this.cloth_thickness = thickness;
        return _this;
    }
    Object.defineProperty(Jacket.prototype, "jacket_size", {
        get: function () {
            return this._jacket_size;
        },
        set: function (size) {
            if ((size <= 0) || (size > 50)) {
                throw "size is either negative or 0 or above 50";
            }
            else {
                this._jacket_size = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jacket.prototype, "jacket_color", {
        get: function () {
            return this._jacket_color;
        },
        set: function (color) {
            this._jacket_color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Jacket.prototype, "cloth_thickness", {
        get: function () {
            return this._cloth_thickness;
        },
        set: function (thick) {
            if ((thick <= 0) || (thick > 10)) {
                throw "thickness is either negative or 0 or above 10";
            }
            else {
                this._cloth_thickness = thick;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Jacket.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Jacket size is:</strong> " + this.jacket_size + " <br><strong> Jacket thickness is:</strong> " + this.cloth_thickness + " <br>");
        if (this.jacket_color == "White") {
            document.write("The color of the jacket:" + this.jacket_color + "<br/>");
        }
        else
            document.write("<strong>The color of the jacket:</strong><font color=" + this.jacket_color + ">" + this.jacket_color + "</font><br/>");
    };
    return Jacket;
}(Item));
var Regular_Jacket = /** @class */ (function (_super) {
    __extends(Regular_Jacket, _super);
    function Regular_Jacket(price, manufacturer, model, stuck, size, color, thickness, numOfPockets) {
        if (numOfPockets === void 0) { numOfPockets = 2; }
        var _this = _super.call(this, price, manufacturer, model, stuck, size, color, thickness) || this;
        _this.numberOfPockets = numOfPockets;
        return _this;
    }
    Object.defineProperty(Regular_Jacket.prototype, "numberOfPockets", {
        get: function () {
            return this._number_Of_Pockets;
        },
        set: function (num) {
            if ((num < 0) || (num > 20)) {
                throw "num of pockets should be at least 0 and NOT above 20!";
            }
            else {
                this._number_Of_Pockets = num;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Regular_Jacket.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Jacket number of pockets is:</strong> " + this.numberOfPockets + " <br>");
    };
    /** A function that calls the image */
    Regular_Jacket.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/jacket.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Regular_Jacket;
}(Jacket));
var Coat = /** @class */ (function (_super) {
    __extends(Coat, _super);
    function Coat(price, manufacturer, model, stuck, size, color, thickness, isRain) {
        if (isRain === void 0) { isRain = true; }
        var _this = _super.call(this, price, manufacturer, model, stuck, size, color, thickness) || this;
        _this.isRainCoat = isRain;
        return _this;
    }
    Object.defineProperty(Coat.prototype, "isRainCoat", {
        get: function () {
            return this._isRainCoat;
        },
        set: function (rain) {
            this._isRainCoat = rain;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Coat.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Coat is rain coat? </strong> " + this.isRainCoat + "<br>");
    };
    /** A function that calls the image */
    Coat.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/coat.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Coat;
}(Jacket));
//# sourceMappingURL=Jacket.js.map