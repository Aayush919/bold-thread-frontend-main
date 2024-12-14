import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const Graphic = ({ graphic, onDelete }) => {
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
        onClick={() => onDelete(graphic.id)}
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

const DropTarget = ({ graphics, onDrop, children }) => {
  const [, drop] = useDrop(() => ({
    accept: 'graphic',
    drop: onDrop,
  }));

  return (
    <div
      ref={drop}
      className="relative flex items-center justify-center bg-gray-100 rounded-lg h-96"
    >
      {children}
      {graphics.map((graphic) => (
        <Graphic key={graphic.id} graphic={graphic} onDelete={onDrop} />
      ))}
    </div>
  );
};

const GraphicComponent = ({ graphics, onAdd, onDelete, onDrop, graphicOptions }) => (
  <div>
    <h2 className="text-lg font-semibold mb-4">Customize Graphics</h2>
    <div className="mb-4">
      <label className="block text-sm font-medium mb-2">Select a Graphic</label>
      <div className="flex space-x-4">
        {graphicOptions.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Graphic ${index + 1}`}
            onClick={() => onAdd(url)}
            className="w-16 h-16 object-cover cursor-pointer border rounded-md"
          />
        ))}
      </div>
    </div>
    <DropTarget graphics={graphics} onDrop={onDrop}>
      <p>Drag and drop graphics here</p>
    </DropTarget>
  </div>
);

export default GraphicComponent;
