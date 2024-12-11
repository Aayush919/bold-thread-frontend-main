import { useState } from 'react';

const Customized= () => {
  const [customText, setCustomText] = useState('Your Text');
  const [textColor, setTextColor] = useState('#000000');
  const [productImage, setProductImage] = useState('tshirt-white.png'); // Default image
  const [productColor, setProductColor] = useState('#ffffff');
  const [size, setSize] = useState('M');

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const productImages = [
    { name: 'T-Shirt', src: 'tshirt-white.png' },
    { name: 'Hoodie', src: 'hoodie-white.png' },
    { name: 'Jeans', src: 'jeans-blue.png' },
  ];

  return (
    <div className="p-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Mockup Preview */}
          <div className="p-6 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Preview</h2>
            <div className="relative flex items-center justify-center bg-gray-100 rounded-lg h-96">
              <img src={productImage} alt="Product" className="w-full h-full object-cover" style={{ backgroundColor: productColor }} />
              <div
                style={{
                  position: 'absolute',
                  color: textColor,
                  fontSize: '24px',
                  textAlign: 'center',
                  width: '100%',
                  top: '50%',
                  transform: 'translateY(-50%)',
                }}
              >
                {customText}
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="p-6 border border-gray-300 rounded-lg">
            <h2 className="text-lg font-semibold mb-4">Customize Your Product</h2>

            {/* Text Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Enter Text</label>
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="Type your text here"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Text Color */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Text Color</label>
              <input
                type="color"
                value={textColor}
                onChange={(e) => setTextColor(e.target.value)}
                className="w-full h-10 border border-gray-300 rounded-md"
              />
            </div>

            {/* Product Image Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Select Product</label>
              <select
                onChange={(e) => setProductImage(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                {productImages.map((product, index) => (
                  <option key={index} value={product.src}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Size Selector */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex gap-2">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-2 px-4 rounded-md ${size === s ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <button className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customized;
