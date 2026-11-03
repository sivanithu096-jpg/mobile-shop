const products = [
  {
    name: 'iPhone 16 Pro',
    category: 'Phones',
    price: '₹1,19,900',
    old: '₹1,29,900',
    rating: '4.9',
    reviews: '128',
    badge: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Galaxy S25 Ultra',
    category: 'Phones',
    price: '₹1,29,999',
    old: '₹1,34,999',
    rating: '4.8',
    reviews: '96',
    badge: 'New arrival',
    img: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Studio Buds Pro',
    category: 'Audio',
    price: '₹24,900',
    old: '₹27,900',
    rating: '4.7',
    reviews: '84',
    badge: 'Staff pick',
    img: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Everyday Watch',
    category: 'Accessories',
    price: '₹39,900',
    old: '₹44,900',
    rating: '4.8',
    reviews: '63',
    badge: 'Limited',
    img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Pixel 9 Pro',
    category: 'Phones',
    price: '₹1,09,999',
    old: '₹1,14,999',
    rating: '4.8',
    reviews: '71',
    badge: 'Just in',
    img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'Quiet Comfort Headphones',
    category: 'Audio',
    price: '₹29,900',
    old: '₹34,900',
    rating: '4.9',
    reviews: '112',
    badge: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'MagSafe Power Bank',
    category: 'Accessories',
    price: '₹7,900',
    old: '₹9,900',
    rating: '4.6',
    reviews: '48',
    badge: 'Everyday essential',
    img: 'https://images.unsplash.com/photo-1609592806596-b43badaf4a9f?auto=format&fit=crop&w=700&q=80'
  },
  {
    name: 'AirPods Pro',
    category: 'Audio',
    price: '₹24,900',
    old: '₹26,900',
    rating: '4.9',
    reviews: '153',
    badge: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?auto=format&fit=crop&w=700&q=80'
  }
];

let cart = 0;
const grid = document.getElementById('productGrid');

function render(filter = 'All') {
  const visibleProducts = products.filter(product =>
    filter === 'All' || product.category === filter
  );

  grid.innerHTML = visibleProducts.map(product => `
    <article class="card">
      <div class="photo">
        <img loading="lazy" src="${product.img}" alt="${product.name}">
        <span class="badge">${product.badge}</span>
        <button class="heart" aria-label="Add ${product.name} to wishlist"
          onclick="this.textContent = this.textContent === '♡' ? '♥' : '♡'">♡</button>
      </div>
      <div class="card-info">
        <div class="category">${product.category}</div>
        <h3>${product.name}</h3>
        <div class="rating">★★★★★ <span>${product.rating} (${product.reviews})</span></div>
        <div class="price-row">
          <span class="price">${product.price}</span>
          <span class="old">${product.old}</span>
        </div>
        <button class="add" onclick="addToCart('${product.name}')">ADD TO BAG&nbsp; +</button>
      </div>
    </article>
  `).join('');
}

function addToCart(name) {
  cart++;
  document.getElementById('cartCount').textContent = cart;
  toast(name + ' added to your bag');
}

function showCart() {
  if (cart) {
    toast(`Your bag has ${cart} item${cart === 1 ? '' : 's'}. Demo checkout.`);
  } else {
    toast('Your bag is waiting for something lovely.');
  }
}

let toastTimer;

function toast(message) {
  const toastElement = document.getElementById('toast');
  toastElement.textContent = message;
  toastElement.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastElement.classList.remove('show');
  }, 2300);
}

document.querySelectorAll('.filter').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.filter.active')?.classList.remove('active');
    button.classList.add('active');
    render(button.dataset.filter);
  });
});

render();