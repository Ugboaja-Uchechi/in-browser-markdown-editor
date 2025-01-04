

function run() {

  const text = document.getElementById('sourceTA').value;
  const preview = document.querySelector('#targetDiv');
  const converter = new showdown.Converter();
  let convertedText = converter.makeHtml(text);
  preview.innerHTML = convertedText;

}
