
'use client';

export default function ClothingInfoPanel() {
  const clothingData = {
    name: "Premium Silk Evening Dress",
    price: "$299.99",
    material: "100% Pure Silk",
    sizes: ["XS", "S", "M", "L", "XL"],
    color: "Midnight Blue",
    brand: "Ceylon Elegance"
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xl">
      {/* Clothing Image */}
      <div className="mb-6">
        <img
          src="https://readdy.ai/api/search-image?query=Elegant%20silk%20evening%20dress%20on%20hanger%2C%20premium%20quality%20fabric%20texture%2C%20luxury%20fashion%20photography%2C%20clean%20white%20background%2C%20professional%20product%20photography%20lighting%2C%20high-end%20fashion%20styling&width=300&height=200&seq=clothing-item-001&orientation=landscape"
          alt="Selected Clothing"
          className="w-full h-32 object-cover object-top rounded-2xl"
        />
      </div>

      {/* Clothing Details */}
      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-800 mb-1">{clothingData.name}</h2>
          <p className="text-2xl font-bold text-green-600">{clothingData.price}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-shirt-line text-gray-600"></i>
            </div>
            <div>
              <span className="text-sm text-gray-500">Material</span>
              <p className="font-medium text-gray-800">{clothingData.material}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-palette-line text-gray-600"></i>
            </div>
            <div>
              <span className="text-sm text-gray-500">Color</span>
              <p className="font-medium text-gray-800">{clothingData.color}</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 flex items-center justify-center">
              <i className="ri-store-line text-gray-600"></i>
            </div>
            <div>
              <span className="text-sm text-gray-500">Brand</span>
              <p className="font-medium text-gray-800">{clothingData.brand}</p>
            </div>
          </div>
        </div>

        {/* Available Sizes */}
        <div>
          <span className="text-sm text-gray-500 block mb-2">Available Sizes</span>
          <div className="flex gap-2 flex-wrap">
            {clothingData.sizes.map((size) => (
              <span
                key={size}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {size}
              </span>
            ))}
          </div>
        </div>

        {/* Avatar Measurements */}
        <div className="pt-4 border-t border-gray-100">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Avatar Measurements</h3>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-gray-50 rounded-lg p-2">
              <div className="text-lg font-bold text-gray-800">173 cm</div>
              <div className="text-xs text-gray-500">Height</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-2">
              <div className="text-lg font-bold text-gray-800">91 cm</div>
              <div className="text-xs text-gray-500">Chest</div>
            </div>
            <div className="bg-gray-50 rounded-lg p-2">
              <div className="text-lg font-bold text-gray-800">71 cm</div>
              <div className="text-xs text-gray-500">Waist</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
