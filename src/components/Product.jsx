const Product = ({ product }) => {
    return( 
   
        <div className="card" key={product.code}> 
            <img src={product.img} alt={product.name} width={120} height={120}/>
            <span>{product.code}</span>
            <span>{product.name}</span>
            <span>${product.price}</span>
            </div>
        );
}

export default Product;