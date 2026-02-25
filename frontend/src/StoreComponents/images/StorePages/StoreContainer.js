import React, { useState } from "react";
import RealityPage, { VirtualReality } from "./virtualReal";
import SpeakersStore, { speakers } from "./speakers";
import LaptopPage, { LaptopStore } from "./laptops";
import GamingPage, { Controller } from "./gaming";
import PlantsPage, { PlantsStore } from "./plants";
import PhonesPage, { PhonesStore } from "./phones";
import { Search, SlidersHorizontal, Heart, ChevronDown, X } from 'lucide-react';

import { ShoppingCartOutlined } from "@ant-design/icons"
import { FloatButton } from "antd";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export const productdata = VirtualReality.concat(speakers).concat(LaptopStore).concat(Controller).concat(PlantsStore).concat(PhonesStore)
const MyStore = () => {

  return (
    <div className="entireStore">

      <article>
        <StoreProducts />
      </article>
    </div>
  )
}
const StoreProducts = () => {
  const [virtualStore] = useState(VirtualReality)
  const [speakerItem] = useState(speakers)
  const [singlePlant] = useState(PlantsStore)
  const [myLaptop] = useState(LaptopStore)
  const [gameController] = useState(Controller)
  const [singlePhone] = useState(PhonesStore)
  const products = VirtualReality.concat(speakers).concat(LaptopStore).concat(Controller).concat(PlantsStore).concat(PhonesStore)
  
  const cart = useSelector((state) => state.cart)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Premium Audio")
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedSize, setSelectedSize] = useState("")
  const categories = [
    { name: 'Premium Audio', count: 28 },
    { name: 'Wearable Tech', count: 45 },
    { name: 'Gaming', count: 34 },
    { name: 'Computing', count: 67 },
    { name: 'Mobile Devices', count: 52 },
    { name: 'Plants', count: 28 }
  ];


      const stores = [
        { title:"Wearable Tech", data: virtualStore, Component: RealityPage },
        { title:"Premium Audio", data: speakerItem, Component: SpeakersStore },
        { title:"Computing", data: myLaptop, Component: LaptopPage },
        { title:"Gaming", data: gameController, Component: GamingPage },
        { title:"Plants", data: singlePlant, Component: PlantsPage },
        { title:"Mobile Devices", data: singlePhone, Component: PhonesPage },
      ]


  const getTotalProducts = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
 const [activeFilters, setActiveFilters] = useState(['Price range: $50 - 1500', 'Size: Medium', 'Luxury']);
 const removeFilter = (filter) => {
    setActiveFilters(prev => prev.filter(f => f !== filter));
  };

  const filteredProducts = stores.filter(product => {
    if (selectedCategory && product.title !== selectedCategory) return false;
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    if (selectedSize && product.size !== selectedSize) return false;
    // if (searchQuery && !product.name.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });
  return (
    <>


      <div className="fullStore">
        <h1>Virtual Reality</h1>
        <div className="deals-container allproducts">
          {virtualStore.map((vritem) => {
            return (
              <RealityPage key={vritem.id} {...vritem} />
            )
          })}
        </div>
      </div>
      <div className="fullStore">
        <h1>Speakers</h1>
        <div className="deals-container allproducts">
          {speakerItem.map((speaker) => {
            return (
              <SpeakersStore key={speaker.id} {...speaker} />
            )
          })}
        </div>
      </div>
      <div className="fullStore">
        <h1>Laptops</h1>
        <div className="deals-container allproducts">
          {myLaptop.map((screen) => {
            return (
              <LaptopPage key={screen.id} {...screen} />
            )
          })}
        </div>
      </div>
      <div className="fullstore">
        <h1>PlayStore Controllers</h1>
        <div className="deals-container allproducts">
          {gameController.map((game) => {
            return (
              <GamingPage key={game.id} {...game} />
            )
          })}
        </div>
      </div>


      <div className="fullStore">
        <h1>Plants Store</h1>
        <div className="deals-container allproducts">
          {singlePlant.map((plant) => {
            return (
              <PlantsPage key={plant.id} {...plant} />
            )
          })}
        </div>
      </div>
      <div className="fullStore">
        <h1>Phones Store</h1>
        <div className="deals-container allproducts">
          {singlePhone.map((phone) => {
            return (
              <PhonesPage key={phone.id} {...phone} />
            )
          })}
        </div>
      </div>

      <Link to="/checkout"><FloatButton shape="circle" badge={{ count: getTotalProducts() || 0, color: "orangered" }} icon={<ShoppingCartOutlined style={{ right: 24 + 70 + 70 }} />} /></Link>

      <div className="bg-[#f5e2c889] min-h-screen py-12">
        <div className="max-w-[1600px] mx-auto px-6">
          <div className="flex flex-wrap gap-8">
            {/* Sidebar */}
            <div className="w-64 flex-shrink-0">
              <div className="bg-[#F5E2C8] rounded-lg p-6 sticky top-6">
                {/* Filters Header */}
                <div className="flex items-center gap-2 mb-6">
                  <SlidersHorizontal className="w-5 h-5 text-black" />
                  <h2 className="text-white font-semibold">Filters</h2>
                </div>

                {/* Search */}
                <div className="relative mb-8">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-[#0A0A0A] border border-gray-800 rounded-lg pl-10 pr-4 py-2.5 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#00D991]"
                  />
                </div>

                {/* Categories */}
                <div className="mb-8">
                  <h3 className="text-[#BD1E1E] text-xs uppercase tracking-wider mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left flex items-center justify-between py-2 px-3 rounded-lg transition-colors ${selectedCategory === category.name
                          ? 'text-white bg-[#1A1A1A]'
                          : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                          }`}
                      >
                        <span className="text-sm">
                          {selectedCategory === category.name && '• '}
                          {category.name}
                        </span>
                        <span className="text-xs text-gray-600">{category.count}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-8">
                  <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-6">Price</h3>
                  {/* <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  min={0}
                  max={2000}
                  step={50}
                  className="mb-4"
                /> */}
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">$</span>
                      <span className="text-white">{priceRange[0]}</span>
                    </div>
                    <span className="text-gray-600">-</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-500">$</span>
                      <span className="text-white">{priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Size */}
                <div>
                  <h3 className="text-gray-400 text-xs uppercase tracking-wider mb-4">Size</h3>
                  <div className="grid grid-cols-4 gap-2">
                    {['S', 'M', 'L', 'XL'].map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`py-2 rounded-lg text-sm font-medium transition-colors ${selectedSize === size
                          ? 'bg-white text-black'
                          : 'bg-[#1A1A1A] text-gray-400 hover:text-white'
                          }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
               {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-white text-4xl font-bold mb-6">{selectedCategory}</h1>

              {/* Active Filters */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 flex-wrap">
                  {activeFilters.map((filter, index) => (
                    <div
                      key={index}
                      className="bg-[#1A1A1A] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2"
                    >
                      <span>{filter}</span>
                      <button
                        onClick={() => removeFilter(filter)}
                        className="hover:text-[#00D991] transition-colors"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <button className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                    Default Sorting
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors">
                    Categories
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {filteredProducts.map(({ title, data, Component }) => (
      <div  key={title}>
        <h1>{title}</h1>
        <div >
          {data.map((item) => (
            <Component key={item.id} {...item} />
          ))}
        </div>
      </div>
    ))}
  </div>
  {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-[#BD1E1E] text-lg">No products found matching your filters</p>
              </div>
            )}
            </div>
                  

          
          </div>
        </div>

      </div>

    </>
  )
}

export default MyStore