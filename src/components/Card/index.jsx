import './styles.css'

const Card = ({ transaction, removeTransaction }) => {

  let color = null

  transaction.type === 'Entrada' ? color = 'container-card-green' : color = 'container-card-gray'

    return (
        <div className={color}>
            <div className="container-card-green description">
              <h2>{transaction.description}</h2>
              <p>{transaction.type}</p>
            </div>

            <div className="container-card-green value">
              <h3>R$ {((transaction.price).toFixed(2))} </h3>          
            </div>

            <div className="container-button">
              <button onClick={() => removeTransaction(transaction)} ></button>
            </div>
        </div>
    )
}

export default Card