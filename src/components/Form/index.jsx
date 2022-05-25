import "./styles.css";

import { useState } from "react";


const Form = ({ listTransactions, setListTransactions }) => {
  const [userTransaction, setUserTransaction] = useState("");
  const [userValue, setUserValue] = useState(0);
  const [userType, setUserType] = useState("Entrada");


  const addList = (e) => {
    e.preventDefault();

    setListTransactions([
      ...listTransactions,
      { description: userTransaction, price: userValue, type: userType },
    ]);

    setUserTransaction("")
    setUserValue("")
  };

  return (
    <form className="container__form" onSubmit={addList}>
      <div className="container__form description">
        <h3>Descrição</h3>

        <input
          type="text"
          placeholder=" Digite aqui sua descrição"
          value={userTransaction}
          onChange={(event) => setUserTransaction(event.target.value)}
        />

        <span>Ex: Compra de roupas</span>
      </div>

      <div className="container__form botton">
        <div className="container__form value">
          <h3>Valor</h3>
          <input
            type="number"
            placeholder=" 0    R$"
            value={userValue}
            onChange={(event) => setUserValue(Number(event.target.value))}
          />
        </div>

        <div className="container__form valueType">
          <h3>Tipo de valor</h3>
          <select
            name="select"
            onChange={(event) => setUserType(event.target.value)}
          >
            <option>Entrada</option>
            <option>Despesa</option>
          </select>
        </div>
      </div>

      <button type="submit">Inserir valor</button>
    </form>
  );
};

export default Form;