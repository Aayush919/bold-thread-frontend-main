import { useEffect, useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import blackhoodiefront from '../../assets/cutosmized/blackhoodie.jpg';
import blackhoodieback from '../../assets/cutosmized/blackhoodies.avif';
import redhoodiefront from '../../assets/cutosmized/redhoodies.jpg';
import redhoodieback from '../../assets/cutosmized/redhoodieback.jpg';
import { Link, useParams } from 'react-router-dom';
import { useGetGraphicQuery, useGetImageQuery } from '../../redux/Api/Custmization';
import { imgurl } from '../../config/urls';
import axios from 'axios';



const Customized = () => {
  const [customTextFront, setCustomTextFront] = useState('Your Text');
  const [customTextBack, setCustomTextBack] = useState('Your Text');
  const [textColor, setTextColor] = useState('#000000');
  const [productImage, setProductImage] = useState('');
  const [size, setSize] = useState('M');
  const [color, setColor] = useState('');
  const [view, setView] = useState('front');
  const [fontSize, setFontSize] = useState('20px');
  const [fontWeight, setFontWeight] = useState('bold');
  const [fontStyle, setFontStyle] = useState('normal');
  const [currentImage, setCurrentImage] = useState('');
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

  const { data: imageData, isLoading: isLoadingImage, error: imageError } = useGetImageQuery({ type: 'hoodie' });
  const { data: graphicData, isLoading: isLoadingGraphic, error: graphicError } = useGetGraphicQuery();


  useEffect(() => {
    if (imageData && imageData.data && imageData.data.data.length > 0) {
      setColor(imageData.data.data[0].color);
      setProductImage(imageData.data.data[0].front);
      setCurrentImage({ front: imageData.data.data[0].front, back: imageData.data.data[0].back })
    }
  }, [imageData]);



  console.log(imageData)
  const { txnId } = useParams();


  useEffect(() => {
    // Call the backend to check payment status
    axios
      .post(`https://bold-thread.com/api/status/${txnId}`)
      .then((response) => {
        // Handle success or failure response
        if (response.data.success) {
          // Show success message
        } else {
          // Show failure message
        }
      })
      .catch((error) => {
        console.error("Error checking payment status", error);
      });
  }, [txnId]);




  if (isLoadingImage || isLoadingGraphic) return <div role="status" className='flex items-center justify-center m-5'>
    <svg aria-hidden="true" className="w-8 h-8 text-black animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
    </svg>
    <span className="sr-only">Loading...</span>
  </div>

  if (imageError) return <div>Error fetching image: {imageError.message}</div>;
  if (graphicError) return <div>Error fetching graphic: {graphicError.message}</div>;









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

  // const productImages = {
  //   'Hoodie': {
  //     black: {
  //       front: blackhoodiefront,
  //       back: blackhoodieback,
  //     },
  //     red: {
  //       front: redhoodiefront,
  //       back: redhoodieback,
  //       // Add left view image
  //     },
  //   },
  // };


  const handleImageChange = (img) => {
    setCurrentImage(img)
    setView('front')
    setProductImage(img[view]);
  };

  const handleViewChange = (newView) => {
    setView(newView);
    setProductImage(currentImage[newView]);
  };


  const DraggableText = () => {
    const [{ isDragging }, drag] = useDrag(() => ({
      type: 'text',
      item: { text: view === 'front' ? customTextFront : customTextBack, color: view === 'front' ? textColor : textColor },
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
            width: '70px',
            height: '70px',
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
      <div ref={drop} className="relative flex items-center justify-center  rounded-lg h-96">
        {children}
      </div>
    );
  };


  const DropTargets = ({ children }) => {
    const [, drop] = useDrop(() => ({
      accept: 'graphic',
      drop: handleDropg,
    }));

    return (
      <div
        ref={drop}
        className=" bg-transparent backdrop-blur-lg"
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
      <div data-aos="zoom-in" className="flex mb-2 md:mb-0 justify-center items-center gap-4 w-full bg-transparent font-semibold xl:p-5">
        {/* TShirt Card */}
        <Link
          to="/Tshirt"
          className="px-4 py-2  bg-transparent text-black border-2 border-black rounded-lg shadow-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out focus:outline-none flex justify-center items-center"
        >
          <span className="text-sm font-medium">T-Shirt</span>
        </Link>

        {/* Hoodie Card */}
        <Link
          to="/Hoodie"
          className="px-4 py-2  bg-transparent text-black border-2 border-black rounded-lg shadow-md hover:bg-black hover:text-white transition-all duration-300 ease-in-out focus:outline-none flex justify-center items-center"
        >
          <span className="text-sm font-medium">Hoodie</span>
        </Link>
      </div>


      <div className="p-2">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {/* Mockup Preview */}

            <div className="p-2 border border-black bg-transparent backdrop-blur-lg rounded-lg shadow-lg">


              <DropTargets>
                <DropTarget>
                  {/* Product Image Preview */}
                  <div className="relative flex justify-center items-center rounded-lg p-2 ">
                    <img
                      src={`${imgurl}/${productImage}`}
                      alt="Product Preview"
                      className="w-full h-64 object-contain rounded-md"
                    />
                    {/* Draggable Text Overlay */}
                    <DraggableText />
                  </div>
                </DropTarget>
              </DropTargets>

              {/* View Selector */}
              <div className="flex space-x-4 mt-6 justify-center">
                <button
                  onClick={() => handleViewChange('front')}
                  className={`py-2 px-6 rounded-lg text-sm font-medium transition duration-300 ease-in-out
        ${view === 'front' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}
        hover:bg-indigo-600 hover:text-white`}
                >
                  Front
                </button>
                <button
                  onClick={() => handleViewChange('back')}
                  className={`py-2 px-6 rounded-lg text-sm font-medium transition duration-300 ease-in-out
                    ${view === 'back' ? 'bg-indigo-500 text-white' : 'bg-gray-200 text-gray-700'}
                    hover:bg-indigo-600 hover:text-white`}
                >
                  Back
                </button>

              </div>
              {/* Color Selection */}
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2 text-gray-900">Select Color</label>
                <div className="flex gap-2">
                  {imageData && imageData.data && imageData.data.data.length > 0 && imageData?.data?.data?.map((item) => (
                    <button
                      key={item?.color}
                      onClick={() => {
                        setColor(item?.color);
                        handleImageChange({ front: item.front, back: item.back });

                      }}
                      className={`px-4 py-2 rounded-md border text-black ${color === item.color
                        ? 'bg-gray-200 border-black'
                        : 'bg-transparent border-gray-600'
                        } hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black`}
                    >{item.color}</button>

                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2 text-gray-900">Select Size</label>
                <div className="flex gap-2">
                  {sizes.map((sizeOption) => (
                    <button
                      key={sizeOption}
                      onClick={() => setSize(sizeOption)}
                      className={`px-4 py-2 rounded-md border text-black ${size === sizeOption
                        ? 'bg-gray-200 border-black'
                        : 'bg-transparent border-gray-600'
                        } hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black`}
                    >
                      {sizeOption}
                    </button>
                  ))}
                </div>
              </div>


              {/* Font Style Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-900">Font Style</label>
                <div className="flex gap-2">
                  {fontStyles.map((style) => (
                    <button
                      key={style}
                      onClick={() => setFontStyle(style)}
                      className={`px-4 py-2 rounded-md border text-black ${fontStyle === style
                        ? 'bg-gray-200 border-black'
                        : 'bg-transparent border-gray-600'
                        } hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black`}
                    >
                      {style}
                    </button>
                  ))}
                </div>
              </div>




            </div>


            {/* Customization Options */}

            <div className="p-6 border border-black bg-transparent backdrop-blur-lg rounded-lg shadow-lg">
              <h2 className="text-lg font-semibold mb-6 text-black">Customize Your Product</h2>

              {/* Text Input */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-900">Enter Text</label>
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
                  className="w-full p-3 border border-black text-black rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              {/* Text Color */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-900">Text Color</label>
                <input
                  type="color"
                  value={textColor}
                  onChange={(e) => setTextColor(e.target.value)}
                  className="w-full h-10 border border-black bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>




              {/* Font Size Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-900">Font Size</label>
                <div className="flex gap-2">
                  {fontSizes.map((sizeOption) => (
                    <button
                      key={sizeOption}
                      onClick={() => setFontSize(sizeOption)}
                      className={`px-4 py-2 rounded-md border text-black ${fontSize === sizeOption
                        ? 'bg-gray-200 border-black'
                        : 'bg-transparent border-gray-600'
                        } hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black`}
                    >
                      {sizeOption}
                    </button>
                  ))}
                </div>
              </div>

              {/* Font Weight Selection */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2 text-gray-900">Font Weight</label>
                <div className="flex gap-2">
                  {fontWeights.map((weight) => (
                    <button
                      key={weight}
                      onClick={() => setFontWeight(weight)}
                      className={`px-4 py-2 rounded-md border text-black ${fontWeight === weight
                        ? 'bg-gray-200 border-black'
                        : 'bg-transparent border-gray-600'
                        } hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-black`}
                    >
                      {weight}
                    </button>
                  ))}
                </div>
              </div>



              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">
                  Select a Graphic
                </label>
                <div className="flex space-x-4">
                  {graphicData && graphicData.data && graphicData.data.data.length > 0 && graphicData.data.data.map((url, index) => (
                    <img
                      key={index}
                      src={`${imgurl}/${url.Image}`}
                      alt={`Graphic ${index + 1}`}
                      onClick={() => handleAddGraphic(`${imgurl}/${url.Image}`)}
                      className="w-10 h-10 object-cover cursor-pointer border rounded-md"
                    />
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </DndProvider>
  );
};

export default Customized;



