const AddNewMeasurement = () => {
  return (
    <>
      <p style={{marginBottom: "3rem"}} className="header">Dodaj lek ręcznie</p>
      <div className="f-col">
        <div className="f-col">
          <label htmlFor="name">Nazwa Pomiaru</label>
          <input id="name" type="text"/>
        </div>
        <div className="f-row" style={{justifyContent:"space-between"}}>
          <div className="f-col" style={{marginRight: "20px"}}>
            <label htmlFor="value">Wartość</label>
            <input id="value" type="text"/>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddNewMeasurement;