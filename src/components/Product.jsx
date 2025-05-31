const Product = () => {
    const products = [
        {
        name: "Apple",
        img: "/images/apple.png",
        code: "0001",
        price: 12
    },
     {
        name: "Banana",
        img: "/images/banana.png",
        code: "0002",
        price: 8
    },
     {
        name: "Orange",
        img: "/images/orange.jpg",
        code: "0003",
        price: 10
    }
]

    return( 
    <>
        {products.map(
        (product) => (
        <div className="card" key={product.code}> 
            <img src={product.img} alt={product.name} width={120} height={120}/>
            <span>{product.code}</span>
            <span>{product.name}</span>
            <span>${product.price}</span>
            </div>
       ))}
   </>
        
);
}

export default Product;