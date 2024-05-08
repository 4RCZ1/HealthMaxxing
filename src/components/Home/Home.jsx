import React, {useEffect, useState} from "react";
import axios from "axios";
import useImage from "use-image";
import {Circle, Image, Layer, Rect, Stage, Text} from "react-konva";

const AmogusImage = () => {
  const [imgNumber, setImgNumber] = useState(0);
  const [communicatNumber] = useState(3);
  const [closestPrescription, setClosestPrescription] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3001/getClosestPrescription');
        console.log(result.data)
        setClosestPrescription(result.data);
      } catch (e) {
        console.error(e);
      }
    };

    fetchData();
  }, []);

  const [image] = useImage(require('./pet.png'));
  const [hat] = useImage(imgNumber === 1 ? require('./hat1.png') : require('./hat2.png'));
  const [communicat] = useImage(communicatNumber === 1 ? require('./communicat1.png') : communicatNumber === 2 ? require('./communicat2.png') : require('./communicat3.png'));
  const [clothes] = useImage(require('./Clothes.png'));
  const [shop] = useImage(require('./shop.png'));
  const [streak] = useImage(require('./Streak.png'));
  const [alarm] = useImage(require('./Alarm.png'));

  const [mainPosition, setMainPosition] = useState({x: 0, y: 540});
  const [hatPosition, setHatPosition] = useState(imgNumber === 1 ? {x: 10, y: 540} : {x: 0, y: 540});
  const [communicatPosition, setCommunicatPosition] = useState(communicatNumber == 1 || communicatNumber == 2 ? {
    x: 150,
    y: 490
  } : {x: 110, y: 490});
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

  const cycleHat = () => {
    setImgNumber((prevNumber) => (prevNumber + 1) % 3);
  }

  return (
    <div style={{margin:"-0.8rem -1.8rem"}}>
    <Stage width={412} height={835} style={{backgroundColor: '#DBE3FF'}}>
      <Layer>
        <Circle fill="white" stroke="white" strokeWidth={30} x={166} y={100} radius={50} scaleY={0.5}/>
        <Circle fill="white" stroke="white" strokeWidth={30} x={226} y={100} radius={50} scaleY={0.5}/>
        <Circle fill="white" stroke="white" strokeWidth={30} x={206} y={80} radius={50} scaleY={0.5}/>

        <Circle fill="white" stroke="white" strokeWidth={30} x={86} y={390} radius={50} scaleY={0.5}/>
        <Circle fill="white" stroke="white" strokeWidth={30} x={166} y={390} radius={50} scaleY={0.5}/>
        <Circle fill="white" stroke="white" strokeWidth={30} x={126} y={370} radius={50} scaleY={0.5}/>

        <Circle fill="white" stroke="white" strokeWidth={30} x={246} y={500} radius={50} scaleY={0.5}/>
        <Circle fill="white" stroke="white" strokeWidth={30} x={326} y={500} radius={50} scaleY={0.5}/>
        <Circle fill="white" stroke="white" strokeWidth={30} x={286} y={480} radius={50} scaleY={0.5}/>

        <Rect x={0} y={755} width={412} height={140} fill="green"/>

      </Layer>

      <Layer>
        <Text text="Witaj Szefie!" x={20} y={20} fontFamily="'Inter', sans-serif" fontSize={48} fill="#445389"/>
        <Text text="Kolejne dni gdy dbasz o swoje zdrowie:" x={20} y={70} width={300} wrap="word"
              fontFamily="'Inter', sans-serif" fontSize={30} fill="#445389"/>
        <Rect x={100} y={150} width={212} height={60} cornerRadius={20} fill="#BDC5E1" stroke="#BDC5E1"
              strokeWidth={10}/>
        <Image image={streak} x={80} y={130}/>
        <Text text="21" x={180} y={150} width={300} wrap="word" fontFamily="'Inter', sans-serif" fontSize={62}
              fill="#445389"/>
        <Text text="Następny lek:" x={20} y={230} width={300} wrap="word" fontFamily="'Inter', sans-serif" fontSize={20}
              fill="#445389"/>
        <Rect x={30} y={270} width={350} height={50} cornerRadius={40} fill="#BDC5E1" stroke="#BDC5E1"
              strokeWidth={10}/>
        <Text text={closestPrescription['Drug.name']} x={60} y={285} width={300} wrap="word" fontFamily="'Inter', sans-serif" fontSize={20}
              fill="#445389"/>
        <Text text={closestPrescription.takeHour + ":00"} x={290} y={280} width={300} wrap="word" fontFamily="'Inter', sans-serif" fontSize={30}
              fill="#445389"/>
        <Image image={alarm} x={240} y={270} onClick={handleClick}/>
      </Layer>

      <Layer>
        <Image image={image} {...mainPosition} onClick={handleClick}/>
        {imgNumber !== 0 ? <Image image={hat} {...hatPosition} onClick={handleClick}/> : null}
        {communicatNumber !== 0 ? <Image image={communicat} {...communicatPosition} onClick={handleClick}/> : null}
      </Layer>

      <Layer>
        <Image image={clothes} x={0} y={760} onClick={cycleHat}/>
        <Image image={shop} x={350} y={760} onClick={handleClick}/>
      </Layer>


    </Stage>
    </div>
  );
};

export default AmogusImage;