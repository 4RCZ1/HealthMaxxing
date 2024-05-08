import React, { useState } from 'react';
import { Text, Stage, Layer, Image, Circle, Rect } from 'react-konva';
import useImage from 'use-image';

const AmogusImage = () => {
  const [imgNumber] = useState(2);
  const [communicatNumber] = useState(3);

  const [image] = useImage(require('./pet.png'));
  const [hat] = useImage(imgNumber === 1 ? require('./hat1.png') : require('./hat2.png'));
  const [communicat] = useImage(communicatNumber === 1 ? require('./communicat1.png') : communicatNumber === 2 ? require('./communicat2.png') : require('./communicat3.png'));
  const [clothes] = useImage(require('./Clothes.png'));

  const [mainPosition, setMainPosition] = useState({ x: 0, y: 500 });
  const [hatPosition, setHatPosition] = useState( imgNumber === 1 ? { x: 10, y: 500 } : { x: 0, y: 500 });
  const [communicatPosition, setCommunicatPosition] = useState( communicatNumber == 1 || communicatNumber == 2 ? { x: 150, y: 450 } : { x: 110, y: 450 });
  const handleClick = () => {
    setMainPosition((prevPosition) => ({
      ...prevPosition,
      y: prevPosition.y - 100, // Adjust the amount of space to move up
    }));

    setHatPosition((prevPosition) => ({
      ...prevPosition,
      y: prevPosition.y - 100, // Adjust the amount of space to move up
    }))

    setCommunicatPosition((prevPosition) => ({
      ...prevPosition,
      y: prevPosition.y - 100, // Adjust the amount of space to move up
    }))

    setTimeout(() => {
      setMainPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + 100, // Reset the position back to the original value
      }));
      
      setHatPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + 100, // Reset the position back to the original value
      }))

      setCommunicatPosition((prevPosition) => ({
        ...prevPosition,
        y: prevPosition.y + 100, // Adjust the amount of space to move up
      }))
    }, 400); // Adjust the duration of the movement animation
  };

  return (
    <Stage width={412} height={800} style={{ backgroundColor: '#DBE3FF' }} >
      <Layer>
        <Circle fill="white" stroke="white" strokeWidth={30} x={166} y={100} radius={50} scaleY={0.5} />
        <Circle fill="white" stroke="white" strokeWidth={30} x={226} y={100} radius={50} scaleY={0.5} />
        <Circle fill="white" stroke="white" strokeWidth={30} x={206} y={80} radius={50} scaleY={0.5} />

        <Circle fill="white" stroke="white" strokeWidth={30} x={86} y={300} radius={50} scaleY={0.5} />
        <Circle fill="white" stroke="white" strokeWidth={30} x={166} y={300} radius={50} scaleY={0.5} />
        <Circle fill="white" stroke="white" strokeWidth={30} x={126} y={280} radius={50} scaleY={0.5} />

        <Circle fill="white" stroke="white" strokeWidth={30} x={246} y={500} radius={50} scaleY={0.5} />
        <Circle fill="white" stroke="white" strokeWidth={30} x={326} y={500} radius={50} scaleY={0.5} />
        <Circle fill="white" stroke="white" strokeWidth={30} x={286} y={480} radius={50} scaleY={0.5} />

        <Rect x={0} y={680} width={412} height={120} fill="green" />
        <Image image={clothes} x={0} y={730} onClick={handleClick} />
      </Layer>
      <Layer>
        <Image image={image} {...mainPosition} onClick={handleClick} />
        {imgNumber !== 0 ? <Image image={hat} {...hatPosition} onClick={handleClick} /> : null}
        {communicatNumber !== 0 ? <Image image={communicat} {...communicatPosition} onClick={handleClick} /> : null}
      </Layer>

      <Layer>
        <Text text="Witaj Szefie!" x={20} y={50} fontFamily="'Inter', sans-serif" fontSize={48} fill="#445389" />
        <Text text="Kolejne dni gdy dbasz o swoje zdrowie:" x={20} y={100} width={300} wrap="word" fontFamily="'Inter', sans-serif" fontSize={30} fill="#445389" />

      </Layer>
    </Stage>
  );
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AmogusImage />
      </header>
    </div>
  );
}

export default App;