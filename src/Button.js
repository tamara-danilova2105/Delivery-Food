function Button({chosenFood}) {
  return(
      <div className="btn-container">
          <button className="btnFood" onClick={() => chosenFood('pizza')}>Пицца</button>
          <button className="btnFood" onClick={() => chosenFood('snacks')}>Закуски</button>
          <button className="btnFood" onClick={() => chosenFood('desserts')}>Десерты</button>
          <button className="btnFood" onClick={() => chosenFood('drinks')}>Напитки</button>
      </div>
  )
}

export default Button