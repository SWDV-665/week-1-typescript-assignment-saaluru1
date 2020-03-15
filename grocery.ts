class grocery { 
    //fields 
    itemId: number;
    name:string; 
    quantity: number;
    price:number;

    constructor(itemId: number, name:string, quantity: number,price:number){
        this.itemId = itemId;
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
 }
 let groceries: Array<grocery> = [new grocery(1,'milk',10,10),
 new grocery(1,'eggs',40,20),
 new grocery(1,'bread',1,4),
 new grocery(1,'water',10,6)]

 var len = groceries.length;
 var i: number;
 var text = "<ul>";
 for (i = 0; i < len; i++) {
   text += "<li>" +   groceries[i].itemId + " " + groceries[i].name + " " + groceries[i].quantity + " " + groceries[i].price + "</li>";
 }
 text += "</ul>";
 document.getElementById("gList").innerHTML = text;
