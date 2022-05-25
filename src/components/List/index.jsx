import './styles.css'

import Card from "../Card"
import NoCard from '../assets/NoCard.png'

const List = ({ setFilters, newArray, removeTransaction }) => {

    let shadow = null

    newArray.length === 0 ? (shadow = 'shadowList') : (shadow = 'shadowListNone')

    return (
        <div className="container__list">
            <div className="container__list navegation">
                <h2>Resumo financeiro</h2>
                <div className="container__list navegation--button">
                    <button onClick={() => setFilters("Todos")}>Todos</button>
                    <button onClick={() => setFilters("Entrada")}>Entradas</button>
                    <button onClick={() => setFilters("Despesa")}>Despesas</button>
                </div>
            </div>

            <div className={shadow}>
                    <h1> Você ainda não possui nenhum lançamento </h1>
                    <img src={NoCard} alt={NoCard} />
            </div>

            <ul className='transactionList'>
                 {newArray.map((transaction, index) => (
                    <li key={index}> {<Card transaction={transaction} removeTransaction={removeTransaction}/> }</li>
                ))} 
            </ul>
            
        </div>
         
    )
}

export default List