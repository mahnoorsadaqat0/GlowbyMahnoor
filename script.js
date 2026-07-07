// 20 HIGH-QUALITY PROFESSIONAL BEAUTY & SCENT PRODUCTS (All Images Live & Loaded)
const productsData = [
    // --- MAKEUP (1 to 7) ---
    {
        id: 1, name: "Velvet Matte Liquid Lipstick", category: "makeup", price: 1600, discountPrice: 1250, rating: 5, stock: "In Stock", tag: "Best Seller",
        img: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Isododecane, Trimethylsiloxysilicate, Vitamin E, Shea Butter.",
        benefits: "16-hour smudge-proof wear, ultraweight velvet texture, rich color payoff.",
        usage: "Apply smoothly on bare lips. Allow 60 seconds to lock into a gorgeous matte lock."
    },
    {
        id: 2, name: "HD Liquid Foundation Base", category: "makeup", price: 3200, discountPrice: 2650, rating: 5, stock: "In Stock", tag: "Trending",
        img: "https://images.unsplash.com/photo-1631730359577-38e4755d772b?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1631730359577-38e4755d772b?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Water, Glycerin, Dimethicone, Silica mineral complex.",
        benefits: "Full coverage, seamless airbrush look, sweat-resistant oil-control formula.",
        usage: "Dot all over face, blend using a damp beauty sponge or foundation brush."
    },
    {
        id: 3, name: "Cheek & Lip Tint (Misty Rose)", category: "makeup", price: 1200, discountPrice: 950, rating: 4, stock: "In Stock", tag: "Best Seller",
        img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Organic Beetroot extract, Aloe Vera base, Rose distillate water.",
        benefits: "Natural rosy blush color, intensely buildable formula, lightweight dew feel.",
        usage: "Dab 2 dots on apples of cheeks or lips and blend immediately using fingers."
    },
    {
        id: 4, name: "Glow Illuminating Highlighter", category: "makeup", price: 1950, discountPrice: 1500, rating: 5, stock: "In Stock", tag: "New",
        img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Mica micro-pearls, Jojoba emollient oils, Magnesium stearate.",
        benefits: "Blinding strobe glow, zero chunky glitters, blends right into your skin.",
        usage: "Dust softly onto high points of face (cheekbones, brow bone, nose tip)."
    },
    {
        id: 5, name: "Waterproof Volume Mascara", category: "makeup", price: 1400, discountPrice: 1100, rating: 4, stock: "In Stock", tag: "Hot Seller",
        img: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Beeswax, Carnauba Wax, Intense Carbon Black Pigments.",
        benefits: "3x volume boost effect, clump-free definition, holds beautiful curl all day.",
        usage: "Wiggle brush from lash roots to tip. Layer twice for intense dramatic depth."
    },
    {
        id: 6, name: "Nude Eyeshadow Palette (9 Shades)", category: "makeup", price: 2800, discountPrice: 2200, rating: 5, stock: "In Stock", tag: "Premium",
        img: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Mineral talc, pressed pigment powders, organic smoothing binders.",
        benefits: "Ultra pigmented metallics and butter mattes. Zero fallout formulation.",
        usage: "Blend matte shades in the crease and pat metallic shimmers on the lid center."
    },
    {
        id: 7, name: "Translucent Loose Setting Powder", category: "makeup", price: 1750, discountPrice: 1350, rating: 4, stock: "Out of Stock", tag: "Restocking",
        img: "https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Pure Cornstarch, Zinc Oxide, Light Reflecting Silica polymers.",
        benefits: "Locks makeup up to 12 hours, locks out shine, gives blur filter texture.",
        usage: "Press lightly into oily zones with a powder puff, dust off excess after 2 mins."
    },

    // --- SKINCARE (8 to 14) ---
    {
        id: 8, name: "24K Gold Radiant Skin Serum", category: "skin", price: 2999, discountPrice: 2450, rating: 5, stock: "In Stock", tag: "Luxury Choice",
        img: "https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1608248597481-496100c80836?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Pure Gold flakes, Plant Hyaluronic Acid, Niacinamide b3 essence.",
        benefits: "Intense glass-skin hydration, clears dark texture patches, repairs skin barrier.",
        usage: "Pat 3 drops on freshly cleansed damp skin before putting regular creams."
    },
    {
        id: 9, name: "Vitamin C Brightening Glow Cleanser", category: "skin", price: 1500, discountPrice: 1150, rating: 5, stock: "In Stock", tag: "New Launch",
        img: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Kakadu Plum Vitamin C, Orange Peel hydrosol, Aloe Barbadensis Leaf.",
        benefits: "Fades dull surface fatigue, deep cleanses pores without excessive skin drying.",
        usage: "Massage a small coin amount on wet face for 1 minute, wash off thoroughly."
    },
    {
        id: 10, name: "Hyaluronic Aqua Gel Moisturizer", category: "skin", price: 2100, discountPrice: 1750, rating: 4, stock: "In Stock", tag: "Best Seller",
        img: "https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1601049676099-e7ed07d825b0?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Sodium Hyaluronate, Ceramic complex NP, Marine Seaweed broth extract.",
        benefits: "72-hour moisture locking bounce, refreshing feather gel absorption matrix.",
        usage: "Apply generously evenly over dry cleansed face as your final morning step."
    },
    {
        id: 11, name: "Pink Rose Kaolin Clay Mask", category: "skin", price: 1800, discountPrice: 1400, rating: 5, stock: "In Stock", tag: "Glowing",
        img: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1567894340315-735d7c361db0?q=80&w=400&auto=format&fit=crop"],
        ingredients: "French Pink Clay, Organic Rose petal crush, Chamomile essence.",
        benefits: "Sucks out blackheads instantly, smooths skin uneven roughness texture flakes.",
        usage: "Spread thin coat on skin, let dry fully for 10-12 mins, wash gently with water."
    },
    {
        id: 12, name: "Advanced Retinol Night Repair Essence", category: "skin", price: 3500, discountPrice: 2900, rating: 5, stock: "In Stock", tag: "Anti Aging",
        img: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400&auto=format&fit=crop"],
        ingredients: "1% Pure Encapsulated Retinol, Squalane, Vitamin E compound.",
        benefits: "Boosts cell turnaround cycle, smooths micro wrinkles, reduces open acne pores.",
        usage: "Use only 2 drops at night time. Ensure strict Sunscreen usage next morning."
    },
    {
        id: 13, name: "Aloe Vera soothing Under-Eye Gel", category: "skin", price: 1100, discountPrice: 850, rating: 4, stock: "In Stock", tag: "Value Pack",
        img: "https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Organic Aloe Gel, Caffeine fluid extract, Cucumber pulp concentrate.",
        benefits: "Banishes heavy dark morning bags, cools under-eye stress exhaustion.",
        usage: "Tap gently around the lower orbital bones using your ring finger before bed."
    },
    {
        id: 14, name: "Ultra-Light Sunscreen SPF 50+", category: "skin", price: 1900, discountPrice: 1600, rating: 5, stock: "In Stock", tag: "Daily Essential",
        img: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Zinc Oxide, Titanium Dioxide, Green Tea botanical essence shielding.",
        benefits: "Zero sticky white cast layer, hybrid protective screen layer, matte finish.",
        usage: "Apply two finger lengths layer broad over skin 20 minutes before stepping out."
    },

    // --- PERFUMES (15 to 20) ---
    {
        id: 15, name: "Oud Royale Intense EDP", category: "perfume", price: 6500, discountPrice: 5200, rating: 5, stock: "In Stock", tag: "Signature Luxury",
        img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Premium Cambodian Agarwood oud oil, Amber base, Sweet Vanilla.",
        benefits: "Lasts up to 24 hours, extremely deep luxury oriental projection trail.",
        usage: "Spray directly on hot pulse spots (wrists, sides of neck, inner elbow joints)."
    },
    {
        id: 16, name: "Velvet Rose & Vanilla Perfume", category: "perfume", price: 4800, discountPrice: 3950, rating: 5, stock: "In Stock", tag: "Top Rated",
        img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Damask Rose Absolute, Madagascar Vanilla pod extract, White Musk.",
        benefits: "Intensely sweet romantic floral gourmand aesthetic projection aura.",
        usage: "Mist over clothes and skin hair brush zones for ambient distribution."
    },
    {
        id: 17, name: "Oceanic Fresh Unisex EDP", category: "perfume", price: 3800, discountPrice: 2999, rating: 4, stock: "In Stock", tag: "Summer Hit",
        img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Sea Salt crystal accords, Italian Bergamot citrus, Cedarwood base.",
        benefits: "Crisp energetic fresh morning feel. Perfect choice for corporate workwear.",
        usage: "Best applied straight after warm shower cycles for fresh locking grids."
    },
    {
        id: 18, name: "Jasmine Bloom Parisian Scent", category: "perfume", price: 4500, discountPrice: 3700, rating: 5, stock: "In Stock", tag: "Elegant Collection",
        img: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Sambac White Jasmine petals, Tuberose distillate, Sandalwood.",
        benefits: "Delicate fresh calming white floral profile, highly classy premium appeal.",
        usage: "Mist directly onto chest area and collarbones from a distance of 6 inches."
    },
    {
        id: 19, name: "Sweet Amber Gold Fragrance", category: "perfume", price: 5200, discountPrice: 4200, rating: 5, stock: "In Stock", tag: "Exclusive",
        img: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Warm Golden Amber resins, Roasted Tonka Bean, Patchouli leaves.",
        benefits: "Warm spicy sweet blend aura. Unmatched premium performance in winter.",
        usage: "Spray behind earlobes and outfit shoulder creases for maximum sillage."
    },
    {
        id: 20, name: "Blossom Citrus Cologne", category: "perfume", price: 3100, discountPrice: 2450, rating: 4, stock: "Out of Stock", tag: "Sold Out",
        img: "https://images.unsplash.com/photo-1588405748373-122b2321bc31?q=80&w=400&auto=format&fit=crop",
        images: ["https://images.unsplash.com/photo-1588405748373-122b2321bc31?q=80&w=400&auto=format&fit=crop"],
        ingredients: "Zesty Pink Grapefruit, Neroli blossom oil, White Vetiver strands.",
        benefits: "Ultra clean uplifting citrus vibe. Feels like walking in Mediterranean gardens.",
        usage: "Splash lightly on pulse fields for casual hangout refreshes."
    }
];

