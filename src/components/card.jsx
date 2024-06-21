function Card(props){
    
    function cardinfoHandler(){

        let amount = 0;
         if (props.price > 199) {
         amount = props.price;
     }
     else{
           amount = props.price + 40;
     }
     console.log('Your order is successful for', props.title)
     console.log('Your Order total is', amount);
    
    }
    
    return(
    
             <div className="card" onClick={cardinfoHandler}>
            
             <div className="must-try">
             <img className="card-img" src={props.img} alt="" />
             <div className={props.ratings>= 4.5 ? "try" : "none"}>Best Seller</div>
             </div>
             
             <h2 className="title">{props.title}</h2>
             <p className="price">Rs. {props.price}</p>
             <p className="desc">{props.desc}</p>

</div>
    )
}


export default Card;