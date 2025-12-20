import React, { useState, useEffect } from 'react';
import { ShoppingCart, Clock, MapPin, Search, Plus, X, Menu } from 'lucide-react';

function OrderPage() {
  const [activeCategory, setActiveCategory] = useState('Pizzas');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('none');
  const [basket, setBasket] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSent, setOrderSent] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileBasket, setShowMobileBasket] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const categories = [
    'Pizzas', 'Garlic Bread', 'Calzone', 'Kebabs', 'Salads',
    'Cold drinks', 'Happy Meal*', 'Desserts', 'Hot drinks', 'Sauces', 'Orbit*'
  ];

  const pizzas = [
    {
      id: 1,
      name: 'Farm House Xtreme Pizza',
      category: 'Pizzas',
      rating: 5,
      desc: '1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      prices: { Small: 23.90, Medium: 25.90, Large: 27.90 },
      xlPrice: 23.90
    },
    {
      id: 2,
      name: 'Deluxe Pizza',
      category: 'Pizzas',
      rating: 5,
      desc: '1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      prices: { Small: 23.90, Medium: 25.90, Large: 27.90 },
      xlPrice: 32.90
    },
    {
      id: 3,
      name: 'Tandoori Pizza',
      category: 'Pizzas',
      rating: 5,
      desc: '1 McChicken®, 1 Big Mac®, 1 Royal Cheeseburger, 3 medium sized French Fries, 3 cold drinks',
      prices: { Small: 23.90, Medium: 25.90, Large: 27.90 },
      xlPrice: 32.90
    },
    {
      id: 4,
      name: 'Cheesy Garlic Bread',
      category: 'Garlic Bread',
      rating: 4,
      desc: 'Fresh baked bread with melted cheese and garlic butter',
      prices: { Small: 5.90, Medium: 7.90, Large: 9.90 }
    },
    {
      id: 5,
      name: 'Herb Garlic Bread',
      category: 'Garlic Bread',
      rating: 4,
      desc: 'Crispy bread with Italian herbs and garlic',
      prices: { Small: 4.90, Medium: 6.90, Large: 8.90 }
    },
    {
      id: 6,
      name: 'Meat Calzone',
      category: 'Calzone',
      rating: 5,
      desc: 'Folded pizza filled with pepperoni, sausage, and mozzarella',
      prices: { Small: 12.90, Medium: 14.90, Large: 16.90 }
    },
    {
      id: 7,
      name: 'Veggie Calzone',
      category: 'Calzone',
      rating: 4,
      desc: 'Folded pizza with bell peppers, onions, and mushrooms',
      prices: { Small: 11.90, Medium: 13.90, Large: 15.90 }
    },
    {
      id: 8,
      name: 'Chicken Kebab',
      category: 'Kebabs',
      rating: 5,
      desc: 'Grilled chicken with fresh salad and sauce',
      prices: { Small: 8.90, Medium: 10.90, Large: 12.90 }
    },
    {
      id: 9,
      name: 'Lamb Kebab',
      category: 'Kebabs',
      rating: 5,
      desc: 'Tender lamb with vegetables and garlic sauce',
      prices: { Small: 9.90, Medium: 11.90, Large: 13.90 }
    },
    {
      id: 10,
      name: 'Caesar Salad',
      category: 'Salads',
      rating: 4,
      desc: 'Romaine lettuce, croutons, parmesan, Caesar dressing',
      prices: { Small: 6.90, Medium: 8.90, Large: 10.90 }
    },
    {
      id: 11,
      name: 'Greek Salad',
      category: 'Salads',
      rating: 4,
      desc: 'Tomatoes, cucumber, olives, feta cheese',
      prices: { Small: 7.90, Medium: 9.90, Large: 11.90 }
    },
    {
      id: 12,
      name: 'Coca Cola',
      category: 'Cold drinks',
      rating: 3,
      desc: 'Classic Coca Cola',
      prices: { '330ml': 2.50, '500ml': 3.50, '1.5L': 4.90 }
    },
    {
      id: 13,
      name: 'Fanta Orange',
      category: 'Cold drinks',
      rating: 3,
      desc: 'Refreshing orange soda',
      prices: { '330ml': 2.50, '500ml': 3.50, '1.5L': 4.90 }
    },
    {
      id: 14,
      name: 'Kids Pizza Meal',
      category: 'Happy Meal*',
      rating: 4,
      desc: 'Small pizza, fries, and a drink',
      prices: { Regular: 9.90 }
    },
    {
      id: 15,
      name: 'Chicken Nuggets Meal',
      category: 'Happy Meal*',
      rating: 4,
      desc: '6 chicken nuggets with fries and drink',
      prices: { Regular: 8.90 }
    },
    {
      id: 16,
      name: 'Chocolate Fudge Cake',
      category: 'Desserts',
      rating: 5,
      desc: 'Rich chocolate cake with fudge topping',
      prices: { Regular: 5.90 }
    },
    {
      id: 17,
      name: 'Tiramisu',
      category: 'Desserts',
      rating: 5,
      desc: 'Classic Italian dessert with coffee and mascarpone',
      prices: { Regular: 6.90 }
    },
    {
      id: 18,
      name: 'Hot Chocolate',
      category: 'Hot drinks',
      rating: 4,
      desc: 'Rich hot chocolate with whipped cream',
      prices: { Regular: 3.90, Large: 4.90 }
    },
    {
      id: 19,
      name: 'Cappuccino',
      category: 'Hot drinks',
      rating: 4,
      desc: 'Espresso with steamed milk and foam',
      prices: { Regular: 3.50, Large: 4.50 }
    },
    {
      id: 20,
      name: 'BBQ Sauce',
      category: 'Sauces',
      rating: 4,
      desc: 'Smoky barbecue sauce',
      prices: { Regular: 0.90 }
    },
    {
      id: 21,
      name: 'Garlic Mayo',
      category: 'Sauces',
      rating: 4,
      desc: 'Creamy garlic mayonnaise',
      prices: { Regular: 0.90 }
    },
    {
      id: 22,
      name: 'Mint Gum',
      category: 'Orbit*',
      rating: 3,
      desc: 'Fresh mint chewing gum',
      prices: { Pack: 1.50 }
    },
    {
      id: 23,
      name: 'Spearmint Gum',
      category: 'Orbit*',
      rating: 3,
      desc: 'Cool spearmint chewing gum',
      prices: { Pack: 1.50 }
    }
  ];

  const subtotal = basket.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountPercentage = subtotal > 50 ? 0.10 : 0;
  const discount = subtotal * discountPercentage;
  const deliveryFee = subtotal > 30 ? 0 : (subtotal > 0 ? 2.50 : 0);
  const total = subtotal - discount + deliveryFee;

  const addToBasket = (product, size, price) => {
    const newItem = {
      id: Date.now(),
      name: `${product.name} (${size})`,
      price: price,
      qty: 1
    };
    setBasket([...basket, newItem]);
  };

  const removeFromBasket = (itemId) => {
    setBasket(basket.filter(item => item.id !== itemId));
  };

  const handleCheckout = () => {
    setOrderSent(true);
    setShowMobileBasket(false);
    setTimeout(() => {
      setOrderSent(false);
      setShowCheckout(false);
      setBasket([]);
    }, 3000);
  };

  const filteredItems = pizzas.filter(item => {
    const matchesCategory = item.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (sortOrder === 'none') return 0;
    const aPrice = Math.min(...Object.values(a.prices));
    const bPrice = Math.min(...Object.values(b.prices));
    return sortOrder === 'asc' ? aPrice - bPrice : bPrice - aPrice;
  });

  const toggleSortOrder = () => {
    if (sortOrder === 'none') setSortOrder('asc');
    else if (sortOrder === 'asc') setSortOrder('desc');
    else setSortOrder('none');
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[240px_1fr_340px] min-h-screen bg-gray-50 font-sans relative">
        
        <div className="hidden md:block bg-white p-5 border-r border-gray-200">
          <h2 className="text-2xl font-bold mb-7 text-gray-800">Menu</h2>
          
          <ul className="list-none p-0 m-0">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-3 px-4 mb-1 cursor-pointer rounded-md text-[15px] transition-all duration-200 ${
                  activeCategory === cat 
                    ? 'bg-[#1a1f36] text-white font-semibold' 
                    : 'bg-transparent text-gray-600 hover:bg-gray-100'
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>

          <div className="mt-10 bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-xl text-white relative overflow-hidden">
            <div className="absolute top-2.5 right-2.5 bg-white text-gray-900 py-1 px-3 rounded-full text-sm font-bold">
              -20%
            </div>
            <p className="text-[13px] mb-2 text-orange-400 font-semibold">Special Offer</p>
            <p className="text-base font-bold m-0">First Order Discount</p>
            <button className="mt-3 bg-white text-gray-900 border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer font-bold text-lg hover:bg-gray-100 transition-colors">
              <Plus size={20} />
            </button>
          </div>
        </div>

        <div className="py-5 px-4 md:py-7 md:px-10 pb-[100px] md:pb-7">
          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mb-7 gap-4 md:gap-0">
            <h1 className="text-xl md:text-[28px] font-bold text-gray-800 m-0">
              Order from Tandoori Pizza London
            </h1>
            
            <div className="relative w-full md:w-[280px]">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search from menu..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2.5 pr-3.5 pl-[42px] border border-gray-200 rounded-lg text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-stretch md:items-center mb-7 gap-3 md:gap-0">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 m-0">{activeCategory}</h2>
            <button 
              onClick={toggleSortOrder} 
              className={`py-2 px-4 border rounded-md font-semibold text-sm cursor-pointer transition-colors w-full md:w-auto ${
                sortOrder !== 'none' 
                  ? 'bg-emerald-600 text-white border-emerald-600' 
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              Sort by Pricing {sortOrder === 'asc' ? '↑' : sortOrder === 'desc' ? '↓' : ''}
            </button>
          </div>

          {sortedItems.length === 0 ? (
            <div className="bg-white p-10 rounded-xl text-center text-gray-500">
              <p>No items found matching "{searchQuery}"</p>
            </div>
          ) : (
            sortedItems.map((product) => (
              <div key={product.id} className="bg-white p-4 md:p-6 rounded-xl mb-5 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">{product.name}</h3>
                  <div className="text-orange-500 text-lg mb-2">
                    {'🌶️'.repeat(product.rating)}
                  </div>
                  <p className="text-gray-500 text-sm md:text-base leading-relaxed m-0">{product.desc}</p>
                </div>

                <div className="flex flex-col md:flex-row gap-2.5 flex-wrap">
                  {Object.entries(product.prices).map(([size, price]) => (
                    <button
                      key={size}
                      onClick={() => addToBasket(product, size, price)}
                      className="py-2 md:py-2.5 px-4 md:px-5 bg-emerald-600 text-white border-none rounded-md cursor-pointer text-sm font-semibold flex gap-2 items-center justify-between md:justify-start transition-colors hover:bg-emerald-700 w-full md:w-auto"
                    >
                      {size}
                      <span>£{price.toFixed(2)}</span>
                    </button>
                  ))}
                </div>

                {product.xlPrice && (
                  <button
                    onClick={() => addToBasket(product, 'XL Large', product.xlPrice)}
                    className="mt-2.5 py-2 md:py-2.5 px-4 md:px-5 bg-emerald-600 text-white border-none rounded-md cursor-pointer text-sm font-semibold hover:bg-emerald-700 transition-colors w-full md:w-auto"
                  >
                    XL Large with sauces £{product.xlPrice.toFixed(2)}
                  </button>
                )}
              </div>
            ))
          )}
        </div>

        <div className="hidden lg:flex flex-col bg-white border-l border-gray-200 py-7 px-5 h-screen sticky top-0">
          <div className="bg-orange-500 text-white py-3 px-4 rounded-lg flex items-center gap-2.5 mb-5 text-sm font-semibold">
            <Clock size={20} />
            Open until 3:00 AM
          </div>

          <div className="bg-emerald-600 text-white p-5 rounded-xl mb-6">
            <h2 className="text-2xl font-bold m-0 flex items-center gap-2.5">
              <ShoppingCart size={24} />
              My Basket
            </h2>
          </div>

          <div className="flex-1 overflow-y-auto">
            {basket.length === 0 ? (
              <div className="text-center py-10 px-5 text-gray-400">
                <ShoppingCart size={48} className="mx-auto mb-4" />
                <p className="text-base font-semibold mb-2">Your basket is empty</p>
                <p className="text-sm">Add items to get started!</p>
              </div>
            ) : (
              basket.map((item) => (
                <div key={item.id} className="py-4 border-b border-gray-200 flex items-start gap-3">
                  <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {item.qty}x
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <p className="font-semibold text-[15px] m-0 text-gray-800">{item.name}</p>
                      <p className="font-bold text-[15px] m-0 text-gray-800">£{(item.price * item.qty).toFixed(2)}</p>
                    </div>
                    {item.extra && <p className="text-xs text-gray-500 m-0">{item.extra}</p>}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="mt-5">
            {basket.length > 0 && (
              <>
                <div className="flex justify-between mb-3 text-sm">
                  <span className="text-gray-500">Sub Total:</span>
                  <span className="font-semibold">£{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-3 text-sm">
                  <span className="text-gray-500">
                    Discounts: {discount > 0 && <span className="text-xs">(10% off)</span>}
                  </span>
                  <span className={`font-semibold ${discount > 0 ? 'text-emerald-600' : ''}`}>
                    {discount > 0 ? `-£${discount.toFixed(2)}` : '£0.00'}
                  </span>
                </div>
                <div className="flex justify-between mb-5 pb-4 border-b border-gray-200 text-sm">
                  <span className="text-gray-500">
                    Delivery Fee: {deliveryFee === 0 && <span className="text-xs">(Free)</span>}
                  </span>
                  <span className={`font-semibold ${deliveryFee === 0 ? 'text-emerald-600' : ''}`}>
                    {deliveryFee === 0 ? 'FREE' : `£${deliveryFee.toFixed(2)}`}
                  </span>
                </div>
              </>
            )}

            <div className={`py-4 px-5 rounded-lg mb-4 ${basket.length === 0 ? 'bg-gray-200 text-gray-400' : 'bg-orange-500 text-white'}`}>
              <div className="text-[13px] mb-1">Total to pay</div>
              <div className="text-[32px] font-bold">£{total.toFixed(2)}</div>
            </div>

            {basket.length > 0 && subtotal < 50 && (
              <p className="text-xs text-gray-500 text-center mb-3 p-2 rounded-md bg-amber-50">
                💡 Spend £{(50 - subtotal).toFixed(2)} more to get 10% off!
              </p>
            )}

            {basket.length > 0 && subtotal < 30 && (
              <p className="text-xs text-gray-500 text-center mb-3 p-2 rounded-md bg-blue-50">
                🚚 Spend £{(30 - subtotal).toFixed(2)} more for free delivery!
              </p>
            )}

            {basket.length === 0 && (
              <p className="text-[13px] text-gray-400 text-center mb-3">
                Add items to see delivery options
              </p>
            )}

            {basket.length > 0 && (
              <p className="text-[13px] text-gray-500 text-center mb-3">
                Choose your free item.
              </p>
            )}

            <input
              type="text"
              placeholder="Apply Coupon Code here"
              className="w-full p-3 border border-gray-200 rounded-md text-sm mb-4 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
            />

            <div className="grid grid-cols-2 gap-2.5 mb-4">
              <button className="p-3 border-2 border-emerald-600 rounded-lg bg-white cursor-pointer flex flex-col items-center gap-1 transition-colors hover:bg-emerald-50">
                <MapPin size={20} className="text-emerald-600" />
                <span className="text-[13px] font-semibold text-gray-600">Delivery</span>
                <span className="text-[11px] text-gray-500">Starts at 17:40</span>
              </button>
              <button className="p-3 border border-gray-200 rounded-lg bg-white cursor-pointer flex flex-col items-center gap-1 transition-colors hover:bg-gray-50">
                <ShoppingCart size={20} className="text-gray-500" />
                <span className="text-[13px] font-semibold text-gray-600">Collection</span>
                <span className="text-[11px] text-gray-500">Starts at 16:50</span>
              </button>
            </div>

            <button 
              disabled={basket.length === 0}
              onClick={() => setShowCheckout(true)}
              className="w-full p-4 bg-emerald-600 text-white border-none rounded-lg text-base font-bold cursor-pointer transition-colors hover:bg-emerald-700 disabled:bg-gray-300 disabled:cursor-not-allowed"
            >
              Checkout!
            </button>
          </div>
        </div>
      </div>

      {isMobile && (
        <>
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex justify-around z-[100] shadow-[0_-2px_10px_rgba(0,0,0,0.1)]">
            <button 
              className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer text-gray-500 text-xs py-2 px-3 rounded-lg transition-all"
              onClick={() => setShowMobileMenu(true)}
            >
              <Menu size={24} />
              <span>Menu</span>
            </button>
            <button 
              className="flex flex-col items-center gap-1 bg-transparent border-none cursor-pointer text-gray-500 text-xs py-2 px-3 rounded-lg transition-all"
              onClick={() => setShowMobileBasket(true)}
            >
              <div className="relative">
                <ShoppingCart size={24} />
                {basket.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-[11px] font-bold">
                    {basket.length}
                  </span>
                )}
              </div>
              <span>Basket</span>
            </button>
          </div>

          {showMobileMenu && (
            <>
              <div className="fixed inset-0 bg-black/50 z-[200]" onClick={() => setShowMobileMenu(false)} />
              <div className="fixed top-0 left-0 bottom-0 w-4/5 max-w-[300px] bg-white z-[201] overflow-y-auto animate-[slideInLeft_0.3s_ease-out]">
                <div className="p-5 bg-emerald-600 text-white flex justify-between items-center">
                  <h2 className="text-xl font-bold m-0">Menu</h2>
                  <button onClick={() => setShowMobileMenu(false)} className="bg-transparent border-none text-white cursor-pointer p-1">
                    <X size={24} />
                  </button>
                </div>
                <div className="p-5">
                  <ul className="list-none p-0 m-0">
                    {categories.map((cat) => (
                      <li
                        key={cat}
                        onClick={() => {
                          setActiveCategory(cat);
                          setShowMobileMenu(false);
                        }}
                        className={`py-3 px-4 mb-1 cursor-pointer rounded-md text-[15px] transition-all duration-200 ${
                          activeCategory === cat 
                            ? 'bg-[#1a1f36] text-white font-semibold' 
                            : 'bg-transparent text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        {cat}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 bg-gradient-to-br from-gray-700 to-gray-900 p-5 rounded-xl text-white relative overflow-hidden">
                    <div className="absolute top-2.5 right-2.5 bg-white text-gray-900 py-1 px-3 rounded-full text-sm font-bold">
                      -20%
                    </div>
                    <p className="text-[13px] mb-2 text-orange-400 font-semibold">Special Offer</p>
                    <p className="text-base font-bold m-0">First Order Discount</p>
                    <button className="mt-3 bg-white text-gray-900 border-none rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                      <Plus size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {showMobileBasket && (
            <>
              <div className="fixed inset-0 bg-black/50 z-[200]" onClick={() => setShowMobileBasket(false)} />
              <div className="fixed bottom-0 left-0 right-0 bg-white z-[201] max-h-[85vh] overflow-y-auto rounded-t-[20px] shadow-[0_-4px_20px_rgba(0,0,0,0.15)] animate-[slideInUp_0.3s_ease-out]">
                <div className="p-5 bg-emerald-600 text-white rounded-t-[20px] flex justify-between items-center sticky top-0 z-[1]">
                  <h2 className="text-xl font-bold m-0 flex items-center gap-2.5">
                    <ShoppingCart size={24} />
                    My Basket
                  </h2>
                  <button onClick={() => setShowMobileBasket(false)} className="bg-transparent border-none text-white cursor-pointer p-1">
                    <X size={24} />
                  </button>
                </div>
                <div className="p-5">
                  {basket.length === 0 ? (
                    <div className="text-center py-10 px-5 text-gray-400">
                      <ShoppingCart size={48} className="mx-auto mb-4" />
                      <p className="text-base font-semibold mb-2">Your basket is empty</p>
                      <p className="text-sm">Add items to get started!</p>
                    </div>
                  ) : (
                    <>
                      {basket.map((item) => (
                        <div key={item.id} className="py-4 border-b border-gray-200 flex items-start gap-3">
                          <div className="bg-orange-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                            {item.qty}x
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <p className="font-semibold text-[15px] m-0 text-gray-800">{item.name}</p>
                              <p className="font-bold text-[15px] m-0 text-gray-800">£{(item.price * item.qty).toFixed(2)}</p>
                            </div>
                            {item.extra && <p className="text-xs text-gray-500 m-0">{item.extra}</p>}
                          </div>
                          </div>  
                        ))}
                  <div className="mt-5 pt-5 border-t-2 border-gray-200">
                    <div className="flex justify-between mb-3 text-[15px]">
                      <span className="text-gray-500 font-semibold">Sub Total:</span>
                      <span className="font-bold text-base">£{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-3 text-[15px]">
                      <span className="text-gray-500 font-semibold">
                        Discounts: {discount > 0 && <span className="text-xs">(10% off)</span>}
                      </span>
                      <span className={`font-bold text-base ${discount > 0 ? 'text-red-500' : ''}`}>
                        {discount > 0 ? `-£${discount.toFixed(2)}` : '£0.00'}
                      </span>
                    </div>
                    <div className="flex justify-between mb-5 text-[15px]">
                      <span className="text-gray-500 font-semibold">
                        Delivery Fee: {deliveryFee === 0 && <span className="text-xs">(Free)</span>}
                      </span>
                      <span className={`font-bold text-base ${deliveryFee === 0 ? 'text-emerald-600' : ''}`}>
                        {deliveryFee === 0 ? 'FREE' : `£${deliveryFee.toFixed(2)}`}
                      </span>
                    </div>

                    <div className="bg-emerald-700 text-white py-4 px-5 rounded-lg mb-4 flex justify-between items-center text-base font-semibold">
                      <div className="text-white">Total to pay</div>
                      <div className="text-[28px] font-bold">£{total.toFixed(2)}</div>
                    </div>

                    {subtotal < 50 && (
                      <p className="text-xs text-gray-500 text-center mb-3 p-2 rounded-md bg-amber-50">
                        💡 Spend £{(50 - subtotal).toFixed(2)} more to get 10% off!
                      </p>
                    )}

                    {subtotal < 30 && (
                      <p className="text-xs text-gray-500 text-center mb-3 p-2 rounded-md bg-blue-50">
                        🚚 Spend £{(30 - subtotal).toFixed(2)} more for free delivery!
                      </p>
                    )}

                    <button 
                      onClick={handleCheckout} 
                      className="w-full p-4 bg-emerald-600 text-white border-none rounded-lg text-base font-bold cursor-pointer hover:bg-emerald-700 transition-colors"
                    >
                      Checkout!
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  )}

  {showCheckout && !orderSent && (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000] p-5">
      <div className="bg-white rounded-2xl w-full max-w-[400px] max-h-[90vh] overflow-y-auto shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
        <div className="bg-emerald-600 text-white p-5 rounded-t-2xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShoppingCart size={24} />
            <h2 className="m-0 text-2xl font-bold">My Basket</h2>
          </div>
          <button onClick={() => setShowCheckout(false)} className="bg-transparent border-none text-white cursor-pointer p-1">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 md:p-5">
          {basket.map((item) => (
            <div key={item.id} className="py-4 border-b border-gray-200 flex items-start gap-3">
              <div className="bg-orange-500 text-white w-9 h-9 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                {item.qty}x
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <p className="font-semibold text-[15px] m-0 mb-1 text-gray-800">{item.name}</p>
                    {item.extra && <p className="text-xs text-gray-500 m-0">{item.extra}</p>}
                  </div>
                  <div className="flex items-center gap-3">
                    <p className="font-bold text-base m-0 text-gray-800">£{(item.price * item.qty).toFixed(2)}</p>
                    <button onClick={() => removeFromBasket(item.id)} className="bg-transparent border-none text-red-500 cursor-pointer p-1 flex items-center">
                      <X size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-5 pt-5 border-t-2 border-gray-200">
            <div className="flex justify-between mb-3 text-[15px]">
              <span className="text-gray-500 font-semibold">Sub Total:</span>
              <span className="font-bold text-base">£{subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-3 text-[15px]">
              <span className="text-gray-500 font-semibold">Discounts:</span>
              <span className="font-bold text-base text-red-500">
                {discount > 0 ? `-${discount.toFixed(2)}` : '-3.00'}
              </span>
            </div>
            <div className="flex justify-between mb-3 text-[15px]">
              <span className="text-gray-500 font-semibold">Delivery Fee:</span>
              <span className="font-bold text-base">{deliveryFee.toFixed(2)}</span>
            </div>

            <div className="bg-emerald-700 text-white py-4 px-5 rounded-lg mb-4 flex justify-between items-center text-base font-semibold">
              <span className="text-white">Total to pay</span>
              <span className="text-[28px] font-bold">£{total.toFixed(2)}</span>
            </div>

            <p className="text-[13px] text-gray-500 text-center mb-4 flex items-center justify-center gap-2">
              Choose your free item.
              <span className="w-5 h-5 rounded-full bg-gray-300 flex items-center justify-center text-xs text-gray-500">?</span>
            </p>

            <div className="relative mb-4">
              <input 
                type="text" 
                placeholder="Apply Coupon Code here" 
                className="w-full py-3 pr-10 pl-3 border border-gray-200 rounded-lg text-sm outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-emerald-600 border-none text-white cursor-pointer flex items-center justify-center text-lg font-bold">
                ✓
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <button className="py-4 px-3 border-2 border-emerald-600 rounded-lg bg-white cursor-pointer flex flex-col items-center gap-1.5">
                <MapPin size={24} className="text-emerald-600" />
                <span className="text-sm font-bold text-gray-800">Delivery</span>
                <span className="text-[11px] text-gray-500">Starts at 17:40</span>
              </button>
              <button className="py-4 px-3 border border-gray-200 rounded-lg bg-white cursor-pointer flex flex-col items-center gap-1.5">
                <ShoppingCart size={24} className="text-gray-500" />
                <span className="text-sm font-bold text-gray-800">Collection</span>
                <span className="text-[11px] text-gray-500">Starts at 16:50</span>
              </button>
            </div>

            <button 
              onClick={handleCheckout} 
              className="w-full p-4 bg-emerald-600 text-white border-none rounded-lg text-base font-bold cursor-pointer mb-4 hover:bg-emerald-700 transition-colors"
            >
              Checkout!
            </button>

            <div className="bg-[#1a1f36] text-white p-4 rounded-lg text-center text-xs leading-relaxed">
              <div className="mb-1 font-semibold">⚠️</div>
              We are open now, but delivery starts at <strong>18:30</strong> however you may order and collect in store now
            </div>
          </div>
        </div>
      </div>
    </div>
  )}

  {orderSent && (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-[1001] p-5">
      <div className="bg-white rounded-[20px] py-12 px-8 md:py-12 md:px-10 text-center max-w-[400px] w-full shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] animate-[slideIn_0.3s_ease-out]">
        <div className="w-16 md:w-20 h-16 md:h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-[scaleIn_0.5s_ease-out]">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="md:w-12 md:h-12">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
        
        <h2 className="text-2xl md:text-[32px] font-bold text-gray-800 mb-3 m-0">Order Sent!</h2>
        
        <p className="text-base text-gray-500 mb-6 leading-relaxed">
          Your order has been successfully placed. We'll start preparing it shortly!
        </p>

        <div className="flex items-center justify-center gap-2 text-emerald-600 text-sm font-semibold">
          <div className="w-5 h-5 border-2 border-emerald-600 border-t-transparent rounded-full animate-spin"></div>
          Processing...
        </div>
      </div>
    </div>
  )}

  <style jsx>{`
    @keyframes slideIn {
      from {
        transform: translateY(-20px);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    @keyframes scaleIn {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }

    @keyframes slideInLeft {
      from {
        transform: translateX(-100%);
      }
      to {
        transform: translateX(0);
      }
    }

    @keyframes slideInUp {
      from {
        transform: translateY(100%);
      }
      to {
        transform: translateY(0);
      }
    }
  `}</style>
</>
);
}

export default OrderPage