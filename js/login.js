// listen for authentication
// auth.onAuthStateChanged(user=>{
//   if(user){
//   console.log("user logged in",user);
//   document.location.replace("home.html");
// }else {
//   console.log("loged out");
// }
// })

document.getElementById("bodeys").style.visibility="visible";

          var userid_key="userid";
          var account_key="account";
          var items_key="items";
          var suppliers_key="suppliers";
          var transactions_key="transactions";
          var company_key="company";
          var surname_key="surname";
          var firstname_key="firstname";
          var phone_key="phone";
          var email_key="email";
          var numberusers_key="usersNo";
          var financialyear_key="financial year";
          var realfinancialyear_key="real financial year";

const signupForm=document.querySelector('#signup_form1');
const signupBtn=document.querySelector('#signupBtn');

signupBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  document.getElementById("progbarsing").style.visibility="visible";
  const surname=document.getElementById("userSurnamesu").value;
  const firstname=document.getElementById("userFirstnamesu").value;
  const company=document.getElementById("userCompanysu").value.toUpperCase();
  const email=document.getElementById("userEmailsu").value;
  const phone=document.getElementById("userPhonesu").value;
  const password=document.getElementById("userPasswordsu").value;
console.log(surname);
    if (surname === '' || firstname==='' || company==='' || email==='' || phone==='' || password==='') {
        // alert("Please fill in all fields");
        // $('#selBooks').focus();
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
          document.querySelector('.error').innerHTML="Please fill in all fields";
          document.getElementById("progbarsing").style.visibility="hidden";
        return false;
      }else {
        console.log("yyyyyyyyyyyyyyyyyyyyy");
      }
    // sign up the user
  firebase.auth().createUserWithEmailAndPassword(email, password).then(async cred => {
    var usernumber=giveidentity();
      // WAIT FOR THE PROMISE
          const checkIfDonesees = () => {
            usernumber.then(ok => {
              usernumber=parseInt(ok)+1;
              console.log("000000",usernumber);

              db.collection("INFORMATION").doc("users").update({
              number:usernumber
              })

              var identitynational=usernumber;
              console.log("000000002",identitynational);
              // signupForm.reset();
              // var name=surname + firstname;
              var waitinside=inside(usernumber,company,surname,firstname,email,phone);
              //
              // WAIT FOR THE PROMISE
                  const checkIfDonein = () => {
                    waitinside.then(ok => {
                      console.log("0000004",usernumber);
                      // signup
                      document.getElementById("progbarsing").style.visibility="hidden";
                      document.location.replace("index.html");
                      })
                      .catch(err => {
                        console.error(err)
                          document.querySelector('.error').innerHTML=err.message;
                          document.getElementById("progbarsing").style.visibility="hidden";
                      })

                  }
                  checkIfDonein();
              //
              })
              .catch(err => {
                console.error(err)
                  document.querySelector('.error').innerHTML=err.message;
                  document.getElementById("progbarsing").style.visibility="hidden";
              })

          }
          checkIfDonesees();

  }).catch(err=>{
document.getElementById("errormsg").innerHTML =err.message;
    // document.querySelector('.error').innerHTML=err.message;
    console.log(err);
    document.getElementById("progbarsing").style.visibility="hidden";
  });
  console.log(email,password);
})

async function inside(usernumber,company,surname,firstname,email,phone){
var userid=generator(usernumber,company);
var something=await db.collection('USERS').doc(userid).set({
  userid: userid,
  firstname: firstname,
  surname: surname,
  company: company,
  email: email,
  phone: phone,
  licence: "0",
  financialyear: "0",
  created:  firebase.firestore.FieldValue.serverTimestamp(),
  ACCOUNTS:"blankACCOUNTS",
  ITEMS:"blankITEMS",
  FINANCIALYEAR:"blankFINANCIALYEAR",
  SUPPLIERS:"blankSUPPLIERS",
  TRANSACTIONS:"blankTRANSACTIONS"
})

localStorage.setItem(userid_key, userid);
localStorage.setItem(account_key, "blankACCOUNTS");
localStorage.setItem(items_key, "blankITEMS");
localStorage.setItem(suppliers_key, "blankSUPPLIERS");
localStorage.setItem(transactions_key, "blankTRANSACTIONS");
localStorage.setItem(financialyear_key, "blankFINANCIALYEAR");
localStorage.setItem("login", "0");

localStorage.setItem(company_key, company);
localStorage.setItem(surname_key, surname);
localStorage.setItem(firstname_key, firstname);
localStorage.setItem(phone_key, phone);
localStorage.setItem(email_key, email);

var very=localStorage.getItem(userid_key);
console.log("0000003 inside",very);
var one=1;
return one;
}

function sanitizeString(str){
str = str.toString().replace(/[^a-z0-9,_-]/gim,"");
    return str.substring(0, 10);
}

