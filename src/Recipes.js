import { useState } from 'react';
import { dataRecipes } from './dataRecipes'
import icontime from './photo/icon-time.png'
import iconplate from './photo/icon-plate.png'
import recipes from './photo/recipes.jfif'


function Recipes(){
    const [showText, setShowText] = useState(false)

    const showTextClick = (item) => {
        item.showMore = !item.showMore
        setShowText(!showText)
    }

    return(
    <div>
        <div className='bannerHomePage'>
            <h1 align="center"className='header margin'>РЕЦЕПТЫ ПОПУЛЯРНЫХ ИТАЛЬЯНСКИХ БЛЮД</h1>
            <img src={recipes} width='100%' alt='BEST PIZZA'/>
        </div>
        <div className='container-recipes'>
            {dataRecipes.map(item => {
                const {id, photo, name, time, quantity, ingredients, description, showMore} = item
                return(
                    <div key={id} className='recipes-block'>
                        <div className='recipes position'>
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
                            <p align="justify">{showMore ? description : description.substring(0, 170) + ' ...'}
                            <button className='shomMorebtn' onClick={() => showTextClick(item)}>{ showMore ? 'скрыть' : 'показать'}</button></p>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
    )
}

export default Recipes