// App Core Memory State Setup
let cart = [];
let wishlist = [];
let discountPercentage = 0;

// Application Mount Load Loop
window.addEventListener('DOMContentLoaded', () => {
    renderProducts(productsData);
    setupScrollMonitoring();
});

// Dynamic Matrix Render Function
function renderProducts(itemsArray) {
    const grid = document.getElementById('product-grid');
    grid.innerHTML = '';
    
    if (itemsArray.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align:center; color:#999; padding:40px;">No beauty item matching your criteria. Try searching something else! ✨</p>`;
        return;
    }
    
    itemsArray.forEach(prod => {
        const isWish = wishlist.includes(prod.id) ? 'active' : '';
        const starRating = '⭐'.repeat(prod.rating);
        const stockStatusClass = prod.stock === "In Stock" ? "in-stock" : "out-stock";
        
        grid.innerHTML += `
            <div class="product-card">
                <span class="badge">${prod.tag}</span>
                <button class="wishlist-btn ${isWish}" onclick="toggleWishlist(${prod.id})"><i class="fas fa-heart"></i></button>
                <div class="img-wrap">
                    <img src="${prod.img}" alt="${prod.name}" loading="lazy">
                </div>
                <div class="prod-info">
                    <h3 onclick="openQuickView(${prod.id})">${prod.name}</h3>
                    <div class="stars">${starRating}</div>
                    <div class="price-line">
                        <span class="old">Rs. ${prod.price}</span>
                        <span class="new">Rs. ${prod.discountPrice}</span>
                    </div>
                    <span class="stock-badge ${stockStatusClass}">${prod.stock}</span>
                    <div class="card-actions">
                        <button class="btn-add-cart" onclick="addToCart(${prod.id})" ${prod.stock === "Out of Stock" ? 'disabled style="background:#ccc; cursor:not-allowed;"' : ''}>Add To Cart</button>
                        <button class="btn-quick" onclick="openQuickView(${prod.id})"><i class="far fa-eye"></i></button>
                    </div>
                </div>
            </div>
        `;
    });
}

