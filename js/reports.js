var Jan=0, Feb=0, Mar=0, Apr=0, May=0, Jun=0, Jul=0, Aug=0, Sep=0, Oct=0, Nov=0, Dec=0;
  // get acc data
var account_key="account";
var items_key="items";
var suppliers_key="suppliers";
var tutorial_key="tutorial";
var originalAccount_key="original account";
var originalItem_key="original item";
var originalSupplier_key="original supplier";
var originalItemAcc_key="original item account";
var originalItemName_key="original item name";
var originalAccName_key="original account name";
var originalSupName_key="original supplier name";
var supplierTotal_key="supplier total";
var currentAccounts_key="current accounts";
var currentItems_key="current items";
var totalaccounts_key="total accounts";
var totalitems_key="total items";
var transactions_key="transactions";
var rangeTotal_key="range total";
  localStorage.setItem(rangeTotal_key, parseInt(0));
var dbacc = localStorage.getItem(account_key);
var dbit = localStorage.getItem(items_key);
var dbsup = localStorage.getItem(suppliers_key);
// console.log("itit"+dbacc);
// console.log("itit"+dbit);
// console.log("itit"+dbsup);
db.collection(dbacc).onSnapshot(snapshot=>{
window.localStorage.setItem(currentAccounts_key, snapshot.docs);
setupDropdownacccha(snapshot.docs);
// setupDropdownitcrt(snapshot.docs);
})
db.collection(dbit).onSnapshot(snapshot=>{
window.localStorage.setItem(currentItems_key, snapshot.docs);
setupDropdownitcha(snapshot.docs);
})
// localStorage.setItem(tutorial_key, 1);
// table accounts

localStorage.setItem(totalaccounts_key, 0);
localStorage.setItem(totalitems_key, 0);
const tableList=document.querySelector('.tablo');
const setuptableaccounts =(data)=>{
  let html=`<tr>`;
  let htmlEnd=`</tr>`;
  var list='';
  var totalholder;
  data.forEach(doc=>{
    const drops=doc.data();
jQuery.each(drops, function (key, value) {
if(key=="total"){
totalholder=addCommas(value);
var very=localStorage.getItem(totalaccounts_key);
very=parseInt(very)+parseInt(value);
localStorage.setItem(totalaccounts_key, very);
}
    })
    const li=`
    <td>${doc.id}</td><td>${totalholder}</td></tr>
    `;
    html+=li;
  });
  var very=addCommas(localStorage.getItem(totalaccounts_key));
  const htend=`
  <td><b>TOTAL</b></td><td><b>${very}</b></td></tr>
  `;
  html+=htend;
  // html+=htmlEnd;
tableList.innerHTML=html;
// console.log(html);
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
}
// table ITEMS

const tableListit=document.querySelector('.tabloit');
const setuptableitems =(data)=>{
  let html=`<tr>`;
  let htmlEnd=`</tr>`;
  var list='';
  var totalholder;
  var accholder;
  data.forEach(doc=>{
    const drops=doc.data();
jQuery.each(drops, function (key, value) {
if(key=="total"){
totalholder=addCommas(value);
var very=localStorage.getItem(totalitems_key);
very=parseInt(very)+parseInt(value);
localStorage.setItem(totalitems_key, very);
}else if (key=="account") {
accholder=value;
}
    })
    const li=`
    <td>${doc.id}   (${accholder})</td><td>${totalholder}</td></tr>
    `;
    html+=li;
  });
  var very=addCommas(localStorage.getItem(totalitems_key));
  const htend=`
  <td><b>TOTAL</b></td><td><b>${very}</b></td></tr>
  `;
  html+=htend;
tableListit.innerHTML=html;
// console.log(html);
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
}
/////////////////////////////////////////////////////////////////////
var bigbigarray=new Array();
  // Retrieve
  var accs = localStorage.getItem(account_key);
