
'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ClothingItem {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function Home() {
  const [selectedItems, setSelectedItems] = useState<ClothingItem[]>([]);
  const [showItemDetail, setShowItemDetail] = useState<ClothingItem | null>(null);

  const clothingItems: ClothingItem[] = [
    {
      id: 1,
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image: "https://readdy.ai/api/search-image?query=modern%20cotton%20t-shirt%20on%20white%20background%2C%20product%20photography%2C%20minimal%20style%2C%20soft%20lighting%2C%20clean%20aesthetic&width=300&height=400&seq=1&orientation=portrait",
      category: "Tops"
    },
    {
      id: 2,
      name: "Slim Fit Jeans",
      price: 89.99,
      image: "https://readdy.ai/api/search-image?query=dark%20blue%20denim%20jeans%20on%20white%20background%2C%20product%20photography%2C%20modern%20style%2C%20crisp%20details%2C%20clean%20minimalist%20background&width=300&height=400&seq=2&orientation=portrait",
      category: "Bottoms"
    },
    {
      id: 3,
      name: "Casual Blazer",
      price: 149.99,
      image: "https://readdy.ai/api/search-image?query=elegant%20casual%20blazer%20jacket%20on%20white%20background%2C%20product%20photography%2C%20sophisticated%20style%2C%20clean%20lighting%2C%20professional%20look&width=300&height=400&seq=3&orientation=portrait",
      category: "Outerwear"
    },
    {
      id: 4,
      name: "Summer Dress",
      price: 69.99,
      image: "https://readdy.ai/api/search-image?query=beautiful%20summer%20dress%20on%20white%20background%2C%20product%20photography%2C%20elegant%20fabric%20flow%2C%20soft%20colors%2C%20clean%20minimalist%20styling&width=300&height=400&seq=4&orientation=portrait",
      category: "Dresses"
    },
    {
      id: 5,
      name: "Leather Jacket",
      price: 199.99,
      image: "https://readdy.ai/api/search-image?query=black%20leather%20jacket%20on%20white%20background%2C%20product%20photography%2C%20edgy%20modern%20style%2C%20premium%20quality%2C%20clean%20professional%20lighting&width=300&height=400&seq=5&orientation=portrait",
      category: "Outerwear"
    },
    {
      id: 6,
      name: "Athletic Shorts",
      price: 39.99,
      image: "https://readdy.ai/api/search-image?query=athletic%20sports%20shorts%20on%20white%20background%2C%20product%20photography%2C%20modern%20activewear%2C%20clean%20design%2C%20professional%20lighting%20setup&width=300&height=400&seq=6&orientation=portrait",
      category: "Activewear"
    }
  ];

  const handleAddToCart = (item: ClothingItem) => {
    if (!selectedItems.find(selected => selected.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    }
    setShowItemDetail(null);
  };

  const handleRemoveFromCart = (itemId: number) => {
    setSelectedItems(selectedItems.filter(item => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return selectedItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-900" style={{fontFamily: 'var(--font-pacifico)'}}>
              Ceylon Crush
            </h1>
            <div className="relative">
              <div className="w-10 h-10 flex items-center justify-center">
                <i className="ri-shopping-cart-line text-2xl text-gray-900 cursor-pointer"></i>
              </div>
              {selectedItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {selectedItems.length}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Clothing Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Style</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {clothingItems.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                     onClick={() => setShowItemDetail(item)}>
                  <div className="aspect-[3/4] relative">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{item.category}</p>
                    <p className="text-lg font-bold text-green-600">${item.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Cart and Avatar Creation */}
          <div className="lg:col-span-1">
            {/* Selected Items Cart */}
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Selected Items</h3>
              {selectedItems.length === 0 ? (
                <p className="text-gray-600">No items selected yet</p>
              ) : (
                <div className="space-y-3">
                  {selectedItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3 bg-white rounded-lg p-3">
                      <img src={item.image} alt={item.name} className="w-12 h-16 object-cover object-top rounded" />
                      <div className="flex-1">
                        <p className="font-medium text-sm text-gray-900">{item.name}</p>
                        <p className="text-green-600 font-semibold">${item.price}</p>
                      </div>
                      <button 
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="w-6 h-6 flex items-center justify-center text-red-500 hover:text-red-700"
                      >
                        <i className="ri-close-line text-lg"></i>
                      </button>
                    </div>
                  ))}
                  <div className="border-t pt-3 mt-3">
                    <p className="text-lg font-bold text-gray-900">Total: ${getTotalPrice()}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Avatar Creation */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Create Your Own Avatar</h3>
              <AvatarForm selectedItems={selectedItems} />
            </div>
          </div>
        </div>
      </div>

      {/* Item Detail Modal */}
      {showItemDetail && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-gray-900">{showItemDetail.name}</h3>
              <button 
                onClick={() => setShowItemDetail(null)}
                className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>
            <img 
              src={showItemDetail.image} 
              alt={showItemDetail.name}
              className="w-full h-64 object-cover object-top rounded-lg mb-4"
            />
            <div className="space-y-3">
              <p className="text-gray-600">Category: {showItemDetail.category}</p>
              <p className="text-gray-600">Material: Premium Cotton Blend</p>
              <p className="text-gray-600">Available Sizes: XS, S, M, L, XL</p>
              <p className="text-2xl font-bold text-green-600">${showItemDetail.price}</p>
              <button 
                onClick={() => handleAddToCart(showItemDetail)}
                className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap"
              >
                Add to Selection
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function AvatarForm({ selectedItems }: { selectedItems: any[] }) {
  const [formData, setFormData] = useState({
    height: '',
    chestSize: '',
    waistSize: '',
    skinTone: 'medium',
    gender: 'male',
    facePhoto: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({
        ...formData,
        facePhoto: e.target.files[0]
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.height || !formData.chestSize || !formData.waistSize) {
      alert('Please fill in all measurements');
      return;
    }
    
    const queryParams = new URLSearchParams({
      height: formData.height,
      chest: formData.chestSize,
      waist: formData.waistSize,
      skinTone: formData.skinTone,
      gender: formData.gender,
      items: JSON.stringify(selectedItems.map(item => item.id))
    });
    
    window.location.href = `/avatar-preview?${queryParams.toString()}`;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            onClick={() => setFormData({...formData, gender: 'male'})}
            className={`p-3 rounded-lg border-2 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap ${
              formData.gender === 'male'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <i className="ri-user-line"></i>
            <span>Male</span>
          </button>
          <button
            type="button"
            onClick={() => setFormData({...formData, gender: 'female'})}
            className={`p-3 rounded-lg border-2 transition-colors flex items-center justify-center space-x-2 whitespace-nowrap ${
              formData.gender === 'female'
                ? 'border-green-500 bg-green-50 text-green-700'
                : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <i className="ri-user-3-line"></i>
            <span>Female</span>
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          placeholder="170"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Chest Size (cm)</label>
        <input
          type="number"
          name="chestSize"
          value={formData.chestSize}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          placeholder="90"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Waist Size (cm)</label>
        <input
          type="number"
          name="waistSize"
          value={formData.waistSize}
          onChange={handleInputChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
          placeholder="75"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Skin Tone</label>
        <div className="relative">
          <select
            name="skinTone"
            value={formData.skinTone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm appearance-none"
          >
            <option value="light">Light</option>
            <option value="medium">Medium</option>
            <option value="tan">Tan</option>
            <option value="dark">Dark</option>
          </select>
          <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 flex items-center justify-center pointer-events-none">
            <i className="ri-arrow-down-s-line text-gray-500"></i>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Face Photo</label>
        <div className="relative">
          <input
            type="file"
            name="facePhoto"
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
            id="face-photo"
          />
          <label
            htmlFor="face-photo"
            className="w-full flex items-center justify-center px-3 py-2 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors text-sm"
          >
            <i className="ri-upload-2-line mr-2"></i>
            {formData.facePhoto ? formData.facePhoto.name : 'Choose Photo'}
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors whitespace-nowrap"
      >
        Generate Avatar
      </button>
    </form>
  );
}