// Filtering Engine Matrix
function filterProducts() {
    const categoryVal = document.getElementById('category-filter').value;
    const priceVal = document.getElementById('price-filter').value;
    let filteredList = productsData;
    
    if (categoryVal !== 'all') {
        filteredList = filteredList.filter(p => p.category === categoryVal);
    }
    
    if (priceVal !== 'all') {
        if (priceVal === 'under2000') filteredList = filteredList.filter(p => p.discountPrice < 2000);
        else if (priceVal === 'above2000') filteredList = filteredList.filter(p => p.discountPrice >= 2000);
    }
    
    renderProducts(filteredList);
}

// Sorting Engine
function sortProducts() {
    const sortVal = document.getElementById('sort-filter').value;
    let itemsCopy = [...productsData];
    
    if (sortVal === 'low-high') {
        itemsCopy.sort((a,b) => a.discountPrice - b.discountPrice);
    } else if (sortVal === 'high-low') {
        itemsCopy.sort((a,b) => b.discountPrice - a.discountPrice);
    }
    renderProducts(itemsCopy);
}

// Live Search Routine
function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const matches = productsData.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(matches);
}

// Basket UI Sidebar Handling
function toggleCartSidebar() {
    document.getElementById('cart-sidebar').classList.toggle('open');
}

