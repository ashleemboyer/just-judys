var content = document.getElementById('content');

var page_width = (window.innerWidth || document.body.innerWidth);
var page_height = (window.innerHeight || document.body.innerHeight);

var items = [
  'pumpkin pancakes',
  'honey baked ham',
  'judy\'s plate'
];
for (var i = 0; i < items.length; i++) {
  var container = document.createElement('div');
  container.style.height = page_height - 200;
  container.style.margin = '100px 0';

  var card = document.createElement('div');

  card.style.width = '45%';
  card.style.height = '50%';
  card.style.margin = '0 auto';
  card.style.position = 'absolute';
  card.style.top = page_height + (i * 650);
  card.style.right = 100;
  card.style.backgroundColor = '#ffffffee';
  card.style.boxShadow = '0 0 8px 2px rgba(0, 0, 0, 0.4)'

  container.appendChild(card);
  content.appendChild(container);
}
