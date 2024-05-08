import BackButton from "../BackButton";

const AddNewMedicine = () => {
  const sugmitAddMedicine = () => {
    const name = document.getElementById("name").value;
    const takeHours = document.getElementById("takeHours").value.split(",");
    const dosage = document.getElementById("dose").value;
    if (name.length < 1 || takeHours.length < 1 || dosage.length < 1) {
      alert("Wszystkie pola muszą być wypełnione");
      return;
    }
    fetch("http://localhost:3001/addDrugPrescription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        takeHours:{hours:[...takeHours]},
        dosage
      })
    }).then(() => {
      alert("Dodano lek");
      document.getElementById("name").value = "";
      document.getElementById("takeHours").value = "";
      document.getElementById("dose").value = "";
    }).catch(() => {
      alert("Wystąpił błąd");
    });
  }
  return (
    <>
      <div style={{marginBottom: "3rem"}} className="header f-row"><BackButton/> Dodaj lek ręcznie</div>
      <div className="f-col" style={{justifyContent: "space-between", flexGrow:1, marginBottom:"80px"}}>
        <div className="f-col">
          <div className="f-col">
            <label htmlFor="name">*Nazwa leku</label>
            <input id="name" type="text" placeholder="Paracetamol"/>
          </div>
          <div className="f-row" style={{justifyContent: "space-between", alignItems:"flex-end"}}>
            <div className="f-col" style={{width: "40vw"}}>
              <label htmlFor="dose">*Dawka</label>
              <input id="dose" type="number" placeholder="500"/>
            </div>
            <div className="f-col" style={{width: "40vw"}}>
              <label htmlFor="takeHours">*Godziny przyjmowania</label>
              <input id="takeHours" type="text" placeholder="8,16"/>
            </div>
          </div>
          <p style={{fontSize:"1.2rem"}}>Opcje szczegółowe</p>
        </div>
        <div className="f-row" style={{justifyContent: "space-between"}}>
          <p>*Pola obowiązkowe</p>
          <button onClick={sugmitAddMedicine}>
            Dodaj
          </button>
        </div>
      </div>
    </>
  )
}

export default AddNewMedicine;