function addToCart(id) {
    const baseObj = productsData.find(p => p.id === id);
    const itemInCart = cart.find(i => i.id === id);
    
    if (itemInCart) {
        itemInCart.qty += 1;
    } else {
        cart.push({ ...baseObj, qty: 1 });
    }
    updateCartUI();
    if (!document.getElementById('cart-sidebar').classList.contains('open')) {
        toggleCartSidebar();
    }
}

function changeQty(id, delta) {
    const entry = cart.find(i => i.id === id);
    if (entry) {
        entry.qty += delta;
        if (entry.qty <= 0) {
            cart = cart.filter(i => i.id !== id);
        }
    }
    updateCartUI();
}

function removeCartItem(id) {
    cart = cart.filter(i => i.id !== id);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.reduce((acc, i) => acc + i.qty, 0);
    const box = document.getElementById('cart-items-container');
    box.innerHTML = '';
    
    if (cart.length === 0) {
        box.innerHTML = `<p style="text-align:center; color:#bbb; margin-top:5px;">Your glow basket is empty ✨</p>`;
        document.getElementById('subtotal-amount').innerText = "Rs. 0";
        document.getElementById('discount-amount').innerText = "Rs. 0";
        document.getElementById('total-amount').innerText = "Rs. 0";
        return;
    }
    
    let subtotal = 0;
    cart.forEach(item => {
        subtotal += item.discountPrice * item.qty;
        box.innerHTML += `
            <div class="cart-item-row">
                <div>
                    <h5 style="font-size:13px;">${item.name}</h5>
                    <span style="color:#d98871; font-size:12px; font-weight:600;">Rs. ${item.discountPrice}</span>
                </div>
                <div class="qty-controls">
                    <button onclick="changeQty(${item.id}, -1)">-</button>
                    <span>${item.qty}</span>
                    <button onclick="changeQty(${item.id}, 1)">+</button>
                </div>
                <button class="remove-item-btn" onclick="removeCartItem(${item.id})"><i class="far fa-trash-alt"></i></button>
            </div>
        `;
    });
    
    let discount = (subtotal * discountPercentage) / 100;
    let finalAmount = subtotal - discount;
    
    document.getElementById('subtotal-amount').innerText = `Rs. ${subtotal.toLocaleString()}`;
    document.getElementById('discount-amount').innerText = `Rs. ${discount.toLocaleString()}`;
    document.getElementById('total-amount').innerText = `Rs. ${finalAmount.toLocaleString()}`;
}

function applyCoupon() {
    const val = document.getElementById('coupon-input').value.trim().toUpperCase();
    if (val === "GLOW26") {
        discountPercentage = 10;
        alert("Success! 10% Coupon Applied. 🏷️");
        updateCartUI();
    } else {
        alert("Invalid coupon code.");
    }
}

// Wishlist Module
function toggleWishlistModal() {
    const modal = document.getElementById('wishlist-modal');
    modal.style.display = modal.style.display === "flex" ? "none" : "flex";
    renderWishlistUI();
}

function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
    } else {
        wishlist.push(id);
    }
    document.getElementById('wishlist-count').innerText = wishlist.length;
    filterProducts();
}