// get acc data
db.collection(accs).onSnapshot(snapshot=>{
  setuptableaccounts(snapshot.docs);
  bigbigarray=setupAccounts(snapshot.docs);

  // WAIT FOR THE PROMISE
  const checkIfDonede = () => {
    bigbigarray.then(ok => {
      bigbigarray=ok;
      var very=localStorage.getItem(totalaccounts_key);
      very=addCommas(very);
      document.getElementById("expencehead").innerHTML = "TOTAL EXPENDITURE: "+very;
      console.log("accounts "+very);
      })
      .catch(err => {
        console.error(error)
      })

  }
  checkIfDonede();
        // Load Charts and the corechart and barchart packages.
        google.charts.load('current', {'packages':['corechart']});

        // Draw the pie chart and bar chart when Charts is loaded.
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
          // console.log("bigisbig",bigbigarray);
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'team');
          data.addColumn('number', 'caps');
          data.addRows(
            bigbigarray
          //   [
          //   ['arsenal', 5],
          //   ['manu', 3],
          //   ['man city', 2],
          //   ['chelsea', 1],
          //   ['liverpool', 2]
          // ]
        );

        var array1 = new Array(1, 2, 3);

        console.log(array1); // [1, 2, 3]
        console.log(array1.length); // 3

          var piechart_options = {title:'Pie Chart: EXPENDITURE PER ACCOUNT',
                         width:400,
                         height:300};
          var piechart = new google.visualization.PieChart(document.getElementById('piechart_div'));
          piechart.draw(data, piechart_options);

          var barchart_options = {title:'Barchart: EXPENDITURE PER ACCOUNT',
          width:400,
          height:300,
                         legend: 'none'};
          var barchart = new google.visualization.BarChart(document.getElementById('barchart_div'));
          barchart.draw(data, barchart_options);
        }
})

async function setupAccounts(data){
  var arraybig=new Array();
var fruits = ["Banana", "Orange", "Apple", "Mango"];
  let html='';
  var vary,y=-1;
  var somesing=await data.forEach(doc=>{
    var arraysmall=new Array(doc.id);
    // arraysmall=[doc.id];
    const acc=doc.data();
    jQuery.each(doc.data(), function (key, value) {
    if(key=="total"){
    vary=parseInt(value);
    }
                        })
    arraysmall[1]=vary;
        y++;
        // console.log(y);
    // arraysmall.push(vary);
    // arraybig.push(arraysmall);
    arraybig[y]=arraysmall;

    // console.log(4444,arraysmall);
  });
  var h=fruits.toString();
  // console.log(5555,fruits);
  return arraybig;
}
/////////////////items
var bigbigarrayit=new Array();
  // Retrieve
  var its = localStorage.getItem(items_key);
// get acc data
db.collection(its).onSnapshot(snapshot=>{
  setuptableitems(snapshot.docs);
  bigbigarrayit=setupItems(snapshot.docs);

  // WAIT FOR THE PROMISE
  const checkIfDonedeit = () => {
    bigbigarrayit.then(ok => {
      bigbigarrayit=ok;
      var very=localStorage.getItem(totalitems_key);
      // document.getElementById("expencehead").innerHTML = "TOTAL EXPENDITURE: "+very;
      console.log("items "+very);
      })
      .catch(err => {
        console.error(error)
      })

  }
  checkIfDonedeit();
        // Load Charts and the corechart and barchart packages.
        google.charts.load('current', {'packages':['corechart']});

        // Draw the pie chart and bar chart when Charts is loaded.
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {
          // console.log("bigisbig",bigbigarrayit);
          var data = new google.visualization.DataTable();
          data.addColumn('string', 'team');
          data.addColumn('number', 'caps');
          data.addRows(
            bigbigarrayit
          //   [
          //   ['arsenal', 5],
          //   ['manu', 3],
          //   ['man city', 2],
          //   ['chelsea', 1],
          //   ['liverpool', 2]
          // ]
        );

          var piechart_options = {title:'Pie Chart: EXPENDITURE ON ITEMS',
                         width:400,
                         height:300};
          var piechart = new google.visualization.PieChart(document.getElementById('piechart_divit'));
          piechart.draw(data, piechart_options);

          var barchart_options = {title:'Barchart: EXPENDITURE ON ITEMS',
                         width:400,
                         height:300,
                         legend: 'none'};
          var barchart = new google.visualization.BarChart(document.getElementById('barchart_divit'));
          barchart.draw(data, barchart_options);
        }
})

