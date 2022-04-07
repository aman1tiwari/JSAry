var cart = [];
var cart2 = [];
function add() {
  var company = document.getElementById("company").value;
  var model = document.getElementById("model").value;
  var memory = document.getElementById("memory").value;
  var price = document.getElementById("price").value;
  var quant = document.getElementById("quantity").value;

  mytable =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th><th>Action</th><th>Rating</th></tr>";

  var product = {
    Comp: company,
    Mod: model,
    Mem: memory,
    Price: price,
    Quantity: quant,
  };
  cart.push(mytable);
  cart2.push(product);
  cart2.forEach((element) => {
    mytable +=
      "<tr><td>" +
      element.Comp +
      "</td><td>" +
      element.Mod +
      "</td><td>" +
      element.Mem +
      "</td><td>" +
      element.Price +
      "</td><td>" +
      element.Quantity +
      "</td><td>"+
    '<input type="checkbox"/>';
    "</td></tr>";
  });
  mytable += "</table>";
  console.log(mytable);
  document.getElementById("table1").innerHTML = mytable;
  myDD="<select><option>--Select Product--</option>"
  cart2.forEach((element) => {
    myDD+="<option>"+element.Comp+"</option>";
  });
  myDD+="</select>"
  document.getElementById('bill').innerHTML=myDD;

  myDD2="<select><option>--Select Product--</option>"
  cart2.forEach((element) => {
    myDD2+="<option>"+element.Comp+"</option>";
  });
  myDD2+="</select>"
  document.getElementById('Item').innerHTML=myDD2;

  myDD3="<select><option>--Select Product--</option>"
  cart2.forEach((element) => {
    myDD3+="<option>"+element.Comp+"</option>";
  });
  myDD3+="</select>"
  document.getElementById('sel').innerHTML=myDD3;
 
}
function display() {
  mytable =
    "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th><th>Quantity</th><th>Action</th><th>Rating</th></tr>";

  cart2.forEach((element) => {
    mytable +=
      "<tr><td>" +
      element.Comp +
      "</td><td>" +
      element.Mod +
      "</td><td>" +
      element.Mem +
      "</td><td>" +
      element.Price +
      "</td><td>" +
      element.Quantity +
      "</td><td>";+
    '<input type="checkbox"/>' 
    "</td></tr>";
  });
  mytable += "</table>";
  console.log(mytable);
  document.getElementById("table1").innerHTML = mytable;
}

function sort() {
  var st = document.getElementById("sort").value;
  var sel = document.getElementById("sortby").value;
  console.log("value of st " + st);
  console.log("value of sel " + sel);
  if (sel == "company") {
    if (st == "ascending") {
      cart2.sort((a, b) => {
        if (a.Comp < b.Comp) {
          return -1;
        }
        if (a.Comp > b.Comp) {
          return 1;
        }
        return 0;
      });
    } else if (st == "descending") {
      cart2.sort((a, b) => {
        if (a.Comp > b.Comp) {
          return -1;
        }
        if (a.Comp < b.Comp) {
          return 1;
        }
        return 0;
      });
    }
  } else if (sel == "model") {
    if (st == "ascending") {
      cart2.sort((a, b) => {
        if (a.Mod < b.Mod) {
          return -1;
        }
        if (a.Mod > b.Mod) {
          return 1;
        }
        return 0;
      });
    } else if (st == "descending") {
      cart2.sort((a, b) => {
        if (a.Mod > b.Mod) {
          return -1;
        }
        if (a.Mod < b.Mod) {
          return 1;
        }
        return 0;
      });
    }
  } else if (sel == "mem") {
    if (st == "ascending") {
      cart2.sort((a, b) => a.Mem - b.Mem);
    } else if (st == "descending") {
      cart2.sort((a, b) => b.Mem - a.Mem);
    }
  } else if (sel == "price") {
    if (st == "ascending") {
      cart2.sort((a, b) => a.Price - b.Price);
    } else if (st == "descending") {
      cart2.sort((a, b) => b.Price - a.Price);
    }
  }

  display();
}

var invoice = [];
function add_cart() {
  var des = document.getElementById("bill").value;
  var quanti = document.getElementById("quantityy").value;
  var am = (document.getElementById("price").value) * (quanti);

  table2 =
    "<table><tr><th>Bill</th><tr><th>Description</th><th>Quantity</th><th>Amount(Rs)</th></tr>";
  var bill = {
    Description: des,
    Quantity: quanti,
    Amount: am,
  };
  invoice.push(bill);

  invoice.forEach((element) => {
    table2 +=
      "<tr><td>" +
      element.Description +
      "</td><td>" +
      element.Quantity +
      "</td><td>" +
      element.Amount +
      "</td><td>" +
      "  " +
      "</td></tr>";
  });
  table2 += "</table>";
  document.getElementById("table2").innerHTML = table2;
}

function rate(){
  var val=document.getElementById("rates").value;
  
}

// function updateItems(){
//   var Index=document.getElementById("Item").value;
//   var NewQuantity=document.getElementById("new").value;
//   var data=cart2[Index];
//   console.log(cart2[0].Quantity);
//   // forEach Loop
//   data.Quantity=NewQuantity;

//   display();
// }

