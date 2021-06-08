export default function Product(props){
    const {title, price} = props.product
    
    return(
        <div>
            <h4>{title}</h4>
            <p>{price}</p>
        </div>
    )
}