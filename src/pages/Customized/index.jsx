import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import blackhoodiefront from '../../assets/cutosmized/blackhoodie.jpg';
import blackhoodieback from '../../assets/cutosmized/blackhoodies.avif';
import redhoodiefront from '../../assets/cutosmized/redhoodies.jpg';
import redhoodieback from '../../assets/cutosmized/redhoodieback.jpg';



const Customized = () => {
  const [customTextFront, setCustomTextFront] = useState('Your Text');
  const [customTextBack, setCustomTextBack] = useState('Your Text');
  const [textColor, setTextColor] = useState('#000000');
  const [productImage, setProductImage] = useState(blackhoodiefront);
  const [size, setSize] = useState('M');
  const [color, setColor] = useState('black');
  const [view, setView] = useState('front'); // Updated to include more views
  const [fontSize, setFontSize] = useState('20px');
  const [fontWeight, setFontWeight] = useState('bold');
  const [fontStyle, setFontStyle] = useState('normal');
  const [bendAmount, setBendAmount] = useState(0);

  // Separate positions for each view
  const [position, setPosition] = useState({
    front: { x: 0, y: 0 },
    back: { x: 0, y: 0 },
    right: { x: 0, y: 0 },
    left: { x: 0, y: 0 },
  });

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const fontSizes = ['16px', '18px', '20px', '24px', '28px'];
  const fontWeights = ['normal', 'bold', 'bolder', 'lighter'];
  const fontStyles = ['normal', 'italic', 'oblique'];

  const productImages = {
    'Hoodie': {
      black: {
        front: blackhoodiefront,
        back: blackhoodieback,
        right: "https://www.promotrenz.co.nz/wp-content/uploads/2014/06/ZHH-premium-zip-hoodie-black-right-side-hood-down.jpg", // Add right view image
        left: "https://www.seekpng.com/png/detail/113-1132863_black-hoodie-side-png.png"   // Add left view image
      },
      red: {
        front: redhoodiefront,
        back: redhoodieback,
        // Add left view image
      },
    },
  };

  const availableColors = {
    black: ['#000000', '#FFFFFF'],
    red: ['#FF0000', '#FFFFFF'],
  };

  const handleImageChange = (productName) => {
    setView('front');
    setProductImage(productImages[productName][color]?.[view] || productImages[productName].black.front);
  };

  const handleViewChange = (newView) => {
    setView(newView);
    setProductImage(productImages['Hoodie'][color]?.[newView] || productImages['Hoodie'].black.front);
  };


  const DraggableText = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'text',
      item: { text: view === 'front' ? customTextFront : customTextBack, color: textColor },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    return (
      <div
        ref={drag}
        style={{
          position: 'absolute',
          top: position[view].y,
          left: position[view].x,
          color: textColor,
          fontSize: fontSize,
          fontWeight: fontWeight,
          fontStyle: fontStyle,
          opacity: isDragging ? 0.5 : 1,
          transform: `rotate(${bendAmount}deg)`, // Circular bend effect
        }}
      >
        {view === 'front' ? customTextFront : view === 'back' ? customTextBack : view === 'right' ? customTextFront : customTextBack}
      </div>
    );
  };

  const handleDrop = (item, monitor) => {
    const delta = monitor.getDifferenceFromInitialOffset();
    if (delta) {
      setPosition((prev) => ({
        ...prev,
        [view]: {
          x: Math.round(prev[view].x + delta.x),
          y: Math.round(prev[view].y + delta.y),
        },
      }));
    }
  };

  const DropTarget = ({ children }) => {
    const [, drop] = useDrop(() => ({
      accept: 'text',
      drop: handleDrop,
    }));

    return (
      <div ref={drop} className="relative flex items-center justify-center bg-gray-100 rounded-lg h-96">
        {children}
      </div>
    );
  };

  const clearText = () => {
    if (view === 'front') {
      setCustomTextFront('');
    } else if (view === 'back') {
      setCustomTextBack('');
    }
  };









  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mockup Preview */}
            <div className="p-6 border border-gray-300 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Preview</h2>
              <DropTarget>
                {/* Product Image Preview */}
                <img src={productImage} alt="Product Preview" className="w-64 h-64 object-cover" />
                {/* Draggable Text Overlay */}
                <DraggableText />
              </DropTarget>

              {/* View Selector */}
              <div className="flex space-x-4 mt-4">
                <button onClick={() => handleViewChange('front')} className={`py-2 px-4 rounded-md ${view === 'front' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Front</button>
                <button onClick={() => handleViewChange('back')} className={`py-2 px-4 rounded-md ${view === 'back' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Back</button>
                <button onClick={() => handleViewChange('right')} className={`py-2 px-4 rounded-md ${view === 'right' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Right</button>
                <button onClick={() => handleViewChange('left')} className={`py-2 px-4 rounded-md ${view === 'left' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Left</button>
              </div>

              {/* Clear Text Button */}
              <button onClick={clearText} className="mt-4 py-2 px-4 bg-red-500 text-white rounded-md">Clear Text</button>
            </div>

            {/* Customization Options */}
            <div className="p-6 border border-gray-300 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Customize Your Product</h2>

              {/* Text Input */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Enter Text</label>
                <input
                  type="text"
                  value={view === 'front' ? customTextFront : customTextBack}
                  onChange={(e) => {
                    if (view === 'front') {
                      setCustomTextFront(e.target.value);
                    } else {
                      setCustomTextBack(e.target.value);
                    }
                  }}
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

              {/* Size Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Select Size</label>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {sizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Color Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Select Color</label>
                <select
                  value={color}
                  onChange={(e) => {
                    setColor(e.target.value);
                    handleImageChange('Hoodie'); // Update image when color changes
                  }}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  <option value="black">Black</option>
                  <option value="red">Red</option>
                </select>
              </div>

              {/* Font Size Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Font Size</label>
                <select
                  value={fontSize}
                  onChange={(e) => setFontSize(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {fontSizes.map((size) => (
                    <option key={size} value={size}>{size}</option>
                  ))}
                </select>
              </div>

              {/* Font Weight Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Font Weight</label>
                <select
                  value={fontWeight}
                  onChange={(e) => setFontWeight(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {fontWeights.map((weight) => (
                    <option key={weight} value={weight}>{weight}</option>
                  ))}
                </select>
              </div>

              {/* Font Style Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Font Style</label>
                <select
                  value={fontStyle}
                  onChange={(e) => setFontStyle(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {fontStyles.map((style) => (
                    <option key={style} value={style}>{style}</option>
                  ))}
                </select>
              </div>

              {/* Bend Amount Selection */}
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Bend Amount (Degrees)</label>
                <input
                  type="number"
                  value={bendAmount}
                  onChange={(e) => setBendAmount(Number(e.target.value))}
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Customized;



