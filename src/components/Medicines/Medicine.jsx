import {useParams} from 'react-router-dom';
import medicines from './medicinesStub.json';
import BackButton from "../BackButton";

const Medicine = () => {
  const {id} = useParams();
  const medicine = medicines.find(medicine => medicine.drugId === parseInt(id));
  const GetSlashX = () => {
    return (
      <>
        <span>/ </span>
        <span style={{color: "#D71010"}}>X</span>
      </>
    )
  }
  return (
    <>
      <div className="header f-row"><BackButton/>{medicine.name}</div>
      {medicine.takeHours.map((hour, index) => {
        return (
          <div className="medicineEntry" key={index}>
            <div className="header">{hour}:00</div>
            <div className="header"><span
              style={{color: "#09A310"}}>✓</span>{!medicine.takes[index] && GetSlashX()}</div>
          </div>
        )
      })}
    </>
  )
}
export default Medicine;