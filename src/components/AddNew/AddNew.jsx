import styles from "./AddNew.module.css";
import {useNavigate} from "react-router-dom";

const AddNew = () => {
  const navigate = useNavigate();

  const ButtonContainer = (props) => {
    return (
      <div className={styles.buttonContainer} onClick={props.onClick}>
        {props.children}
      </div>
    )
  }

  return (
    <>
      <p className="header">Dodaj</p>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexGrow: 1
      }}>
        <div style={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem"
        }}
        >
          <ButtonContainer onClick={()=>navigate('/add/medicine')}> 
            <img src="./pill_max.png" alt="pill_max"/>
            <span>Dodaj lek ręcznie</span>
          </ButtonContainer>
          <ButtonContainer>
            <img src="./hearth_max.png" alt="hearth_max"/>
            <span>Dodaj pomiar ręcznie</span>
          </ButtonContainer>
          <ButtonContainer>
            <img src="./e_recepta_max.png" alt="e_recepta_max"/>
            <span>Dodaj leki przez ereceptę</span>
          </ButtonContainer>
          <ButtonContainer>
            <img src="./watch_max.png" alt="hearth_max"/>
            <span>Dodaj pomiar ze smartwatcha</span>
          </ButtonContainer>
        </div>
      </div>
    </>
  )
}

export default AddNew;