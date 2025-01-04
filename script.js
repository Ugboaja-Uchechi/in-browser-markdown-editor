// var showdown = require('showdown')
// text = '# hello, markdown!',
// html = converter.makeHtml(text);



function run() {

  const text = document.getElementById('sourceTA').value;
  // Perform the conversion
  const preview = document.querySelector('#targetDiv');
  const converter = new showdown.Converter();
  let convertedText = converter.makeHtml(text);
  preview.innerHTML = convertedText;

  // var converter = new showdown.Converter(),
  //   text = document.getElementById('sourceTA').value
  // html = converter.makeHtml(text);

  
  // console.log('hello', html)
  // document.getElementById('targetDiv').innerHTML = html;
}
