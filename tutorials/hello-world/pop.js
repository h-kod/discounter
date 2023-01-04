function searchOnAkakce(query) {
  // HTTP isteği atmak için XMLHttpRequest objesi oluştur
  var xhr = new XMLHttpRequest();

  // İsteğin yapılacağı URL
  var urls = "https://www.akakce.com/arama/?q=" + encodeURIComponent(query);

  var result = [];
  // İsteğin ayarlarını yap
  xhr.open("GET", urls);

  // İsteği gönder
  xhr.send();
  // Cevap (response) alındığında çalışacak fonksiyon
  xhr.onload = function() {
    // Cevap (response) için HTML parser objesi oluştur

    var parser = new DOMParser();
    var doc = parser.parseFromString(xhr.response, "text/html");

    var cat = doc.querySelector('div.rw_v8.search_v8 a:first-child');

    var pAll = doc.querySelectorAll('#APL li');
    var pids = doc.querySelectorAll('#APL > li[data-pr]');

    var pTitle = doc.querySelector('a').attributes.title.value;
    // document.querySelector("#datas").innerHTML = cat;
    // var pTitle = doc.querySelectorAll('#APL li a');
    // var pPrice = doc.querySelector("#APL > li:nth-child(2) > div > ul > li.b").querySelector("a span span").innerText
    var product = [];
    for (let p of pAll) {
      //console.log(p.innerText)
      var pTitle = p.querySelector('h3').innerHTML;

      var pPriceAll = p.querySelector("span.pt_v9").innerText;

      var plink = "https://www.akakce.com"
      plink += p.querySelector('a.iC').attributes.href.value
      // .getAttribute("href") ? p.querySelector('a.iC').getAttribute("href") : false
      // console.log(plink)
      var pPrice = p.querySelector("span > span > span.pb_v8 > span").innerText;
      // console.log(pPriceAll);

      product.push([pTitle, plink, pPriceAll])

    }
    product.sort();

    let table = "<table>";
    for (let i = 0; i < product.length; i++) {
      table += "<tr>";
      for (let j = 0; j < product[i].length; j++) {
        if (j == 1) {
          table += "<td><a href='" + product[i][j] + "'>İncele</a></td>";
        } else {
          table += "<td>" + product[i][j] + "</td>";
        }
      }
      table += "</tr>";
    }
    table += "</table>";

    document.getElementById("datas").innerHTML = table;


    document.querySelector("#datas a").click(function () {
      chrome.tabs.create({ url: this.attributes.href.value });
    });




    console.log(product[0]);
    var url = "https://www.akakce.com/j/pl/qv/v3/?p=";

    // URL
    pids.forEach(function(value) {
      var urlId = value.attributes[0].value;
      //console.log(value)
      url += urlId + ',';
    });

    url = url.slice(0, -1);
    url += "&b=179&0.42535340493533313";
    // x = url;
    // console.log(url)
    // result.push(url);
    // return url

    // Elementin değerini yazdır
    // console.log(cat.innerHTML);

  }
  // console.log(result);
}

function getResponseFromAkakce(url) {
  // HTTP isteği atmak için XMLHttpRequest objesi oluştur
  var xhr = new XMLHttpRequest();

  // İsteğin yapılacağı URL

  // İsteğin ayarlarını yap
  xhr.open("GET", url);

  // İsteği gönder
  xhr.send();

  // Cevap (response) alındığında çalışacak fonksiyon
  xhr.onload = function() {
    // Cevap (response) yazdır
    console.log(xhr.response);
  }
}

// Örnek kullanım
// console.log()
searchOnAkakce("iphone 13")

// getResponseFromAkakce("https://www.akakce.com/j/pl/qv/v3/?p=814416670,688131178,835643657,835635437,835643653,688131204,835643652,835643658,688131205,835631778,835631782,835635438,835643645,835643654,835643655,835643656,835643659,835643661,835643662,835643663,835659222,835665083,1139903759,2016435621&b=179&0.42535340493533313");

// Örnek kullanım
// searchOnAkakce("iphone 14");

