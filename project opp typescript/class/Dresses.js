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
var Dress = /** @class */ (function (_super) {
    __extends(Dress, _super);
    function Dress(price, item_manufacturer, item_model, item_stuck, dress_size, dress_color, scope) {
        var _this = _super.call(this, price, item_manufacturer, item_model, item_stuck) || this;
        _this.dress_size = dress_size;
        _this.dress_color = dress_color;
        _this._scope = scope;
        return _this;
    }
    Object.defineProperty(Dress.prototype, "dress_size", {
        get: function () {
            return this._dress_size;
        },
        set: function (size) {
            if ((size <= 0) || (size > 50)) {
                throw "size is either negative or 0 or above 50";
            }
            else {
                this._dress_size = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dress.prototype, "dress_color", {
        get: function () {
            return this._dress_color;
        },
        set: function (color) {
            this._dress_color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dress.prototype, "scope", {
        get: function () {
            return this._scope;
        },
        set: function (scope) {
            if ((scope <= 0) || (scope > 20)) {
                throw "scope is either negative or 0 or above 50";
            }
            else {
                this._scope = scope;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Dress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Dress size is:</strong> " + this.dress_size + "<br><strong> Scope of dress:</strong> " + this.scope + " <br>");
        if (this.dress_color == "White") {
            document.write("The color of the dress:" + this.dress_color + "<br/>");
        }
        else
            document.write("<strong>The color of the dress:</strong><font color=" + this.dress_color + ">" + this.dress_color + "</font><br/>");
    };
    return Dress;
}(Item));
var Skirt = /** @class */ (function (_super) {
    __extends(Skirt, _super);
    function Skirt(price, manufacturer, model, stuck, size, color, scope) {
        return _super.call(this, price, manufacturer, model, stuck, size, color, scope) || this;
    }
    /**A call to a function that displays the class details */
    Skirt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        var _Type;
        (function (_Type) {
            _Type[_Type["Short_Skirt"] = 0] = "Short_Skirt";
            _Type[_Type["Long_Skirt"] = 1] = "Long_Skirt";
        })(_Type || (_Type = {}));
        var keys = Object.keys(_Type);
        var real_keys = keys.slice(keys.length / 2, keys.length);
        var random = real_keys[Math.floor(Math.random() * real_keys.length)];
        document.write("<strong>The type of skirt</strong>: " + random + "<br>");
    };
    /** A function that calls the image */
    Skirt.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/skirt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Skirt;
}(Dress));
var Long_Dress = /** @class */ (function (_super) {
    __extends(Long_Dress, _super);
    function Long_Dress(dressLength, exposed, price, manufacturer, model, stuck, size, color, scope) {
        var _this = _super.call(this, price, manufacturer, model, stuck, size, color, scope) || this;
        _this.dressLength = dressLength;
        _this.isExposed = exposed;
        return _this;
    }
    Object.defineProperty(Long_Dress.prototype, "dressLength", {
        get: function () {
            return this._dressLength;
        },
        set: function (num) {
            if ((num >= 0) && (num < 3)) {
                this._dressLength = num;
            }
            else {
                throw "length is either too big or negative!";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Long_Dress.prototype, "isExposed", {
        get: function () {
            return this._isExposed;
        },
        set: function (exposed) {
            if ((exposed = true) || (exposed = false)) {
                this._isExposed = exposed;
            }
            else {
                throw "exposed should be boolean!";
            }
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Long_Dress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>length is:</strong> " + this.dressLength + " <br><strong> Is exposed?</strong> " + this.isExposed + " <br>");
    };
    /** A function that calls the image */
    Long_Dress.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/longDress.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Long_Dress;
}(Dress));
var Evening_dress = /** @class */ (function (_super) {
    __extends(Evening_dress, _super);
    function Evening_dress(typeOfCloth, dressLength, exposed, price, manufacturer, model, stuck, size, color, scope) {
        var _this = _super.call(this, price, manufacturer, model, stuck, size, color, scope) || this;
        _this.typeOfCloth = typeOfCloth;
        _this.dressLength = dressLength;
        _this.isExposed = exposed;
        return _this;
    }
    Object.defineProperty(Evening_dress.prototype, "typeOfCloth", {
        get: function () {
            return this._typeOfCloth;
        },
        set: function (type) {
            this._typeOfCloth = type;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Evening_dress.prototype, "dressLength", {
        get: function () {
            return this._dressLength;
        },
        set: function (num) {
            if ((num >= 0) && (num < 3)) {
                this._dressLength = num;
            }
            else {
                throw "length is either too big or negative!";
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Evening_dress.prototype, "isExposed", {
        get: function () {
            return this._isExposed;
        },
        set: function (exposed) {
            this._isExposed = exposed;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Evening_dress.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Type of cloth is:</strong> " + this.typeOfCloth + " <br> <strong>Length of dress:</strong> " + this.dressLength + " <br> <strong>Is exposed?</strong> " + this.isExposed + " <br>");
    };
    /** A function that calls the image */
    Evening_dress.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/fancyDress.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Evening_dress;
}(Dress));
//# sourceMappingURL=Dresses.js.map