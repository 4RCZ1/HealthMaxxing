const AddNewMedicine = () => {
  const sugmitAddMedicine = () => {
    const name = document.getElementById("name").value;
    const frequency = document.getElementById("frequency").value;
    const dosage = document.getElementById("dosage").value;
    if (name.length < 1 || frequency.length < 1 || dosage.length < 1) {
      alert("Wszystkie pola muszą być wypełnione");
      return;
    }
    fetch("http://localhost:3001/medicines", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        frequency,
        dosage
      })
    }).then(() => {
      alert("Dodano lek");
      document.getElementById("name").value = "";
      document.getElementById("frequency").value = "";
      document.getElementById("dosage").value = "";
    }).catch(() => {
      alert("Wystąpił błąd");
    });
  }
  return (
    <>
      <p style={{marginBottom: "3rem"}} className="header">Dodaj lek ręcznie</p>
      <div className="f-col" style={{justifyContent: "space-between", flexGrow:1, marginBottom:"80px"}}>
        <div className="f-col">
          <div className="f-col">
            <label htmlFor="name">Nazwa leku</label>
            <input id="name" type="text"/>
          </div>
          <div className="f-row" style={{justifyContent: "space-between", alignItems:"flex-end"}}>
            <div className="f-col" style={{width: "40vw"}}>
              <label htmlFor="frequency">Częstotliwość</label>
              <input id="frequency" type="text"/>
            </div>
            <div className="f-col" style={{width: "40vw"}}>
              <label htmlFor="dosage">Liczba dawek dziennie</label>
              <input id="dosage" type="number"/>
            </div>
          </div>
          <p style={{fontSize:"1.2rem"}}>Opcje szczegółowe</p>
        </div>
        <div className="f-row" style={{justifyContent: "flex-end"}}>
          <button>
            Dodaj
          </button>
        </div>
      </div>
    </>
  )
}

export default AddNewMedicine;