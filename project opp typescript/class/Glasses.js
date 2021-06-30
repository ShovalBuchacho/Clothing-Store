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
var Glasses = /** @class */ (function (_super) {
    __extends(Glasses, _super);
    function Glasses(price, manuf, model, stuck, frameColor) {
        var _this = _super.call(this, price, manuf, model, stuck) || this;
        _this.frame_color = frameColor;
        return _this;
    }
    Object.defineProperty(Glasses.prototype, "frame_color", {
        get: function () {
            return this._frame_color;
        },
        set: function (color) {
            this._frame_color = color;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Glasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        if (this.frame_color == "White") {
            document.write("Color:" + this.frame_color + "<br/>");
        }
        else
            document.write("<strong>The frame color of the glasses:</strong> <font color=" + this.frame_color + ">" + this.frame_color + "</font><br/>");
    };
    return Glasses;
}(Item));
var Sun_Glasses = /** @class */ (function (_super) {
    __extends(Sun_Glasses, _super);
    function Sun_Glasses(price, manufacturer, model, stuck, frameColor, glassColor) {
        var _this = _super.call(this, price, manufacturer, model, stuck, frameColor) || this;
        _this.glass_color = glassColor;
        return _this;
    }
    Object.defineProperty(Sun_Glasses.prototype, "glass_color", {
        get: function () {
            return this._glass_color;
        },
        set: function (color) {
            this._glass_color = color;
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Sun_Glasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        if (this.glass_color == "White") {
            document.write("Color:" + this.glass_color + "<br/>");
        }
        else
            document.write("<strong>The glass color of the glasses:</strong><font color=" + this.glass_color + ">" + this.glass_color + "</font><br/>");
    };
    /** A function that calls the image */
    Sun_Glasses.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/sunglasses.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Sun_Glasses;
}(Glasses));
var Reading_glasses = /** @class */ (function (_super) {
    __extends(Reading_glasses, _super);
    function Reading_glasses(price, manufacturer, model, stuck, readds, frameColor) {
        var _this = _super.call(this, price, manufacturer, model, stuck, frameColor) || this;
        _this.rec_distance = readds;
        return _this;
    }
    Object.defineProperty(Reading_glasses.prototype, "rec_distance", {
        get: function () {
            return this._rec_distance;
        },
        set: function (rec) {
            if ((rec <= 0) || (rec > 50)) {
                throw "distance is above 50 or negative!";
            }
            else {
                this._rec_distance = rec;
            }
        },
        enumerable: false,
        configurable: true
    });
    /**A call to a function that displays the class details */
    Reading_glasses.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        document.write("<strong>Sungalsses reading distance is:</strong> " + this.rec_distance + " <br>");
    };
    /** A function that calls the image */
    Reading_glasses.prototype.displayImage = function () {
        document.write("<br>");
        var img = document.createElement('img');
        img.src = "items/readingglasses.jpg";
        document.body.appendChild(img);
        document.write("<br>");
    };
    return Reading_glasses;
}(Glasses));
//# sourceMappingURL=Glasses.js.map