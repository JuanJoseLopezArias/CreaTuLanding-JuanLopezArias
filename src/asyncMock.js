const products = [
    {
        id: '1',
        name: 'Remera Nike',
        price: 1000,
        category: 'Remeras',
        img: 'https://picsum.photos/200/300',
        stock: 5,
        description: 'Remera Nike'
    },
    {
        id: '2',
        name: 'Pantalon Nike',
        price: 2000,
        category: 'Pantalones',
        img: 'https://picsum.photos/200/300',
        stock: 5,
        description: 'Pantalon Nike'
    },
    {
        id: '3',
        name: 'Buzo Nike',
        price: 3000,
        category: 'Buzos',
        img: 'https://picsum.photos/200/300',
        stock: 5,
        description: 'Buzo Nike'
    }

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products)
        }, 500)     
    })       
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (category) => {
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)    
    })      
}
