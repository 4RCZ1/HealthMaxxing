const AddNewMedicine = () => {
  return (
    <>
      <p style={{marginBottom: "3rem"}} className="header">Dodaj lek ręcznie</p>
      <div className="f-col">
        <div className="f-col">
          <label htmlFor="name">Nazwa leku</label>
          <input id="name" type="text"/>
        </div>
        <div className="f-row" style={{justifyContent: "space-between"}}>
          <div className="f-col" style={{width:"40vw"}}>
            <label htmlFor="frequency">Częstotliwość</label>
            <input id="frequency" type="text"/>
          </div>
          <div className="f-col" style={{width:"40vw"}}>
            <label htmlFor="dosage">Liczba dawek dziennie</label>
            <input id="dosage" type="number"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNewMedicine;