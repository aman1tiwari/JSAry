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
      "</td><td>"
      "<input type='checkbox'/>"
      "</td></tr>";
  });
  mytable += "</table>";
  console.log(mytable);
  document.getElementById("table1").innerHTML = mytable;
}

// function compare(a, b) {
//     cart2.sort(com);
//     cart2.forEach((element) => {
//         console.log("Name of the company" + element.Comp);
//     });
    
// }
// function com(a, b) {
//     if (a.Comp < b.Comp) {
//         return -1;
//     }
//     if (a.Comp > b.Comp) {
//         return 1;
//     }
//     return 0;
// }
// cart2.sort(compare)
//   tab=document.getElementById("table1") ;

//   function compare1(a, b) {
//     cart2.sort(mod);
//     cart2.forEach((element) => {
//         console.log("Name of the company" + element.Mod);
//     });
    
// }
// function mod(a, b) {
//     if (a.Mod < b.Mod) {
//         return -1;
//     }
//     if (a.Mod > b.Mod) {
//         return 1;
//     }
//     return 0;
// }
// cart2.sort(mod)
// tab1=document.getElementById("table1") ;


var invoice = [];
function add_cart() {
  var des = document.getElementById("company").value;
  var quanti = document.getElementById("quantity").value;
  var am = document.getElementById("price").value;

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
  table2 += "<tr><th>Total</th></tr></table>";
  document.getElementById("table2").innerHTML = table2;
}

// function compare( a, b ) {
//     var cmp=document.getElementById("company").value;
//     if ( a.cmp < b.cmp ){
//       return -1;
//     }
//     if ( a.cmp > b.cmp ){
//       return 1;
//     }
//     return 0;
//   }

//   cart.sort( compare );
//   document.getElementById("table").value;

// function ddlselect(){
//     var d=document.getElementById("dselect");
//     var displaytext=d.options[d.selectedIndex].text;
//     document.getElementById("txtvalue").value=displaytext;
//   