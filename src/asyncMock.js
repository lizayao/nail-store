const products = [
    {
        id: '1',
        name: 'Cortacuticulas',
        price: 1200,
        category: 'Herramientas',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Finnova.olina.cl%2Fdetalle-producto.php%3FidProd%3D588&psig=AOvVaw3UjrdIEIOvta2B-3-NW3J6&ust=1682126372627000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLi22pnnuf4CFQAAAAAdAAAAABAJ',
        stock: 50,
        description: 'Cortacuticulas para las manos '
    },
    {
        id: '2',
        name: 'Lima 180/200',
        price: 1500,
        category: 'Herramientas',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ideal.es%2Fsociedad%2Fconsumo%2F201609%2F08%2Fcual-mejor-lima-para-20160907163128.html&psig=AOvVaw1Z_Ki2qhzI-n-L8vB94G8f&ust=1682126472172000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLCil8nnuf4CFQAAAAAdAAAAABAE',
        stock: 60,
        description: 'Lima para las uñas de grano 180/200'
    },
    {
        id: '3',
        name: 'Esmalte Navi Top Coat Matte',
        price: 2000,
        category: 'Esmaltes',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Festeticatupiel.com.ar%2Fnavi-esmalte-semi-top-coat-matte-15ml&psig=AOvVaw0aejnOLbQqum46X2YFZCKl&ust=1682126532031000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCIDS3-Xnuf4CFQAAAAAdAAAAABAE',
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