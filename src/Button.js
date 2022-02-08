function Button({filtredFood}) {
    return(
        <div className="btn-container">
            <button className="btnFood" onClick={() => filtredFood('pizza')}>Пицца</button>
            <button className="btnFood" onClick={() => filtredFood('snacks')}>Закуски</button>
            <button className="btnFood" onClick={() => filtredFood('desserts')}>Десерты</button>
            <button className="btnFood" onClick={() => filtredFood('drinks')}>Напитки</button>
        </div>
    )
}

export default Button