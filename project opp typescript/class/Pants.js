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
var Pants = /** @class */ (function (_super) {
    __extends(Pants, _super);
    function Pants(price, item_manufacturer, item_model, item_stuck, pants_length, pants_size, pants_color) {
        var _this = _super.call(this, price, item_manufacturer, item_model, item_stuck) || this;
        _this.pants_length = pants_length;
        _this.pants_size = pants_size;
        _this.pants_color = pants_color;
        return _this;
    }
    Object.defineProperty(Pants.prototype, "pants_length", {
        get: function () {
            return this._pants_length;
        },
        set: function (length) {
            if ((length <= 0) || (length > 3)) {
                throw "length is either negative or 0 or above 3";
            }
            else {
                this._pants_length = length;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pants.prototype, "pants_size", {
        get: function () {
            return this._pants_size;
        },
        set: function (size) {
            if ((size <= 0) || (size > 100)) {
                throw "size is either negative or 0 or above 100";
            }
            else {
                this._pants_size = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pants.prototype, "pants_color", {
        get: function () {
            return this._pants_color;
        },
        set: function (color) {
            this._pants_color = color;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Pants.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Length of pants:</strong> " + this.pants_length + " <br><strong> Pants size is:</strong> " + this.pants_size + " <br>");
        if (this.pants_color == "White") {
            document.write("The color of the pants:" + this.pants_color + "<br/>");
        }
        else
            document.write("<strong>The color of the pants:</strong><font color=" + this.pants_color + ">" + this.pants_color + "</font><br/>");
    };
    return Pants;
}(Item));
var Jeans = /** @class */ (function (_super) {
    __extends(Jeans, _super);
    function Jeans(Jeans_tears, price, manufacturer, model, stuck, length, size, color) {
        if (Jeans_tears === void 0) { Jeans_tears = true; }
        var _this = _super.call(this, price, manufacturer, model, stuck, length, size, color) || this;
        _this.Jeans_tears = Jeans_tears;
        return _this;
    }
    Object.defineProperty(Jeans.prototype, "Jeans_tears", {
        get: function () {
            return this._Jeans_tears;
        },
        set: function (tears) {
            this._Jeans_tears = tears;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Jeans.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Does the jeans contain tears?</strong> " + this.Jeans_tears + " <br>");
    };
    /** A function that calls the image */
    Jeans.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/jeans.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Jeans;
}(Pants));
var Fabric_pants = /** @class */ (function (_super) {
    __extends(Fabric_pants, _super);
    function Fabric_pants(numOfPockets, price, manufacturer, model, stuck, length, size, color) {
        var _this = _super.call(this, price, manufacturer, model, stuck, length, size, color) || this;
        _this.numOfPockets = numOfPockets;
        return _this;
    }
    Object.defineProperty(Fabric_pants.prototype, "numOfPockets", {
        get: function () {
            return this._numOfPockets;
        },
        set: function (num) {
            this._numOfPockets = num;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Fabric_pants.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Num of pockets:</strong> " + this.numOfPockets + " <br>");
    };
    Fabric_pants.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/normalpants.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Fabric_pants;
}(Pants));
var Shorts = /** @class */ (function (_super) {
    __extends(Shorts, _super);
    function Shorts(typeOfCloth, price, manufacturer, model, stuck, length, size, color) {
        if (typeOfCloth === void 0) { typeOfCloth = "silk"; }
        if (stuck === void 0) { stuck = 0; }
        var _this = _super.call(this, price, manufacturer, model, stuck, length, size, color) || this;
        _this._typeOfCloth = typeOfCloth;
        return _this;
    }
    Object.defineProperty(Shorts.prototype, "typeOfCloth", {
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
    Shorts.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Type of cloth:</strong> " + this._typeOfCloth + " <br>");
    };
    Shorts.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/shorts.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Shorts;
}(Pants));
//# sourceMappingURL=Pants.js.map