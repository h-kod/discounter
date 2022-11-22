







console.log("This is a popup!");


fetch('https://www.akakce.com/arama/?q=iphone 11').then(function (response) {
  // The API call was successful!
  return response.text();
}).then(function (html) {

  // Convert the HTML string into a document object
  var parser = new DOMParser();
  var doc = parser.parseFromString(html, 'text/html');


  // Get the image file
  var c1 = doc.querySelector('body > div.rw_v8.search_v8 > p:nth-child(1) > a');
  var pAll = doc.querySelectorAll('#APL li');
  //var pTitle = doc.querySelectorAll('#APL li a');
  //var pPrice = doc.querySelector("#APL > li:nth-child(2) > div > ul > li.b").querySelector("a span span").innerText

  for (let p of pAll) {
    //console.log(p.innerText)
    console.log(p.querySelector('h3').innerText);
    console.log(p.querySelector("span > span > span.pb_v8 > span").innerText);

    document.querySelector("#datas").append(p)
  }


  console.log(c1, pTitle, pPrice);

}).catch(function (err) {
  // There was an error
  console.warn('Something went wrong.', err);
});

