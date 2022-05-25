import "./App.css";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import React from "react";
import { motion } from "framer-motion";

import Logo from "../src/components/assets/NuKenzie.png";

import Form from "./components/Form";
import TotalMoney from "./components/TotalMoney";
import List from "./components/List";

import { useState } from "react";

function App() {

  const [listTransactions, setListTransactions] = useState([]);
  const [filters, setFilters] = useState("Todos");

  const newArray = listTransactions.filter(({ type }) =>
    filters === "Todos" ? type !== "Todos" : type === filters
  );

  const removeTransaction = (transaction) => {
    setListTransactions(
      listTransactions.filter((item) => item !== transaction)
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="App">
        <header className="App-header">
          <div className="container__header">
            <img src={Logo} alt={Logo} />
            <Link to="/">
              <button className="headerButton">Sair</button>
            </Link>
          </div>
        </header>

        <main className="main">
          <div className="main__container-Form">
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />

            <TotalMoney listTransactions={listTransactions} />
          </div>

          <div className="main__container-list">
            <List
              setFilters={setFilters}
              newArray={newArray}
              removeTransaction={removeTransaction}
            />
          </div>
        </main>
      </div>
    </motion.div>
  );
}

export default App;
