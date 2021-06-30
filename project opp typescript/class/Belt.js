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
var Belt = /** @class */ (function (_super) {
    __extends(Belt, _super);
    function Belt(price, item_manufacturer, item_model, item_stuck, belt_color, belt_buckle_color, dimensions) {
        if (dimensions === void 0) { dimensions = new Dimensions(); }
        var _this = _super.call(this, price, item_manufacturer, item_model, item_stuck) || this;
        _this.belt_buckle_color = belt_buckle_color;
        _this.belt_color = belt_color;
        _this.belt_dimensions = dimensions;
        return _this;
    }
    Object.defineProperty(Belt.prototype, "belt_dimensions", {
        get: function () {
            return this._belt_dimensions;
        },
        set: function (dim) {
            this._belt_dimensions = dim;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "belt_color", {
        get: function () {
            return this._belt_color;
        },
        set: function (color) {
            this._belt_color = color;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "belt_buckle_color", {
        get: function () {
            return this._belt_buckle_color;
        },
        set: function (color) {
            this._belt_buckle_color = color;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Belt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        if (this.belt_buckle_color == "White") {
            document.write("<strong>Belt color is:</strong>" + this.belt_color + "<br/>");
        }
        else
            document.write("<strong>Belt color is:</strong><font color=" + this.belt_color + ">" + this.belt_color + "</font><br/>");
        document.write("<strong> Belt dimnesion height:</strong> " + this.belt_dimensions.height + " <br> \n                        <strong> Belt dimnesion width:</strong> " + this.belt_dimensions.width + " <br>      \n                        <strong> Belt dimnesion length:</strong> " + this.belt_dimensions.length + " <br>");
    };
    return Belt;
}(Item));
var Regular_Belt = /** @class */ (function (_super) {
    __extends(Regular_Belt, _super);
    function Regular_Belt(price, manufacturer, model, stuck, color, buckle, dimensions) {
        return _super.call(this, price, manufacturer, model, stuck, color, buckle, dimensions) || this;
    }
    /**A call to a function that displays the class details */
    Regular_Belt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        var _Type;
        (function (_Type) {
            _Type[_Type["metal"] = 0] = "metal";
            _Type[_Type["cloth"] = 1] = "cloth";
            _Type[_Type["plastic"] = 2] = "plastic";
            _Type[_Type["leather"] = 3] = "leather";
        })(_Type || (_Type = {}));
        var keys = Object.keys(_Type);
        var real_keys = keys.slice(keys.length / 2, keys.length);
        var random = real_keys[Math.floor(Math.random() * 4) + 0];
        document.write("<strong>The buckle material is:</strong> " + random + "<br>");
        if (this.belt_buckle_color == "White") {
            document.write("<strong>Belt buckle color is:</strong>" + this.belt_buckle_color + "<br/>");
        }
        else
            document.write("<strong>Belt buckle color is:</strong><font color=" + this.belt_buckle_color + ">" + this.belt_buckle_color + "</font><br/>");
    };
    Regular_Belt.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/belt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Regular_Belt;
}(Belt));
//# sourceMappingURL=Belt.js.map