function renderWishlistUI() {
    const container = document.getElementById('wishlist-container');
    container.innerHTML = '';
    if (wishlist.length === 0) {
        container.innerHTML = '<p style="text-align:center; color:#aaa; font-size:13px;">Your wishlist is empty ❤️</p>';
        return;
    }
    wishlist.forEach(id => {
        const item = productsData.find(p => p.id === id);
        container.innerHTML += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:10px; background:#fffbfb; padding:10px; border-radius:6px; border: 1px solid #fcebe8;">
                <span style="font-size:13px; font-weight:500;">${item.name}</span>
                <button onclick="toggleWishlist(${item.id}); renderWishlistUI();" style="border:none; background:none; color:#e74c3c; cursor:pointer;"><i class="fas fa-trash-alt"></i></button>
            </div>
        `;
    });
}

// QuickView Detail Overlay Mechanics & Hover Zoom Engine
function openQuickView(id) {
    const match = productsData.find(p => p.id === id);
    document.getElementById('qv-name').innerText = match.name;
    document.getElementById('qv-price').innerText = `Rs. ${match.discountPrice}`;
    document.getElementById('qv-discount').innerText = `Rs. ${match.price}`;
    document.getElementById('qv-stock').innerText = match.stock;
    document.getElementById('qv-stock').className = `stock-status ${match.stock === "In Stock" ? 'in-stock' : 'out-stock'}`;
    
    const mainImgNode = document.getElementById('qv-main-img');
    mainImgNode.src = match.img;
    
    const thumbBox = document.getElementById('qv-thumbnails');
    thumbBox.innerHTML = '';
    match.images.forEach(img => {
        thumbBox.innerHTML += `<img src="${img}" onclick="document.getElementById('qv-main-img').src='${img}'">`;
    });
    
    document.getElementById('tab-ingredients').innerText = match.ingredients;
    document.getElementById('tab-benefits').innerText = match.benefits;
    document.getElementById('tab-usage').innerText = match.usage;
    
    document.getElementById('quickview-modal').style.display = "flex";
}

function closeQuickView() {
    document.getElementById('quickview-modal').style.display = "none";
}

function switchTab(e, id) {
    const contents = document.getElementsByClassName('tab-content');
    for(let i=0; i<contents.length; i++) contents[i].classList.remove('active-content');
    const buttons = document.getElementsByClassName('tab-btn');
    for(let i=0; i<buttons.length; i++) buttons[i].classList.remove('active');
    
    document.getElementById(id).classList.add('active-content');
    e.currentTarget.classList.add('active');
}

// Real-Time Coordinates Hover Zoom Function
function zoomImage(event) {
    const img = document.getElementById('qv-main-img');
    const wrap = document.getElementById('zoom-container');
    const x = event.clientX - wrap.getBoundingClientRect().left;
    const y = event.clientY - wrap.getBoundingClientRect().top;
    
    img.style.transformOrigin = `${x}px ${y}px`;
    img.style.transform = "scale(2.2)";
}
function resetZoom() {
    const img = document.getElementById('qv-main-img');
    img.style.transformOrigin = "center center";
    img.style.transform = "scale(1)";
}

// Checkout Form Processor
function openCheckoutModal() {
    if (cart.length === 0) return;
    document.getElementById('cart-sidebar').classList.remove('open');
    
    const summaryBox = document.getElementById('checkout-summary-items');
    summaryBox.innerHTML = '';
    cart.forEach(item => {
        summaryBox.innerHTML += `<p style="font-size:12px; margin-bottom:4px; color:#555;">${item.name} (x${item.qty}) - Rs. ${item.discountPrice * item.qty}</p>`;
    });
    document.getElementById('checkout-summary-total').innerText = document.getElementById('total-amount').innerText;
    document.getElementById('checkout-modal').style.display = "flex";
}
function closeCheckoutModal() {
    document.getElementById('checkout-modal').style.display = "none";
}
function processOrder(e) {
    e.preventDefault();
    alert("🚀 Order Successfully Placed!\nThank you for choosing Glow by Mahnoor.\nOur dispatch team will contact you on your phone number shortly.");
    cart = [];
    updateCartUI();
    closeCheckoutModal();
}

// Window Scroll Configurations
function setupScrollMonitoring() {
    const topBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 350) topBtn.style.display = "block";
        else topBtn.style.display = "none";
    });
}
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dismiss Modals on Outside Space Click
window.onclick = function(e) {
    const qv = document.getElementById('quickview-modal');
    const wl = document.getElementById('wishlist-modal');
    const co = document.getElementById('checkout-modal');
    if (e.target === qv) qv.style.display = "none";
    if (e.target === wl) wl.style.display = "none";
    if (e.target === co) co.style.display = "none";
}