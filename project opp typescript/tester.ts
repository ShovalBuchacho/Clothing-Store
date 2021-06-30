class tester {

    private _size: number;
    private itemsArray: Array<Item>;
    private numOfTotalItems: number = 20;

    private set size(size: number) {
        if ((size > 0) && (size < 1000)) {
            this._size = size;
        }
    }


    private initTotalItemsArray(): Array<Number> {

        let arrItems = new Array<number>(this.numOfTotalItems);

        for (var i = 0; i < this.numOfTotalItems; i++) {
            arrItems[i] = i + 1;
        }

        return arrItems;
    }

    public test(): void {

        //let Generator: Generator = new Generator();
        let itemArray: Array<Item>;

        //validation on user input
        while (!this._size) {

            this._size = Number(prompt("please enter number of items"));
            if (!this._size) {
                alert("cannot be string and cannot be above 1000");
            }

        }
        this.getItems();
    }
    public getItems(): void {

        //create new random array based on user input (empty for now)
        this.itemsArray = new Array<Item>(this._size);


        //fill array with random items
        if (this._size > 20) {

            for (let i = 0; i < this.itemsArray.length; i++) {

                let randomNum: number = Math.floor(Math.random() * 20) + 1;

                this.itemsArray[i] = Generator.getRandomItem(randomNum);
            }
        }

        else {

            let arrTotalItems = new Array;
            let temp: number;
            arrTotalItems = this.initTotalItemsArray();

            for (let i = 0; i < this.itemsArray.length; i++) {

                let randomNum = Math.floor(Math.random() * (this.numOfTotalItems - i)) + i;
                this.itemsArray[i] = Generator.getRandomItem(arrTotalItems[randomNum]);

                temp = arrTotalItems[randomNum];
                arrTotalItems[randomNum] = arrTotalItems[i];
                arrTotalItems[i] = temp;
            }
        }

        this.printItemsArr();
    }


    public printItemsArr() {

        for (var i = 0; i < this.itemsArray.length; i++) {

            document.write(`<h4>${this.itemsArray[i].brand} </h4> `);

            this.itemsArray[i].displayDetails();

            this.itemsArray[i].getPriceWithoutVat();

            document.write(`<strong>Brand:</strong> ${this.itemsArray[i].brand}<br/>`);

            this.itemsArray[i].displayImage();

            document.write(`<br><br><br><hr>`);

        }

    }
}







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












