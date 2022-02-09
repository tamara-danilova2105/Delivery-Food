import { dataRecipes } from './dataRecipes'
import icontime from './photo/icon-time.png'
import iconplate from './photo/icon-plate.png'


function Recipes(){
    return(
        <div className='container-recipes'>
            {dataRecipes.map(item => {
                const {id, photo, name, time, quantity, ingredients, description} = item
                return(
                    <div key={id} className='recipes-block'>
                        <div className='recipes'>
                            <h2 className='nameRecipes'>{name}</h2>
                            <img className='imageFood' src={photo} alt={name} width='400px'/>
                        </div>
                        <div className='recipes about'>
                            <span>
                            <img src={icontime} alt='icon-time' width='40px' height='40px'/>
                            <p className='bolder'>Время приготовления - {time}</p>
                            </span>
                            <span>
                            <img src={iconplate} alt='icon-time' width='40px' height='40px'/>
                            <p className='bolder'>Количество порций - {quantity} шт.</p>
                            </span>
                            <p className='ingredients'>{ingredients}</p>
                            <p className=''>{description}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Recipes