async function setupItems(data){
  var arraybig=new Array();
var fruits = ["Banana", "Orange", "Apple", "Mango"];
  let html='';
  var vary,y=-1;
  var somesing=await data.forEach(doc=>{
    var arraysmall=new Array(doc.id);
    // arraysmall=[doc.id];
    const acc=doc.data();
    jQuery.each(doc.data(), function (key, value) {
    if(key=="total"){
    vary=parseInt(value);
    }
                        })
    arraysmall[1]=vary;
        y++;
        // console.log(y);
    // arraysmall.push(vary);
    // arraybig.push(arraysmall);
    arraybig[y]=arraysmall;

    // console.log(4444,arraysmall);
  });
  var h=fruits.toString();
  // console.log(5555,fruits);
  return arraybig;
}
// var instance = M.Tabs.init(el, options);

  // Or with jQuery

  $(document).ready(function(){
    $('.tabs').tabs();
  });
// z

var tour = new Tour({
  steps: [
  {
    element: "#tabs-swipe-demo",
    title: "CONGRATULATIONS",
    content: "You are now fully equiped, Good luck"
  }
],
  backdrop: false,
  storage: false,
  template: `<div class='popover tour black-text'>
    <div class='arrow'></div>
    <h2 class='popover-title'></h2>
    <div class='popover-content'></div>
    <div class='popover-navigation'>
        <button class='btn btn-default' data-role='prev'>« Prev</button>
        <span data-role='separator'>|</span>
    <button class='btn btn-default' data-role='end'>End tour</button>
    </div>
  </div>`
});

tour.init();
var tut = localStorage.getItem(tutorial_key);
if (tut==1) {
tour.start();
          localStorage.setItem(tutorial_key, 0);
}
localStorage.setItem("login", "1");

