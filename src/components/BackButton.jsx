import { useNavigate } from 'react-router-dom';


const BackButton = () => {
  const navigate = useNavigate();
  return (
    <div className="backButton" onClick={()=>navigate(-1)}/>
  )
}
export default BackButton;