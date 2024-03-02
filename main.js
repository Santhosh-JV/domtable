function tr(){
    var ele = document.createElement("tr");
    return ele;
}
function th(tn,at,av,c){
    var ele = document.createElement(tn);
    ele.setAttribute(at,av);
    ele.innerHTML = c;
    return ele;

}
function td(tn,co){
    var ele = document.createElement(tn);
    ele.innerHTML=co;
    return ele;
}

var table = document.createElement("table");
table.className = "table";
var thead = document.createElement("thead");
thead.className = "thead-dark"
var tr1 = tr();
var th1 = th("th","scope","col","#");
var th2 = th("th","scope","col","First");
var th3 = th("th","scope","col","Last");
var th4 = th("th","scope","col","Handle");

tr1.append(th1,th2,th3,th4);
thead.append(tr1);

var tbody = document.createElement("tbody");
var tr2 = tr();
var th5 = th("th","scope","row","1");
var td1 = td("td","Mark");
var td2 = td("td","Otto");
var td3 = td("td","@mdo");
tr2.append(th5,td1,td2,td3);

var tr3 = tr();
var th6 = th("th","scope","row","2");
var td4 = td("td","Jacob");
var td5 = td("td","Thornton");
var td6 = td("td","@fat");
tr3.append(th6,td4,td5,td6);

var tr4 = tr();
var th7 = th("th","scope","row","3");
var td7 = td("td","Larry");
var td8 = td("td","the bird");
var td9 = td("td","@twitter");
tr4.append(th7,td7,td8,td9);


tbody.append(tr2,tr3,tr4);
table.append(thead,tbody);

document.body.append(table);
