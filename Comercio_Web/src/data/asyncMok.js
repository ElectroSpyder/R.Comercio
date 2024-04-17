
export const productos = [
    {
        id:1,
        nombre: 'Papa',
        precio: 8500,
        categoria: 'verduras',
        stock: 10,
        descripcion: 'verdura de campo para la venta ',
        img: 'https://media-front.elmostrador.cl/2021/06/file-20210520-23-83r6ds-700x467.jpg'
    },
    {
        id:2,
        nombre: 'Tomate',
        precio: 23500,
        categoria: 'verduras',
        stock: 10,
        descripcion: 'verdura de campo para la venta ',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/800px-Bright_red_tomato_and_cross_section02.jpg'
    }, {
        id:3,
        nombre: 'Cebolla',
        precio: 8500,
        categoria: 'verduras',
        stock: 10,
        descripcion: 'verdura de campo para la venta ',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/640px-Onion_on_White.JPG'
    }, {
        id:4,
        nombre: 'Banana',
        precio: 8500,
        categoria: 'fruta',
        stock: 10,
        descripcion: 'Frutas recien cosechadas ',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bananas.jpg/1200px-Bananas.jpg'
    }
]; 

export const getProducts = () =>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    });
};

export const getProductByCategory = (categoria) =>{
    return new Promise((resolve) => {
        const result = productos.filter(
            (item) => item.categoria === categoria
        );
        setTimeout(()=> {
            resolve(result);
        }, 2000)
    });
};

export const getProductById = (id) => {
    return new Promise((resolve) => {
        const result = productos.find(
            (item) => item.id === parseInt(id)
        );
        setTimeout(() => {
            resolve(result);
        }, 2000);
    });
};