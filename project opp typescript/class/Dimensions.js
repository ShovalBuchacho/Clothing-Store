var Dimensions = /** @class */ (function () {
    function Dimensions(height, width, length) {
        if (height === void 0) { height = 2; }
        if (width === void 0) { width = 2; }
        if (length === void 0) { length = 5; }
        this.height = height;
        this.length = length;
        this.width = width;
    }
    Object.defineProperty(Dimensions.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (num) {
            if ((num <= 0) || (num > 50)) {
                throw "height can't be above 50 or below 0";
            }
            else {
                this._height = num;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (num) {
            if ((num <= 0) || (num > 50)) {
                throw "width can't be above 50 or below 0";
            }
            else {
                this._width = num;
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Dimensions.prototype, "length", {
        get: function () {
            return this._length;
        },
        set: function (num) {
            if ((num <= 0) || (num > 50)) {
                throw "length can't be above 50 or below 0";
            }
            else {
                this._length = num;
            }
        },
        enumerable: false,
        configurable: true
    });
    return Dimensions;
}());
//# sourceMappingURL=Dimensions.js.map