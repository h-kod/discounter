// document.addEventListener('DOMContentLoaded', function () {
//   document.querySelector("h1").innerHTML = "sasdwdws"
// });

//
// fetch('https://www.google.com').then(response => response.json())
//   .then(json => console.log(json))
//   .catch(function (err) {
//   console.log('Something went wrong.', err);
// });



async function WWX() {
    await fetch(furl, fhead).then(function (response) {
      // The API call was successful!
      return response.text();
    }).then(function (html) {

      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');

      console.log(doc)
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
}

// WWX()




// fpc()
function reddenPage() {

  // document.body.style.backgroundColor = 'red';
  // document.querySelector("#method-setTitle").innerText = "ASDASdwdcw "
  searchProd = document.querySelector("div.row > div.col-md-6 > h3").innerText
  console.log(searchProd)
  // console.log(x)
  fpc(searchProd)
}

chrome.action.onClicked.addListener((tab) => {
  function fpc(prodTitle) {
    console.log(prodTitle)
    fetch('https://www.akakce.com/arama/?q='+ prodTitle).then(function (response) {
      // The API call was successful!
      return response.text();
    }).then(function (html) {

      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');


      // Get the image file
      var c1 = doc.querySelector('body > div.rw_v8.search_v8 > p:nth-child(1) > a');
      var pAll = doc.querySelectorAll('#APL li');
      document.querySelector("#datas").innerHTML = c1;
      // var pTitle = doc.querySelectorAll('#APL li a');
      // var pPrice = doc.querySelector("#APL > li:nth-child(2) > div > ul > li.b").querySelector("a span span").innerText
      console.log(c1);
      for (let p of pAll) {
        //console.log(p.innerText)
        var pTitle = p.querySelector('a').attributes.title.value;
        // var pPriceAll = p.querySelector("div.p_w_v8");
        var pPrice = p.querySelector("span > span > span.pb_v8 > span").innerText;
        // console.log(pPriceAll);
        console.log(pPrice, pTitle);

      }
    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
  }


  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      "target": { "tabId": tab.id },
      "function": console.log("asd"),
    });
  }
});



async function testGet() {

  await fetch('https://www.akakce.com/j/pl/qv/v3/?p=909665233,909915600&b=174&0.42535340493533313')
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(function (err) {
      // There was an error
      console.log('Something went wrong.', err);
    });
}

// testGet()

//
// async function testPost() {
//   let r = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       lockevn: 1
//     }),
//   })
//   console.log(await r.json())
//   //document.querySelector("h1").innerText = r
//
// }

// testGet()


// testPost()

console.log("This is a popup!");

// function createPrintersTable() {
//
//   fetch('https://www.akakce.com/arama/?q=iphone 11').then(function (response) {
//     // The API call was successful!
//     return response.text();
//   }).then(function (html) {
//
//     // Convert the HTML string into a document object
//     const parser = new DOMParser();
//     const doc = parser.parseFromString(html, 'text/html');
//
//     chrome.webRequest.onCompleted.addListener(async request => {
//       if (request.tabId !== -1) {
//         let html = await getHtmlForTab(request.tabId);
//         let parser = new DOMParser();
//         let document = parser.parseFromString(html, "text/html");
//         let title = document.querySelector("title").textContent;
//         console.log(title);
//         parser = null; // <----- DO THIS
//         document = null; // <----- DO THIS
//       }
//     }, requestFilter);
//
//
//     // Get the image file
//     const c1 = doc.querySelector('body > div.rw_v8.search_v8 > p:nth-child(1) > a');
//     const pAll = doc.querySelectorAll('#APL li');
//     //var pTitle = doc.querySelectorAll('#APL li a');
//     //var pPrice = doc.querySelector("#APL > li:nth-child(2) > div > ul > li.b").querySelector("a span span").innerText
//
//     for (let p of pAll) {
//       //console.log(p.innerText)
//       console.log(p.querySelector('h3').innerText);
//       console.log(p.querySelector("span > span > span.pb_v8 > span").innerText);
//
//       document.querySelector("#datas").append(p)
//     }
//
//
//     //console.log(c1, pTitle, pPrice);
//
//   }).catch(function (err) {
//     // There was an error
//     console.warn('Something went wrong.', err);
//   });
//
// }