function addCommas(nStr) {
  nStr += '';
  var comma = /,/g;
  nStr = nStr.replace(comma,'');
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
//################/////////////////////////////

// dropdown
const dropdownproacc=document.querySelector('.accchadrp');

const setupDropdownacccha =(data)=>{
  let html=`
    <select class="team wonder " id="dropitcrt">
    <option>Choose Item's Account</option>`;
  let htmlEnd=`
</select>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    const li=`
    <option>${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
dropdownproacc.innerHTML=html;
// console.log(html);
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
}
////
// dropdown
const dropdownproit=document.querySelector('.itchadrp');

const setupDropdownitcha =(data)=>{
  let html=`
    <select class="team wonder " id="dropitcrt">
    <option>Choose Item's Account</option>`;
  let htmlEnd=`
</select>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    const li=`
    <option>${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
dropdownproit.innerHTML=html;
// console.log(html);
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
}

// datepicker
var currYear = (new Date()).getFullYear();
var today = new Date();
var datetoday = (today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString();
console.log("date "+datetoday);
$(document).ready(function() {
  $(".datepicker").datepicker({
    defaultDate: datetoday,
    setDefaultDate: true,
    format: "mm/dd/yyyy",
    autoClose:true
  }).datepicker("setDate", new Date());
});
///////////////////////////////////

  var fdate="06/05/2020";
  var tdate="09/25/2020";
    monthler(fdate,tdate);
    function monthler(frodate,todate){
      setupMonths();
      var frodateNxt=frodate;
      var froma=whatMonth(frodate);
      // var fromaNxt=whatMonth(frodate);
      var toma=whatMonth(todate);
      for (fromaNxt=froma; fromaNxt <= toma; fromaNxt++) {
      if (fromaNxt==toma) {
        ///same month
        // i=toma;
          var whichMonthIsThis=whichMonth(parseInt(fromaNxt));
        console.log("same same same "+fromaNxt);
      console.log("same same same "+whichMonthIsThis);
        var collar = localStorage.getItem(transactions_key);
        console.log("collar "+collar);
        console.log(frodateNxt+" collar "+todate);
        frodateNxt=minimizeDays(frodateNxt);
        console.log(frodateNxt+" collar "+todate);
            var citiesRef = db.collection(collar)
            .where("date", ">=", frodateNxt)
            .where("date", "<=", todate);
            citiesRef.get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
            var dropss=doc.id;
            // console.log("emmmmmmm "+dropss);
            jQuery.each(doc.data(), function (key, value) {
                      if(key=="amount"){
                      switch (whichMonthIsThis) {
                  case "Jan":
                    Jan = Jan+value;
                    localStorage.setItem("Jan", Jan);
                    console.log("!!!!Jan: "+Jan);
                    break;
                  case "Feb":
                    Feb = Feb+value;
                    localStorage.setItem("Feb", Feb);
                    console.log("!!!!!Feb: "+Feb);
                    break;
                  case "Mar":
                    Mar = Mar+value;
                    localStorage.setItem("Mar", Mar);
                    console.log("!!!!!Mar: "+Mar);
                    break;
                  case "Apr":
                    Apr = Apr+value;
                    localStorage.setItem("Apr", Apr);
                    console.log("!!!!!Apr: "+Apr);
                    break;
                  case "May":
                    May = May+value;
                    localStorage.setItem("May", May);
                    console.log("!!!!!May: "+May);
                    break;
                  case "Jun":
                    Jun = Jun+value;
                    localStorage.setItem("Jun", Jun);
                    console.log("!!!!!Jun: "+Jun);
                    break;
                case "Jul":
                  Jul = Jul+value;
                  localStorage.setItem("Jul", Jul);
                  console.log("!!!!!Jul: "+Jul);
                  break;
                case "Aug":
                  Aug = Aug+value;
                  localStorage.setItem("Aug", Aug);
                  console.log("!!!!!Aug: "+Aug);
                  break;
                case "Sep":
                  Sep = Sep+value;
                  localStorage.setItem("Sep", Sep);
                  console.log("!!!!!sep: "+Sep);
                  break;
                case "Oct":
                  Oct = Oct+value;
                  localStorage.setItem("Oct", Oct);
                  console.log("!!!!!oct: "+Oct);
                  break;
                case "Nov":
                  Nov = Nov+value;
                  localStorage.setItem("Nov", Nov);
                  console.log("!!!!!Nov: "+Nov);
                  break;
                case "Dec":
                  Dec = Dec+value;
                  localStorage.setItem("Dec", Dec);
                  console.log("!!!!!Dec: "+Dec);
                  break;
                }
                      var colder = localStorage.getItem(rangeTotal_key);
                      colder=parseInt(colder)+parseInt(value)
                        localStorage.setItem(rangeTotal_key, colder);
                        var monthSave = localStorage.getItem(whichMonthIsThis);
                        var monthTotal=parseInt(monthSave)+parseInt(value)
                        localStorage.setItem(whichMonthIsThis, monthTotal);
                        // `${sdfd}`
                          // Store
                      localStorage.setItem(whichMonthIsThis, colder);
          // echoMonths();
                      }
                    // var statusso = localStorage.getItem(whichMonthIsThis);
                    // console.log(whichMonthIsThis+" save save save "+statusso);

            })
          // var statusso = localStorage.getItem(whichMonthIsThis);
          // console.log(whichMonthIsThis+" save save save "+statusso);
            });
            }).catch(error => {
            // document.getElementById("progbarlog").style.visibility="hidden";
            console.error('error', error);
            });
            console.log("Jan "+Jan+"Feb "+Feb+"Mar"+Mar+"Apr "+Apr+"May "+May+"Jun "+Jun+"Jul"+Jul+"Aug "+Aug+"Sep "+Sep+"Oct "+Oct+"Nov"+Nov+"Dec "+Dec);
      }else {
        var whichMonthIsThis=whichMonth(parseInt(fromaNxt));
        console.log("diff diff diff"+whichMonthIsThis);
        if (fromaNxt==froma) {//range of beginning month
          var maxDate=maximiseDays(frodateNxt);
          var miniDate=frodate;
          var whichMonthIsThis=whichMonth(whatMonth(miniDate));
          console.log(miniDate+" ====++++==>1111 "+maxDate);
            var collar = localStorage.getItem(transactions_key);
            // console.log("collar "+collar);
            // console.log("collar "+daterfrom);
                var citiesRef = db.collection(collar)
                .where("date", ">=", miniDate).where("date", "<=", maxDate);
                citiesRef.get().then(function(querySnapshot) {
                    querySnapshot.forEach(function(doc) {
                var dropss=doc.id;
                // console.log("emmmmmmm "+dropss);
                jQuery.each(doc.data(), function (key, value) {
                          if(key=="amount"){
                          switch (whichMonthIsThis) {
                      case "Jan":
                        Jan = Jan+value;
                        localStorage.setItem("Jan", Jan);
                        console.log("!!!!Jan: "+Jan);
                        break;
                      case "Feb":
                        Feb = Feb+value;
                        localStorage.setItem("Feb", Feb);
                        console.log("!!!!!Feb: "+Feb);
                        break;
                      case "Mar":
                        Mar = Mar+value;
                        localStorage.setItem("Mar", Mar);
                        console.log("!!!!!Mar: "+Mar);
                        break;
                      case "Apr":
                        Apr = Apr+value;
                        localStorage.setItem("Apr", Apr);
                        console.log("!!!!!Apr: "+Apr);
                        break;
                      case "May":
                        May = May+value;
                        localStorage.setItem("May", May);
                        console.log("!!!!!May: "+May);
                        break;
                      case "Jun":
                        Jun = Jun+value;
                        localStorage.setItem("Jun", Jun);
                        console.log("!!!!!Jun: "+Jun);
                        break;
                    case "Jul":
                      Jul = Jul+value;
                      localStorage.setItem("Jul", Jul);
                      console.log("!!!!!Jul: "+Jul);
                      break;
                    case "Aug":
                      Aug = Aug+value;
                      localStorage.setItem("Aug", Aug);
                      console.log("!!!!!Aug: "+Aug);
                      break;
                    case "Sep":
                      Sep = Sep+value;
                      localStorage.setItem("Sep", Sep);
                      console.log("!!!!!sep: "+Sep);
                      break;
                    case "Oct":
                      Oct = Oct+value;
                      localStorage.setItem("Oct", Oct);
                      console.log("!!!!!oct: "+Oct);
                      break;
                    case "Nov":
                      Nov = Nov+value;
                      localStorage.setItem("Nov", Nov);
                      console.log("!!!!!Nov: "+Nov);
                      break;
                    case "Dec":
                      Dec = Dec+value;
                      localStorage.setItem("Dec", Dec);
                      console.log("!!!!!Dec: "+Dec);
                      break;
                    }
                          var colder = localStorage.getItem(rangeTotal_key);
                          // console.log("colder1",colder);
                          colder=parseInt(colder)+parseInt(value)
                            localStorage.setItem(rangeTotal_key, colder);
                            // console.log("colder2",colder);
                              // Store
                          localStorage.setItem(whichMonthIsThis, colder);
                          var monthSave = localStorage.getItem(whichMonthIsThis);
                          var monthTotal=parseInt(monthSave)+parseInt(value)
                          localStorage.setItem(whichMonthIsThis, monthTotal);
                          var variable=localStorage.getItem(whichMonthIsThis);
                          console.log(whichMonthIsThis+"######",variable);
                          }
                        var statusso = localStorage.getItem(whichMonthIsThis);
                        // console.log(whichMonthIsThis+" save save save "+statusso);

                })
              // var statusso = localStorage.getItem(whichMonthIsThis);
              // console.log(whichMonthIsThis+" save save save "+statusso);
                });
                }).catch(error => {
                // document.getElementById("progbarlog").style.visibility="hidden";
                console.error('error', error);
                });
                frodateNxt=maxDate;
        }else {//range of following months
          // var whichMonthIsThis=whichMonth(parseInt(i));
        var miniDate=minimizeDays(frodateNxt);
        var maxDate=maximiseDays(miniDate);
        var whichMonthIsThis2=whichMonth(whatMonth(miniDate));
        frodate=miniDate;
        console.log(miniDate+" ======> "+whichMonthIsThis2);
          var collar = localStorage.getItem(transactions_key);
          // console.log("collar "+collar);
          // console.log("collar "+daterfrom);
              var citiesRef = db.collection(collar)
              .where("date", ">=", miniDate)
              .where("date", "<=", maxDate);
              citiesRef.get().then(function(querySnapshot) {
                  querySnapshot.forEach(function(doc) {
              var dropss=doc.id;
              // console.log("emmmmmmm "+dropss);
              jQuery.each(doc.data(), function (key, value) {
                        if(key=="amount"){
                        switch (whichMonthIsThis2) {
                    case "Jan":
                      Jan = Jan+value;
                      localStorage.setItem("Jan", Jan);
                      console.log("!!!!Jan: "+Jan);
                      break;
                    case "Feb":
                      Feb = Feb+value;
                      localStorage.setItem("Feb", Feb);
                      console.log("!!!!!Feb: "+Feb);
                      break;
                    case "Mar":
                      Mar = Mar+value;
                      localStorage.setItem("Mar", Mar);
                      console.log("!!!!!Mar: "+Mar);
                      break;
                    case "Apr":
                      Apr = Apr+value;
                      localStorage.setItem("Apr", Apr);
                      console.log("!!!!!Apr: "+Apr);
                      break;
                    case "May":
                      May = May+value;
                      localStorage.setItem("May", May);
                      console.log("!!!!!May: "+May);
                      break;
                    case "Jun":
                      Jun = Jun+value;
                      localStorage.setItem("Jun", Jun);
                      console.log("!!!!!Jun: "+Jun);
                      break;
                  case "Jul":
                    Jul = Jul+value;
                    localStorage.setItem("Jul", Jul);
                    console.log("!!!!!Jul: "+Jul);
                    break;
                  case "Aug":
                    Aug = Aug+value;
                    localStorage.setItem("Aug", Aug);
                    console.log("!!!!!Aug: "+Aug);
                    break;
                  case "Sep":
                    Sep = Sep+value;
                    localStorage.setItem("Sep", Sep);
                    console.log("!!!!!sep: "+Sep);
                    break;
                  case "Oct":
                    Oct = Oct+value;
                    localStorage.setItem("Oct", Oct);
                    console.log("!!!!!oct: "+Oct);
                    break;
                  case "Nov":
                    Nov = Nov+value;
                    localStorage.setItem("Nov", Nov);
                    console.log("!!!!!Nov: "+Nov);
                    break;
                  case "Dec":
                    Dec = Dec+value;
                    localStorage.setItem("Dec", Dec);
                    console.log("!!!!!Dec: "+Dec);
                    break;
                  }
                        var colder = localStorage.getItem(rangeTotal_key);
                        colder=parseInt(colder)+parseInt(value)
                          localStorage.setItem(rangeTotal_key, colder);
                          // console.log("colder",colder);
                            // Store
                        localStorage.setItem(whichMonthIsThis2, colder);
                        var monthSave = localStorage.getItem(whichMonthIsThis2);
                        var monthTotal=parseInt(monthSave)+parseInt(value)
                        localStorage.setItem(whichMonthIsThis2, monthTotal);
                        var variable=localStorage.getItem(whichMonthIsThis2);
                        console.log(whichMonthIsThis2+"######",variable);
                        }
                      // var statusso = localStorage.getItem(whichMonthIsThis2);
                      // console.log(whichMonthIsThis2+" save save save "+statusso);

              })
            // var statusso = localStorage.getItem(whichMonthIsThis);
            // console.log(whichMonthIsThis+" save save save "+statusso);
              });
              }).catch(error => {
              // document.getElementById("progbarlog").style.visibility="hidden";
              console.error('error', error);
              });
              frodateNxt=maxDate;
        }
      }
      // console.log(fromaNxt+"####"+frodateNxt);
      // frodateNxt=minimizeDays(frodateNxt);
      // console.log(fromaNxt+"####"+frodateNxt);
    }//for End

    }
    function whichMonth(monthNumber){
      var month;
      monthNumber=parseInt(monthNumber);
      switch (monthNumber) {
  case 01:
    month = "Jan";
    return month;
    break;
  case 02:
     month = "Feb";
     return month;
    break;
  case 03:
    month = "Mar";
    return month;
    break;
  case 04:
    month = "Apr";
    return month;
    break;
  case 05:
    month = "May";
    return month;
    break;
  case 06:
    month = "Jun";
    return month;
    break;
case 07:
  month = "Jul";
  return month;
  break;
case 08:
   month = "Aug";
   return month;
  break;
case 09:
  month = "Sep";
  return month;
  break;
case 10:
  month = "Oct";
  return month;
  break;
case 11:
  month = "Nov";
  return month;
  break;
case 12:
  month = "Dec";
  return month;
  break;
}
return month;
    }

        function whatDay(operator){
      return operator.substring(3, 5);
    }
        function whatMonth(operator){
      return operator.substring(0, 2);
    }
        function whatYear(operator){
      return operator.substring(6, 10);
    }

        function maximiseDays(operatorDate){
          var daythere =whatDay(operatorDate);
          var monththere =whatMonth(operatorDate);
          if (monththere%2==0) {
            var daylo=30;
            operatorDate = replaceAtter(operatorDate,3, daylo);
            // console.log("day day day "+operatorDate);
            return operatorDate;
          }else {
            var daylo=31;
            operatorDate = replaceAtter(operatorDate,3, daylo);
            // console.log("day day day "+operatorDate);
            return operatorDate;
          }
        }
        // var iknowdate="08/25/3020";
        // console.log("mini mini mini "+minimizeDays(iknowdate));
        function minimizeDays(operatorDate){
          var monththere =parseInt(whatMonth(operatorDate))+1;
            var daylo="01";
            operatorDate = replaceAtter(operatorDate,3, daylo);
            operatorDate = replaceAtterMonth(operatorDate,0, "0"+monththere);
            return operatorDate;
        }
        function replaceAtter(wholestring,indexat1, replacement) {
        // console.log("day day day "+wholestring);
    return wholestring.substring(0, indexat1) + replacement + wholestring.substring(5,10);
}
function replaceAtterMonth(wholestring,indexat1, replacement) {
// console.log("day day day 22 "+wholestring);
return  replacement + wholestring.substring(2,10);
}
//#################################

           $(function(){
             $("#bottomplaceholder").load("universal/bottom.html");
           });

           function addCommas(nStr) {
             nStr += '';
             var comma = /,/g;
             nStr = nStr.replace(comma,'');
             x = nStr.split('.');
             x1 = x[0];
             x2 = x.length > 1 ? '.' + x[1] : '';
             var rgx = /(\d+)(\d{3})/;
             while (rgx.test(x1)) {
               x1 = x1.replace(rgx, '$1' + ',' + '$2');
             }
             return x1 + x2;
           }

           function setupMonths(){
           localStorage.setItem("Jan", 0);
           localStorage.setItem("Feb", 0);
           localStorage.setItem("Mar", 0);
           localStorage.setItem("Apr", 0);
           localStorage.setItem("May", 0);
           localStorage.setItem("Jun", 0);
           localStorage.setItem("Jul", 0);
           localStorage.setItem("Aug", 0);
           localStorage.setItem("Sep", 0);
           localStorage.setItem("Oct", 0);
           localStorage.setItem("Nov", 0);
           localStorage.setItem("Dec", 0);
           }
           function echoMonths(){
             var variable;
           variable=localStorage.getItem("Jan");
           console.log("1: "+variable);
           variable=localStorage.getItem("Feb");
           console.log("1: "+variable);
           variable=localStorage.getItem("Mar");
           console.log("1: "+variable);
           variable=localStorage.getItem("Apr");
           console.log("1: "+variable);
           variable=localStorage.getItem("May");
           console.log("1: "+variable);
           variable=localStorage.getItem("Jun");
           console.log("1: "+variable);
           variable=localStorage.getItem("Jul");
           console.log("jul: "+variable);
           variable=localStorage.getItem("Aug");
           console.log("aug: "+variable);
           variable=localStorage.getItem("Sep");
           console.log("sept: "+variable);
           variable=localStorage.getItem("Oct");
           console.log("oct: "+variable);
           variable=localStorage.getItem("Nov");
           console.log("nov: "+variable);
           variable=localStorage.getItem("Dec");
           console.log("dec: "+variable);
           }
