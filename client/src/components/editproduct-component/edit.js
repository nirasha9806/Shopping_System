import React, {Component} from 'react';
import axios from 'axios';

export default class Edit extends Component{
    constructor(props){
        super(props);
        this.onChangeitemname=this.onChangeitemname.bind(this);
        this.onChangeprice=this.onChangeprice.bind(this);
        this.onChangediscount = this.onChangediscount.bind(this);
        this.onChangecategory = this.onChangecategory.bind(this);
        this.onChangedescription = this.onChangedescription.bind(this);

        this.onsubmit=this.onsubmit.bind(this);

        this.state={
            itemname: '',
            price: '',
            discount: '',
            category: '',
            description: ''
    
    }
}
componentDidMount(){
    axios.get('http://localhost:5000/api/sellers/edit/'+this.props.match.params.id)
    .then(response=>{
        this.setState({
            itemname:response.data.itemname,
            price:response.data.price,
            discount : response.data.discount,
            category : response.data.category,
            description : response.data.description
        });
        
    })
    .catch(function (error) {
        console.log(error);
        
    })
}
onChangeitemname(e){
    this.setState( {
        itemname: e.target.value
    });
}
onChangeprice(e){
    this.setState({
        price:e.target.value
    });
}
onChangediscount(e){
    this.setState({
        discount:e.target.value
    });
}

onChangecategory(e){
    this.setState({
        category:e.target.value
    });
}
onChangedescription(e){
    this.setState({
        description:e.target.value
    });
}
onsubmit(e){
    e.preventDefault();
    const obj= {
        itemname : this.state.itemname,
        price : this.state.price,
        discount : this.state.discount,
        category : this.state.category,
        description : this.state.description
    };
    axios.post('http://localhost:5000/api/sellers/update/'+this.props.match.params.id,obj)
    .then(res=>console.log(res.data));

    this.props.history.push('/index')
}


render(){
    return(

        <center>
        <div class="form-group w-25">
          <h3>Edit Product details </h3>

          <br></br>
        <form onSubmit={this.onsubmit}>
                 <div className="form-group">
                     <label>Add Item Name : </label>
                     <input type="text"
                            className="form-control"
                            value={this.state.itemname}
                            onChange={this.onChangeitemname} />
                 </div>

                 <div className="form-group">
                     <label>Add Price : </label>
                     <input type="text" 
                            className="form-control"
                            value={this.state.price}
                            onChange={this.onChangeprice}/>
                 </div>

                 <div className="form-group">
                     <label>Add Discount : </label>
                     <input type="text" 
                           className="form-control"
                           value={this.state.discount}
                            onChange={this.onChangediscount}/>
                 </div>
                 <div className="form-group">
                     <label>Add Category : </label>
                     <input type="text" 
                           className="form-control"
                           value={this.state.category}
                            onChange={this.onChangecategory}/>
                 </div>
                 <div className="form-group">
                     <label>Add Description : </label>
                     <input type="text" 
                           className="form-control"
                           value={this.state.description}
                            onChange={this.onChangedescription}/>
                 </div>

                 <div className="form-group">
                     <input type="submit" value="Edit Details" className="btn btn-primary"/>
                 </div>
             </form>

             
             </div>
             </center>
         
    )
}
}