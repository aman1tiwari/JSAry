var cart=[];
// function ddlselect(){
//     var d=document.getElementById("dselect");
//     var displaytext=d.options[d.selectedIndex].text;
//     document.getElementById("txtvalue").value=displaytext;
// }
mytable= "<table><tr><th>Company</th><th>Model</th><th>Memory(GB)</th><th>Price(Rs)</th></tr><tr><td>Samsung</td><td>Galaxy</td><td>64</td><td>15000</td></tr><tr><td>Nokia</td><td>S730</td><td>128</td><td>22000</td></tr><tr><td>Xiomi</td><td>Note</td><td>32</td><td>12000</td></tr><tr><td>Motorola</td><td>G10</td><td>32</td><td>15000</td></tr><tr><td>Apple</td><td>S12</td><td>64</td><td>25000</td></tr></table>"

cart.push(mytable)
document.getElementById("table").innerHTML=mytable;