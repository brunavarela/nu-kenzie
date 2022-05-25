import './styles.css'

const TotalMoney = ({ listTransactions }) => {
    
    const totalPrice = listTransactions.reduce((acc, cur) =>     
                 cur.type === "Entrada" ? 
                (acc + cur.price) : (acc - cur.price)        
    , 0)

    return (
        <div className="container__TotalMoney">
            <div className="container__TotalMoney description">
                <h2>Valor total:</h2>
                <p>O valor se refere ao saldo</p>
            </div>

            <div className="container__TotalMoney value">
                <span>{((totalPrice).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))} </span>
            </div>

        </div>
    )
}

export default TotalMoney