function generator(str1,str2){
  // var string=sanitizeString(str1)+sanitizeString(str2);

  return sanitizeString(str1)+sanitizeString(str2);
}




async function giveidentity(){
  var number;
    const docReftss = db.collection("INFORMATION").doc("users");
    var statement =await docReftss.get().then(doc => {
             if (doc.exists) {
                 // console.log('Document data:', doc.data());
    jQuery.each(doc.data(), function (key, value) {
              if(key=="number"){
                number=value;
                localStorage.setItem(numberusers_key, value);
              }

  })
  console.log("000001",number);

  } else {
  // doc.data() will be undefined in this case
  console.error('Please check your collection and document name in the [firestore] shortcode!');
  }
  }).catch(error => {
  console.error('Please check your collection and document name in the [firestore] shortcode!', error);
  });
return number;
}

//log in
const loginForm=document.querySelector('#login_form');
const loginBtn=document.querySelector('#login-button');
loginBtn.addEventListener('click', (e) =>{
  e.preventDefault();

$('#progbar1').addClass("active");
  // const email=loginForm['userEmailli'].value;
  // const password=loginForm['userPasswordli'].value;

  const email=document.getElementById("userEmailli").value;
  const password=document.getElementById("userPasswordli").value;
    // log in the user
  auth.signInWithEmailAndPassword(email, password).then(cred => {
      // console.log(cred.user);
      console.log("000000000");

      var waitforme=storage(email);
console.log("wait",waitforme);
  // WAIT FOR THE PROMISE
      const checkIfDonesee = () => {
        waitforme.then(ok => {
          waitforme=ok;
                    // var song = localStorage.getItem(account_key);
                    // console.log("555555acckey",song);
          console.log("wait:",waitforme);
          localStorage.setItem("login", "1");
          loginForm.reset();
          $('#progbar1').removeClass("active");
        document.querySelector('.error').innerHTML=" ";
        // var take=localStorage.getItem(account_key);
        // console.log("take",take);
        // login
        document.location.replace("index.html");

          })
          .catch(err => {
            console.error(err)
          })

      }
      checkIfDonesee();

  }).catch(err=>{
    document.querySelector('.error').innerHTML=err.message;
    $('#progbar1').removeClass("active");
  });
  console.log(email,password);
})



// settings 222
async function storage(emshow){
  var drops;
  var seconddrops=inner();

  // WAIT FOR THE PROMISE
      const checkIfDoneiner = () => {
        seconddrops.then(ok => {
          seconddrops=ok;

            var total, totalall;
            var accret=1;
            console.log("333333dropds",seconddrops);

            const docReftss = db.collection("USERS").doc(seconddrops);
            // var statement =await
            docReftss.get().then(doc => {
                     if (doc.exists) {
                         // console.log('Document data:', doc.data());
            jQuery.each(doc.data(), function (key, value) {
                      if(key=="ACCOUNTS"){
                        localStorage.setItem(account_key, value);
                        var dbacca = localStorage.getItem(account_key);
                        console.log("songof lawino",dbacca);
                      }else if (key=="ITEMS") {
                         localStorage.setItem(items_key, value);
                       }else if (key=="SUPPLIERS") {
                         localStorage.setItem(suppliers_key, value);
                       }else if (key=="TRANSACTIONS") {
                         localStorage.setItem(transactions_key, value);
                       }else if (key=="company") {
                         localStorage.setItem(company_key, value);
                         console.log("company vee",value);
                       }else if (key=="surname") {
                         localStorage.setItem(surname_key, value);
                       }else if (key=="firstname") {
                         localStorage.setItem(firstname_key, value);
                       }else if (key=="phone") {
                         localStorage.setItem(phone_key, value);
                       }else if (key=="financialyear") {
                         localStorage.setItem(realfinancialyear_key, value);
                       }else if (key=="email") {
                         localStorage.setItem(email_key, value);
                         var dbaccad = localStorage.getItem(account_key);
                         console.log("song law",dbaccad);
                       }

          })


          } else {
          // doc.data() will be undefined in this case
          console.error('Please check your collection and document name in the [firestore] shortcode!');
          }
          }).catch(error => {
          console.error('Please check your collection and document name in the [firestore] shortcode!', error);
          });

          })
          .catch(err => {
            console.error(err)
          })

      }
      checkIfDoneiner();
  async function inner(){
// Create a reference to the cities collection
var sulement=await db.collection("USERS").where("email", "==", emshow)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            drops=doc.id;
              localStorage.setItem(userid_key, drops);
              console.log("22222222drps",drops);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    return drops;
}
  // get userid
  const setupID =(data)=>{
    data.forEach(doc=>{
      drops=doc.id;
        localStorage.setItem(userid_key, drops);
        console.log("2222rr22drps",drops);
        return drops;

// jQuery.each(doc.data(), function (key, value) {
//    if(key=="userid"){
//      localStorage.setItem(userid_key, value);
//      unique=value;
//    }

})
  }

                 return 3;
}
