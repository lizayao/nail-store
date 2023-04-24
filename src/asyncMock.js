const products = [
    {
        id: '1',
        name: 'Cortacuticulas',
        price: 1200,
        category: 'Herramientas',
        img: 'https://cosmeticakatalia.com.ar/wp-content/uploads/2017/05/alicate-corta-cuticula-pinza.png',
        stock: 50,
        description: 'Cortacuticulas para las manos '
    },
    {
        id: '2',
        name: 'Lima 100/180',
        price: 1500,
        category: 'Herramientas',
        img: 'https://http2.mlstatic.com/D_NQ_NP_603656-MLA44587148119_012021-O.jpg',
        stock: 60,
        description: 'Lima para las uñas de grano 100/80'
    },
    {
        id: '3',
        name: 'Esmalte Navi Top Coat Matte',
        price: 2000,
        category: 'Esmaltes',
        img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/165/821/products/a305ba01-d974-4ac6-9b7a-74dc7883aa2d-4ff1de03bbafbbdc2e16596393022842-480-0.jpeg',
        stock: 30,
        description: 'Esmalte UV/LED Top Coat Matte profesional'
    },    
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productsByCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.category === productsByCategory))
        }, 500)
    })
}