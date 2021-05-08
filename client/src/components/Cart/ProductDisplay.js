import React, {Component} from 'react';
import axios from 'axios';
import {Link} from "react-router-dom";

//import image from '../../Images/product.png';

class Products extends Component{


  constructor(props) {
    super(props)
           this.state = {
            products: [],
          }
        }


      //retrieve data
      componentDidMount() {
        axios.get('http://localhost:5000/api/Cart/displayProduct')
        .then(res => {
            const products = res.data;
            this.setState({ products });
          })
      }


      filterContent(products, searchProduct){
        const result = products.filter((product) => product.itemname.includes(searchProduct));
        this.setState({products:result});
      } 
      
      handleSearch = (e) =>{
        console.log(e.currentTarget.value);
       const searchProduct = e.currentTarget.value;
      
       axios.get("http://localhost:5000/api/Cart")
          .then(res => {
              const products = res.data;
              this.setState({ products });
              this.filterContent(products, searchProduct)
            })
      }

/*edit*/ 
render(){
  return(

    <div>
        

    <br></br>

    <div class="float-md-right">

        <Link to={"/cart/"+this.props.match.params.uid}> &nbsp; <i class="fas fa-cart-plus fa-2x"  style={{color:"black"}}>
        </i></Link>
    </div>


    <div className="col-md-5 mt-3 mx-auto">
            <input
              type="search"
              placeholder="Search"
              name="searchDelivery"
              className="form-control ml-2"
              onChange={this.handleSearch}
              ></input>
     </div>
   
    
    <div>
    <center><div><h1 className="display-4" style={{alignItems:"center"}}>{this.props.match.params.category}</h1></div>
    

      { this.state.products.map(product =>
      
      // <div className="row">
      // <div className="col-10 mx-auto col-md-6 my-3">
      //    <img src= {image}/>
      <div style={{display:"inline-block",padding:"20px"}} >
      <div><img src={`http://localhost:5000/${product.image}`} style ={{width: "250px", height: "320px", marginLeft: '35px'}}/>    
      <div>

      <div  >
        <h2 class="col-sm-9">{product.itemname}</h2>
        <h6 className="text-blue">Rs. <strong>{product.price}.00</strong></h6>
        <h6 className="text-title text-uppercase text-muted mt-3 mb-2">Category: {product.category}</h6>
        <p className="text-muted lead"><strong>Discount: {product.discount}<span>%</span></strong></p>
        
        <button class="btn btn-outline-success"><Link to={'/detail/'+product._id+'/'+this.props.match.params.uid}>More Details</Link></button>
      </div>
    
      </div>
      </div>
      </div>
      )}
        </center>
   </div>
   

   
   </div>
   
  )

  
}
}



export default Products