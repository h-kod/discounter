chrome.action.onClicked.addListener((tab) => {
  if(!tab.url.includes("chrome://")) {
    chrome.scripting.executeScript({
      "target": { "tabId": tab.id },
      "function": showReadme,
    });
  }
});


function showReadme() {

  function fpc(prodTitle) {
    fetch('https://www.akakce.com/arama/?q='+ prodTitle).then(function (response) {
      // The API call was successful!
      return response.text();
    }).then(function (html) {

      // Convert the HTML string into a document object
      var parser = new DOMParser();
      var doc = parser.parseFromString(html, 'text/html');


      // Get the image file
      var c1 = doc.querySelector('body > div.rw_v8.search_v8 > p:nth-child(1) > a');
      var pAll = doc.querySelectorAll('#APL');
      // document.querySelector("#datas").innerHTML = c1;
      // var pTitle = doc.querySelectorAll('#APL li a');
      // var pPrice = doc.querySelector("#APL > li:nth-child(2) > div > ul > li.b").querySelector("a span span").innerText
      var prod= [];
      console.log(pAll)
      for (let p of pAll) {
        // console.log(p.querySelector('*'))
        var pRow = p.querySelectorAll('li');
        // var pCols = p.querySelector('li div');
        var pTitle = p.querySelector('a.iC').attributes.title.value;
        var pPriceAll = p.querySelector("span figure").outerHTML;
        var pPrice = p.querySelector("span > span > span.pb_v8 > span").innerText;
        prod.push(pTitle,pPriceAll,pPrice)
        // console.log(pPriceAll);
        // console.log(pPrice, pTitle);
        // console.log(pRow);
        // console.log(pCols);

      }
      // console.log(prod);

    }).catch(function (err) {
      // There was an error
      console.warn('Something went wrong.', err);
    });
  }

  // document.body.style.backgroundColor = 'red';
  // document.querySelector("#method-setTitle").innerText = "ASDASdwdcw "
  searchProd = document.querySelector("div.row > div.col-md-6 > h3").innerText


  //
  // console.log(searchProd)
  // console.log("asdasd")


  // console.log(x)
  fpc(searchProd)

}

