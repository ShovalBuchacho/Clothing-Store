var Generator = /** @class */ (function () {
    function Generator() {
    }
    /** Creating a random manufacturer */
    Generator.create_Manuf = function () {
        var manuf = ["Tomi Hilfiger ", "Mania Jens", "Castro", "Renuar", "Fox"];
        return (manuf[Math.floor(Math.random() * manuf.length)]);
    };
    /** Create a random model */
    Generator.create_Model = function () {
        var model = ["Fine", "Elegant", "Sumer", "Spring", "Jack", "Tom", "Rami", "JB"];
        return (model[Math.floor(Math.random() * model.length)]);
    };
    /**Creating a Random Price */
    Generator.create_Price = function () {
        var num;
        num = Math.floor(Math.random() * 600) + 1;
        return num;
    };
    /** Create a random color */
    Generator.create_Color = function () {
        var colors = ["Green", "Blue", "purple", "Red", "Black", "White", "Orange", "Brown"];
        return (colors[Math.floor(Math.random() * colors.length)]);
    };
    /** Create a random size */
    Generator.create_Size = function () {
        var num;
        num = Math.floor(Math.random() * 48) + 1;
        return num;
    };
    /**Create a random quantity left in stock */
    Generator.create_Stuck = function () {
        var num1;
        num1 = Math.floor(Math.random() * 100) + 1;
        return num1;
    };
    /**Random length for shirt ,pants and dress*/
    Generator.create_Length = function () {
        var num;
        num = Math.floor(Math.random() * 2.5) + 0.1;
        return num;
    };
    /**Random manufacturing state for sport shoes, elegant shoes, heels and comfort shoes*/
    Generator.create_MadeIn = function () {
        var countries = ["China", "France", "Belgium", "Israel", "Italy", "USA"];
        return (countries[Math.floor(Math.random() * countries.length)]);
    };
    /**Create a random caption for a t-shirt*/
    Generator.create_Print = function () {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 10; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    };
    /** Create a random scope for a long dress, evening dress and skirt*/
    Generator.create_Scope = function () {
        var num;
        num = Math.floor(Math.random() * 20) + 1;
        return num;
    };
    /** Creating a random manufacturer for Sports Shoes/Shorts */
    Generator.create_Manuf_Sport = function () {
        var manuf = ["Adidas", "Nike", "Under Armour", "Diadora", "Fila"];
        return (manuf[Math.floor(Math.random() * manuf.length)]);
    };
    /** Create a random model for Sports Shoes/Shorts */
    Generator.create_Model_Sport = function () {
        var model = ["Running", "Football", "Basketball", "Extreme", "Gym"];
        return (model[Math.floor(Math.random() * model.length)]);
    };
    /** Manufacturing date for sport shoes */
    Generator.Create_Date = function () {
        var start;
        var end;
        start = new Date(2012, 0, 1);
        end = new Date();
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    };
    /** Creating a random manufacturer for elegant shoe */
    Generator.create_Manuf_Elegant_shoe = function () {
        var manuf = ["Armani", "Gucci", "ALDO", "Dolce & Gabbana", "Michael Kors"];
        return (manuf[Math.floor(Math.random() * manuf.length)]);
    };
    /** Create a random model for elegant shoe*/
    Generator.create_Model_Elegant_shoe = function () {
        var model = ["Evening", "Fashionable", "Elegance"];
        return (model[Math.floor(Math.random() * model.length)]);
    };
    /** Number of random buttons for Fabric pants and Buttoned Shirt */
    Generator.create_Button = function () {
        var num;
        num = Math.floor(Math.random() * 10) + 1;
        return num;
    };
    /**Creating the fabric type at random fot evening dress ,short,and women shirt*/
    Generator.create_Type_Of_Cloth = function () {
        var cloths = ["Zamsh", "Cotton", "Silk", "Kashmir", "Thin Cotton", "Lace"];
        return (cloths[Math.floor(Math.random() * cloths.length)]);
    };
    /**Creates a random function that returns a boolean answer*/
    Generator.is_True_Or_False = function () {
        var num;
        num = Math.floor(Math.random() * 2) + 0;
        if (num == 1) {
            return true;
        }
        else {
            return false;
        }
    };
    /**Thickness of the raincoat and jacket */
    Generator.Create_Jacket_Thickness = function () {
        var num;
        num = Math.floor(Math.random() * 10) + 1;
        return num;
    };
    /** Creating multiple random pockets for the jacket */
    Generator.Create_Num_Of_Pockets_Jacket = function () {
        var num;
        num = Math.floor(Math.random() * 5) + 1;
        return num;
    };
    //create hat diameter
    Generator.CreateDiameter = function () {
        var num;
        num = Math.floor(Math.random() * 15) + 1;
        return num;
    };
    //Brimmed Hat height
    Generator.CreateHeightBrimmed = function () {
        var num;
        num = Math.floor(Math.random() * 20) + 1;
        return num;
    };
    //create dimensions for belt
    Generator.CreateDimensions = function () {
        var dim;
        var height;
        var width;
        var length;
        height = Math.floor(Math.random() * 5) + 1;
        width = Math.floor(Math.random() * 5) + 1;
        length = Math.floor(Math.random() * 10) + 1;
        dim = new Dimensions(height, width, length);
        return dim;
    };
    /** Creating a random manufacturer for sunglasses and reading glasses  */
    Generator.create_Manuf_Glasses = function () {
        var manuf = ["Carolina lemke ", "Erroca", "Rayban", "Michael Kors", "Prada"];
        return (manuf[Math.floor(Math.random() * manuf.length)]);
    };
    /**Creating a random model for sunglasses and reading glasses*/
    Generator.create_Model_Glasses = function () {
        var model = ["Elegant", "SUMER", "Sport"];
        return (model[Math.floor(Math.random() * model.length)]);
    };
    /** Create a random frame color for sunglasses and reading glasses */
    Generator.frame_color = function () {
        var colors = ["Green", "Blue", "purple", "Red", "Black", "White", "Orange", "Brown"];
        return (colors[Math.floor(Math.random() * colors.length)]);
    };
    /**create reading distance for reading glasses */
    Generator.create_Distance = function () {
        var dis;
        dis = Math.floor(Math.random() * 10) + 1;
        return dis;
    };
    Generator.getRandomItem = function (num) {
        switch (num) {
            //T-shirt
            case 1: {
                return new T_shirt(this.create_Print(), this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Length(), this.create_Size(), this.create_Color());
            }
            //Buttoned Shirt
            case 2: {
                return new Buttoned_Shirt(this.create_Button(), this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Length(), this.create_Size(), this.create_Color());
            }
            //womenshirt
            case 3: {
                return new Women_Shirt(this.create_Type_Of_Cloth(), this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Length(), this.create_Size(), this.create_Color());
            }
            //jeans
            case 4: {
                return new Jeans(this.is_True_Or_False(), this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Length(), this.create_Size(), this.create_Color());
            }
            //Fabric pants 
            case 5: {
                return new Fabric_pants(this.create_Button(), this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Length(), this.create_Size(), this.create_Color());
            }
            //short 
            case 6: {
                return new Shorts(this.create_Type_Of_Cloth(), this.create_Price(), this.create_Manuf_Sport(), this.create_Model_Sport(), this.create_Stuck(), this.create_Length(), this.create_Size(), this.create_Color());
            }
            //skirt
            case 7: {
                return new Skirt(this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.create_Scope());
            }
            // long dress 
            case 8: {
                return new Long_Dress(this.create_Length(), this.is_True_Or_False(), this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.create_Scope());
            }
            //Evening dress 
            case 9: {
                return new Evening_dress(this.create_Type_Of_Cloth(), this.create_Length(), this.is_True_Or_False(), this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.create_Scope());
            }
            //elegant shoes
            case 10: {
                return new Elegant_Shoes(this.create_Price(), this.create_Manuf_Elegant_shoe(), this.create_Model_Elegant_shoe(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.create_MadeIn(), this.is_True_Or_False());
            }
            //sport shoes  
            case 11: {
                return new Sport_shoes(this.create_Price(), this.create_Manuf_Sport(), this.create_Model_Sport(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.create_MadeIn(), this.is_True_Or_False(), this.Create_Date());
            }
            //comfort Shoes
            case 12: {
                return new Comfort_Shoes(this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.create_MadeIn(), this.is_True_Or_False(), this.is_True_Or_False());
            }
            //High heels shoes
            case 13: {
                return new Heels_shoes(this.is_True_Or_False(), this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.create_MadeIn());
            }
            //jacket
            case 14: {
                return new Regular_Jacket(this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.Create_Jacket_Thickness(), this.Create_Num_Of_Pockets_Jacket());
            }
            //coat 
            case 15: {
                return new Coat(this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.Create_Jacket_Thickness(), this.is_True_Or_False());
            }
            //kasket hat
            case 16: {
                return new Kasket(this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.CreateDiameter(), this.is_True_Or_False());
            }
            //Brimmed hat
            case 17: {
                return new Brimmed_Hat(this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Size(), this.create_Color(), this.CreateDiameter(), this.CreateHeightBrimmed());
            }
            //belt
            case 18: {
                return new Regular_Belt(this.create_Price(), this.create_Manuf(), this.create_Model(), this.create_Stuck(), this.create_Color(), this.create_Color(), this.CreateDimensions());
            }
            //sunglasses  
            case 19: {
                return new Sun_Glasses(this.create_Price(), this.create_Manuf_Glasses(), this.create_Model_Glasses(), this.create_Stuck(), this.create_Color(), this.frame_color());
            }
            //reading glasses
            case 20: {
                return new Reading_glasses(this.create_Price(), this.create_Manuf_Glasses(), this.create_Model_Glasses(), this.create_Stuck(), this.create_Distance(), this.frame_color());
            }
        }
    };
    return Generator;
}());
//# sourceMappingURL=generator.js.map