import classic from './photo/classic.jfif'
import hawaiian from './photo/hawaiian.jfif'
import margaret from './photo/margaret.jfif'
import mexican from './photo/mexican.jfif'
import chef from './photo/chef.jfif'
import pepperoni from './photo/pepperoni.jfif'
import frenchFries from './photo/frenchFries.jfif'
import friedPotatoes from './photo/friedPotatoes.jfif'
import wings from './photo/wings.jfif'
import greekSalad from './photo/greekSalad.jfif'
import сaesarSalad from './photo/сaesarSalad.jfif'
import tomatoSoup from './photo/tomatoSoup.jfif'
import donut from './photo/donut.jfif'
import cheesecake from './photo/cheesecake.jfif'
import muffin from './photo/muffin.jfif'
import cappuccino from './photo/cappuccino.jfif'
import cola from './photo/cola.jfif'
import juice from './photo/juice.jfif'

import iconPizza from './photo/iconPizza.png'
import iconSnack from './photo/iconSnack.png'
import iconSalad from './photo/iconSalad.png'
import iconDesert from './photo/iconDesert.png'
import iconCoffe from './photo/iconCoffe.png'
import iconDrinks from './photo/iconDrinks.png'

export const data = [
    {
        id: 1,
        count: 1,
        icon: iconPizza,
        category: 'pizza',
        photo: classic,
        nameDish: 'Классическая пицца',
        description: 'Колбаса варёная, сыр Гауда, маринованные огурчики, свежие помидоры на фирменном соусе.',
        price: 300
    },

    {
        id: 2,
        count: 1,
        icon: iconPizza,
        category: 'pizza',
        photo: mexican,
        nameDish: 'Мексиканская пицца',
        description: 'Колбаса Пепперони, помидоры, перец, морковь по-корейски, сыр Гауда на фирменном соусе.',
        price: 350
    },

    {
        id: 3,
        count: 1,
        icon: iconPizza,
        category: 'pizza',
        photo: margaret,
        nameDish: 'Пицца Mаргарита',
        description: 'Помидоры, сыр Гауда и Моцарелла, базилик на фирменном соусе с травами.',
        price: 250
    },


    {
        id: 4,
        count: 1,
        icon: iconPizza,
        category: 'pizza',
        photo: chef,
        nameDish: 'Пицца от шефа',
        description: 'Бекон, язык, цыплёнок, шампиньоны, болгарский перец, сыр Моцарелла на чесночном соусе.',
        price: 500
    },

    {
        id: 5,
        count: 1,
        icon: iconPizza,
        category: 'pizza',
        photo: hawaiian,
        nameDish: 'Гавайская пицца',
        description: 'Ветчина, бекон и ананасы с сырами Гауда и Моцарелла на фирменном соусе.',
        price: 400
    },

    {
        id: 6,
        count: 1,
        icon: iconPizza,
        category: 'pizza',
        photo: pepperoni,
        nameDish: 'пицца Пепперони',
        description: 'Баварские колбаски, бекон, перец Пепперони, огурцы и помидоры, сыр Гауда на фирменном соусе.',
        price: 500
    },

    {
        id: 7,
        count: 1,
        icon: iconSnack,
        category: 'snacks',
        photo: friedPotatoes,
        nameDish: 'Картофель по-деревенски',
        description: 'Обжаренные до золотистой корочки долики молодого картофеля с травами.',
        price: 120
    },

    {
        id: 8,
        count: 1,
        icon: iconSnack,
        category: 'snacks',
        photo: frenchFries,
        nameDish: 'Картофель фри',
        description: 'Хрустящий, обжаренный до золотистой корочки молодой картофель.',
        price: 100
    },

    {
        id: 9,
        count: 1,
        icon: iconSnack,
        category: 'snacks',
        photo: wings,
        nameDish: 'Крылышки',
        description: 'Куриных крылышка в пикатной панировке. Хит продаж',
        price: 150
    },

    {
        id: 10,
        count: 1,
        icon: iconSalad,
        category: 'snacks',
        photo: greekSalad,
        nameDish: 'Греческий салат',
        description: 'Хрустящий салат айсберг, сочные томаты черри, маслины, свежий огурец, кубики брынзы и бальзамик.',
        price: 180
    },

    {
        id: 11,
        count: 1,
        icon: iconSalad,
        category: 'snacks',
        photo: сaesarSalad,
        nameDish: 'Салат Цезарь',
        description: 'Сочный цыпленок, хрустящий салат айсберг, томаты черри, сыры чеддер и пармезан, гренки, соус цезарь.',
        price: 200
    },

    {
        id: 12,
        count: 1,
        icon: iconSnack,
        category: 'snacks',
        photo: tomatoSoup,
        nameDish: 'Томатный суп',
        description: 'Пюре из натуральных томатов, куриный бульон, сыр Моцарелла, свежая зелень.',
        price: 150
    },

    {
        id: 13,
        count: 1,
        icon: iconDesert,
        category: 'desserts',
        photo: donut,
        nameDish: 'Пончик',
        description: 'Пончик с начинкой из кубиков молочного бельгийского шоколада, с посыпкой из фисташки.',
        price: 100
    },

    {
        id: 14,
        count: 1,
        icon: iconDesert,
        category: 'desserts',
        photo: cheesecake,
        nameDish: 'Чизкейк с вишней',
        description: 'Песочное тесто, нежнейший творожный чизкейк и сочные ягоды.',
        price: 150
    },

    {
        id: 15,
        count: 1,
        icon: iconDesert,
        category: 'desserts',
        photo: muffin,
        nameDish: 'Маффин',
        description: 'Маффин с начинкой из сезонных ягод с кубиками белого бельгийского шоколада.',
        price: 100
    },

    {
        id: 16,
        count: 1,
        icon: iconCoffe,
        category: 'drinks',
        photo: cappuccino,
        nameDish: 'Кофе Капучино',
        description: 'Ароматный кофе Капучино с молоком идеально к десертам.',
        price: 100
    },

    {
        id: 17,
        count: 1,
        icon: iconDrinks,
        category: 'drinks',
        photo: cola,
        nameDish: 'Coca Cola',
        description: 'Классическая Coca Cola 0.5л - прекрасно утоляет жажду.',
        price: 100
    },

    {
        id: 18,
        count: 1,
        icon: iconDrinks,
        category: 'drinks',
        photo: juice,
        nameDish: 'Свежевыжатый сок',
        description: 'Свежевыжатый соки в ассортименте - яблоки, апельсины, ананас, грейпфрут.',
        price: 200
    },
]