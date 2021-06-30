var tester = /** @class */ (function () {
    function tester() {
        this.numOfTotalItems = 20;
    }
    Object.defineProperty(tester.prototype, "size", {
        set: function (size) {
            if ((size > 0) && (size < 1000)) {
                this._size = size;
            }
        },
        enumerable: false,
        configurable: true
    });
    tester.prototype.initTotalItemsArray = function () {
        var arrItems = new Array(this.numOfTotalItems);
        for (var i = 0; i < this.numOfTotalItems; i++) {
            arrItems[i] = i + 1;
        }
        return arrItems;
    };
    tester.prototype.test = function () {
        //let Generator: Generator = new Generator();
        var itemArray;
        //validation on user input
        while (!this._size) {
            this._size = Number(prompt("please enter number of items"));
            if (!this._size) {
                alert("cannot be string and cannot be above 1000");
            }
        }
        this.getItems();
    };
    tester.prototype.getItems = function () {
        //create new random array based on user input (empty for now)
        this.itemsArray = new Array(this._size);
        //fill array with random items
        if (this._size > 20) {
            for (var i = 0; i < this.itemsArray.length; i++) {
                var randomNum = Math.floor(Math.random() * 20) + 1;
                this.itemsArray[i] = Generator.getRandomItem(randomNum);
            }
        }
        else {
            var arrTotalItems = new Array;
            var temp = void 0;
            arrTotalItems = this.initTotalItemsArray();
            for (var i = 0; i < this.itemsArray.length; i++) {
                var randomNum = Math.floor(Math.random() * (this.numOfTotalItems - i)) + i;
                this.itemsArray[i] = Generator.getRandomItem(arrTotalItems[randomNum]);
                temp = arrTotalItems[randomNum];
                arrTotalItems[randomNum] = arrTotalItems[i];
                arrTotalItems[i] = temp;
            }
        }
        this.printItemsArr();
    };
    tester.prototype.printItemsArr = function () {
        for (var i = 0; i < this.itemsArray.length; i++) {
            document.write("<h4>" + this.itemsArray[i].brand + " </h4> ");
            this.itemsArray[i].displayDetails();
            this.itemsArray[i].getPriceWithoutVat();
            document.write("<strong>Brand:</strong> " + this.itemsArray[i].brand + "<br/>");
            this.itemsArray[i].displayImage();
            document.write("<br><br><br><hr>");
        }
    };
    return tester;
}());
////create new random array based on user input (empty for now)
//itemArray = new Array<Item>(this._size);
////fill array with random items 
//for(let i = 0; i <itemArray.length; i++) {
//        itemArray[i] = Generator.getRandomItem();
//     document.write(`<h4>${itemArray[i].brand} </h4> `);
//      itemArray[i].displayDetails();
//      itemArray[i].getPriceWithoutVat();
//       document.write(`<strong>Brand:</strong> ${itemArray[i].brand}<br/>`);
//      itemArray[i].displayImage();
//     document.write(`<br><br><br><hr>`);
//}
//# sourceMappingURL=tester.js.map