// (function showReadme() {

//   searchProd = "document.querySelector("div.row > div.col-md-6 > h3").innerText"
//   urlFind(searchProd)

//   function urlFind(prodTitle) {
//     fetch('https://www.akakce.com/arama/?q=' + prodTitle).then(function (response) {

//       // The API call was successful!
//       return response.text();
//     }).then(function (html) {

//       // Convert the HTML string into a document object
//       var parser = new DOMParser();
//       var doc = parser.parseFromString(html, 'text/html');

//       var cat = doc.querySelector('div.rw_v8.search_v8 a:first-child');

//       var pAll = doc.querySelectorAll('#APL li');
//       var pids = doc.querySelectorAll('#APL > li[data-pr]');

//       var pTitle = doc.querySelector('a').attributes.title.value;
//       // document.querySelector("#datas").innerHTML = cat;
//       // var pTitle = doc.querySelectorAll('#APL li a');
//       // var pPrice = doc.querySelector("#APL > li:nth-child(2) > div > ul > li.b").querySelector("a span span").innerText

//       for (let p of pAll) {
//         //console.log(p.innerText)
//         var pTitle = p.querySelector('h3').innerHTML;

//         var pPriceAll = p.querySelector("span.pt_v8").innerText;

//         // var plink = p.querySelector('a.iC').attributes.href;

//         var pPrice = p.querySelector("span > span > span.pb_v8 > span").innerText;
//         // console.log(pPriceAll);
//         console.log( p,pPriceAll, pTitle);

//       }

//       // URL
//       var url = "https://www.akakce.com/j/pl/qv/v3/?p=";
//       pids.forEach(function (value) {
//         var urlId = value.attributes[0].value;
//         //console.log(value)
//         url += urlId + ',';
//       });

//       url = url.slice(0, -1);
//       url += "&b=179&0.42535340493533313";

//       var category = "https://www.akakce.com" + cat.attributes.href.value;
//       console.log(category)
//       // chrome.tabs.create({
//       //   url: url.toString()
//       // });

//       // return url
//       // console.log(cat)

//     }).catch(function (err) {
//       // There was an error
//       console.warn('Something went wrong.', err);
//     });
//   }

//   // var url = "https://www.akakce.com/j/pl/qv/v3/?p=18187615,1509853630,78877681,1306324594,16798963,1898548209&b=179&0.42535340493533323"
//   // fpc(url);

//   function fpc(url) {
//     fetch(url).then(function (response) {
//       // The API call was successful!
//       return response.text();
//     }).then(function (html) {

//       // Convert the HTML string into a document object
//       var parser = new DOMParser();
//       var doc = parser.parseFromString(html, 'text/html');
//       console.log(doc);

//       // Get the image file
//       var pAll = doc.querySelectorAll('#APL');
//       var prod = [];

//       for (let p of pAll) {
//         // console.log(p.querySelector('*'))
//         var pRow = p.querySelectorAll('li[data-pr]')[0].attributes[0].value;
//         // var pCols = p.querySelector('li div');
//         var pTitle = p.querySelector('a.iC').attributes.title.value;
//         var pPriceAll = p.querySelector("span figure").outerHTML;
//         var pPrice = p.querySelector("span > span > span.pb_v8 > span").innerText;
//         prod.push(pTitle, pPriceAll, pPrice)
//         // console.log(pPriceAll);
//         // console.log(pPrice, pTitle);
//         //console.log(pRow);
//         // console.log(pCols);

//       }
//       // console.log(prod);

//       // document.body.style.backgroundColor = 'red';
//       // document.querySelector("#method-setTitle").innerText = "ASDASdwdcw "

//       // var cat = doc.querySelector('div.rw_v8.search_v8 a:first-child');
//     }).catch(function (err) {
//       // There was an error
//       console.warn('Something went wrong.', err);
//     });

//   }

//   //
//   // console.log(searchProd)
//   // console.log("asdasd")

//   // console.log(x)
//   //urlFind(searchProd)
//   //fpc(urlFind(searchProd));

// })()
