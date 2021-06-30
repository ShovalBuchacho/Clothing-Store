class Dimensions {
    private _height: number;
    private _width: number;
    private _length: number;

    set height(num: number) {
        if ((num <= 0) || (num > 50)) {
            throw "height can't be above 50 or below 0"
        }
        else {
            this._height = num;
        }
    }
    set width(num: number) {
        if ((num <= 0) || (num > 50)) {
            throw "width can't be above 50 or below 0"
        }
        else {
            this._width = num;
        }
    }
    set length(num: number) {
        if ((num <= 0) || (num > 50)) {
            throw "length can't be above 50 or below 0"
        }
        else {
            this._length = num;
        }
    }

    get height(): number {
        return this._height;
    }
    get width(): number {
        return this._width;
    }
    get length(): number {
        return this._length;
    }

    constructor(height: number = 2, width: number = 2, length: number = 5) {
        this.height = height;
        this.length = length;
        this.width = width;
    }

}