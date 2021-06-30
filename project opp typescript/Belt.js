var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
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
    //
    function Belt(price, item_manufacturer, item_model, item_stuck, belt_color, belt_buckle_color, belt_buckle_material, dimensions) {
        if (belt_color === void 0) { belt_color = "Brown"; }
        if (belt_buckle_color === void 0) { belt_buckle_color = "Red"; }
        if (belt_buckle_material === void 0) { belt_buckle_material = "Leather"; }
        if (dimensions === void 0) { dimensions = new Dimensions(); }
        var _this = _super.call(this, price, item_manufacturer, item_model, item_stuck) || this;
        _this.belt_buckle_color = belt_buckle_color;
        _this.belt_color = belt_color;
        _this.belt_buckle_material = belt_buckle_material;
        _this.belt_dimensions = dimensions;
        return _this;
    }
    Object.defineProperty(Belt.prototype, "belt_color", {
        get: function () {
            return this._belt_color;
        },
        set: function (color) {
            this._belt_color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "belt_buckle_color", {
        get: function () {
            return this._belt_buckle_color;
        },
        set: function (color) {
            this._belt_buckle_color = color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "belt_buckle_material", {
        get: function () {
            return this._belt_buckle_material;
        },
        set: function (mat) {
            this._belt_buckle_material = mat;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Belt.prototype, "belt_dimensions", {
        get: function () {
            return this._belt_dimensions;
        },
        set: function (dim) {
            this._belt_dimensions = dim;
        },
        enumerable: true,
        configurable: true
    });
    Belt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("belt color is: " + this.belt_color + " <br>  belt buckle color is : " + this.belt_buckle_color + " <br> \n                        belt_buckle_material is " + this.belt_buckle_material + " <br> \n                        belt dimnesion height " + this.belt_dimensions.height + " <br> \n                        belt dimnesion width " + this.belt_dimensions.width + " <br>      \n                        belt dimnesion length " + this.belt_dimensions.length + " <br>");
    };
    return Belt;
}(item));
var RegularBelt = /** @class */ (function (_super) {
    __extends(RegularBelt, _super);
    function RegularBelt(price, manufacturer, model, stuck, color, buckle, material, dimensions) {
        return _super.call(this, price, manufacturer, model, stuck, color, buckle, material, dimensions) || this;
    }
    RegularBelt.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("**Belt Buckle Color is " + this.belt_buckle_color + "<br>");
    };
    RegularBelt.prototype.displayImage = function () {
        var img = document.createElement('img');
        img.src = "items/belt.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return RegularBelt;
}(Belt));
//# sourceMappingURL=Belt.js.map