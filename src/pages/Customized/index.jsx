import { useEffect, useState } from 'react';
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
  const [view, setView] = useState('front');
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


  const [graphics, setGraphics] = useState({
    front: [],
    back: [],
  });

  const graphicOptions = [
    'https://images-workbench.99static.com/r-CF6az9N-thLE033Ytq_2J9KSE=/99designs-contests-attachments/76/76070/attachment_76070644',
    'https://images-platform.99static.com//_xj6HIW6K7zenjzRNAbMpfG9120=/0x0:1500x1500/fit-in/590x590/99designs-contests-attachments/144/144728/attachment_144728684',
  ];


  const handleAddGraphic = (url) => {
    setGraphics((prev) => ({
      ...prev,
      [view]: [...prev[view], { id: Date.now(), src: url, x: 100, y: 100 }],
    }));
  };

  const handleDropg = (item, monitor) => {
    const delta = monitor.getDifferenceFromInitialOffset();
    if (delta) {
      setGraphics((prev) => ({
        ...prev,
        [view]: prev[view].map((graphic) =>
          graphic.id === item.id
            ? {
              ...graphic,
              x: Math.round(graphic.x + delta.x),
              y: Math.round(graphic.y + delta.y),
            }
            : graphic
        ),
      }));
    }
  };

  const handleDeleteGraphic = (id) => {
    setGraphics((prev) => ({
      ...prev,
      [view]: prev[view].filter((graphic) => graphic.id !== id),
    }));
  };


  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];
  const fontSizes = ['16px', '18px', '20px', '24px', '28px'];
  const fontWeights = ['normal', 'bold', 'bolder', 'lighter'];
  const fontStyles = ['normal', 'italic', 'oblique'];

  const productImages = {
    'Hoodie': {
      black: {
        front: blackhoodiefront,
        back: blackhoodieback,
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
      item: { text: view === 'front' ? customTextFront : customTextBack, color: view === 'front' ? textColor : textColorBack },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }));

    useEffect(() => {
      window.scrollTo(0, 0); // Scroll to the top-left corner
    }, []);

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
        {view === 'front' ? customTextFront : view === 'back' ? customTextFront : customTextBack}
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

  const Graphic = ({ graphic }) => {
    const [, drag] = useDrag(() => ({
      type: 'graphic',
      item: graphic,
    }));

    return (
      <div
        ref={drag}
        style={{
          position: 'absolute',
          top: graphic.y,
          left: graphic.x,
        }}
      >
        <img
          src={graphic.src}
          alt="Graphic"
          style={{
            width: '100px',
            height: '100px',
          }}
        />
        <button
          onClick={() => handleDeleteGraphic(graphic.id)}
          style={{
            position: 'absolute',
            top: -10,
            right: -10,
            backgroundColor: 'red',
            color: 'white',
            borderRadius: '50%',
            border: 'none',
            cursor: 'pointer',
            width: '20px',
            height: '20px',
          }}
        >
          ×
        </button>
      </div>
    );
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

  const DropTargets = ({ children }) => {
    const [, drop] = useDrop(() => ({
      accept: 'graphic',
      drop: handleDropg,
    }));

    return (
      <div
        ref={drop}
        className="relative flex items-center justify-center bg-gray-100 rounded-lg h-96"
      >
        {children}
        {graphics[view].map((graphic) => (
          <Graphic key={graphic.id} graphic={graphic} />
        ))}
      </div>
    );
  };









  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mockup Preview */}
            <div className="p-6 border border-gray-300 rounded-lg">
              <h2 className="text-lg font-semibold mb-4">Preview</h2>
              <DropTargets>
                <DropTarget>
                  {/* Product Image Preview */}
                  <img src={productImage} alt="Product Preview" className="w-64 h-64 object-cover" />
                  {/* Draggable Text Overlay */}
                  <DraggableText />
                </DropTarget>
              </DropTargets>

              {/* View Selector */}
              <div className="flex space-x-4 mt-4">
                <button onClick={() => handleViewChange('front')} className={`py-2 px-4 rounded-md ${view === 'front' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Front</button>
                <button onClick={() => handleViewChange('back')} className={`py-2 px-4 rounded-md ${view === 'back' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}`}>Back</button>

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
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Select a Graphic
          </label>
          <div className="flex space-x-4">
            {graphicOptions.map((url, index) => (
              <img
                key={index}
                src={url}
                alt={`Graphic ${index + 1}`}
                onClick={() => handleAddGraphic(url)}
                className="w-16 h-16 object-cover cursor-pointer border rounded-md"
              />
            ))}
          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Customized;



