var content = document.getElementById('content');

var page_width = (window.innerWidth || document.body.innerWidth);
var page_height = (window.innerHeight || document.body.innerHeight);

var items = [
  {
    'name': 'Pumpkin Pancakes',
    'description': 'seasonal!',
    'price': '$5.50',
    'image': 'img/pumpkin-pancakes.jpg'
  }, {
    'name': 'Judy\'s Plate',
    'description': 'Two Eggs, any style with hash browns. Choice of ham, bacon, or sasuage, plus 1/2 order of biscuits and gravy.',
    'price': '$6.45'
  }, {
    'name': 'Judy\'s Honey Baked Ham',
    'description': 'All Year Round! 1/2 ham or whole ham.',
    'price': '(call)'
  }
];
for (var i = 0; i < items.length; i++) {
  var container = document.createElement('div');
  container.style.height = page_height - 200;
  container.style.margin = '100px 0';

  var card = document.createElement('div');
  
  var card_width = page_width * 0.45;
  var card_height = page_height * 0.5;
  var card_padding = 32;

  card.style.width = card_width;
  card.style.position = 'absolute';
  card.style.top = page_height + (i * (card_height + 300));
  card.style.right = 100;
  card.style.backgroundColor = '#ffffffee';
  card.style.boxShadow = '0 0 8px 2px rgba(0, 0, 0, 0.4)'
  card.style.padding = card_padding;

  var item_name = document.createElement('h2');
  item_name.style.width = '80%';
  item_name.style.fontFamily = 'Merriweather';
  item_name.style.fontSize = '3rem'
  item_name.innerHTML = items[i].name;
  card.appendChild(item_name);

  var item_description = document.createElement('p');
  item_description.fontFamily = 'Nunito';
  item_description.style.fontSize = '2rem'
  item_description.style.marginTop = '8px';
  item_description.style.marginBottom = '24px';
  item_description.innerHTML = items[i].description;
  card.appendChild(item_description);

  var item_price = document.createElement('h2');
  item_price.style.position = 'absolute';
  item_price.style.top = card_padding;
  item_price.style.right = card_padding;
  item_price.style.fontFamily = 'Merriweather';
  item_price.style.fontSize = '3rem';
  item_price.innerHTML = items[i].price;
  card.appendChild(item_price);

  if (items[i].image) {
    var img = document.createElement('img')
    img.style.width = card_width - (2 * card_padding);
    img.src = items[i].image;
    card.appendChild(img);
  }

  container.appendChild(card);
  content.appendChild(container);
}
