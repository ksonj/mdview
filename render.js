var converter = new showdown.Converter();
converter.setFlavor('github');

var container = document.body.getElementsByTagName('pre')[0];
var html = converter.makeHtml(container.innerHTML);

document.write(html);
