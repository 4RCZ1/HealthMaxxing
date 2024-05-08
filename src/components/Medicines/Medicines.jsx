import { useNavigate } from "react-router-dom";
import medicines from './medicinesStub.json';

const Medicines = () => {
  const navigate = useNavigate();
  const MedicineEntry = ({medicine}) => {
    return (
      <div className="medicineEntry" id={medicine.drugId} onClick={()=>navigate(`/medications/${medicine.drugId}`)}>
        <div className="header">{medicine.name}</div>
        <div className="f-col" style={{textAlign:"center"}}>
          <div className="medicineEntry__dose">{medicine.takes.length}/{medicine.takeHours.length}</div>
          <div className="medicineEntry__time">{medicine.takeHours[medicine.takes.length] ? medicine.takeHours[medicine.takes.length]+":00" : "✓"}</div>
        </div>
      </div>
    )
  }
  return (
    <>
      <p className="header">Twoje Leki</p>
      {medicines.map((medicine, index) => {
        return (
          <MedicineEntry key={index} medicine={medicine}/>
        )
      })}
    </>
  )
}

export default Medicines;