import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default class TableRow extends Component{

    //delete

   delete(id){
        axios.post('http://localhost:5000/api/sellers/delete/'+id)
        .then(response =>{
            alert("successfully deleted")
            //this.componentDidMount();
        })
    }
  render() {
        return (

            
            <tr>
                <td>
                    {this.props.obj.itemname}
                </td>
                <td>
                    {this.props.obj.price}
                </td>
                <td>
                    {this.props.obj.discount}
                </td>
                <td>
                    {this.props.obj.category}
                </td>
                <td>
                    {this.props.obj.description} 
                </td>
                <td>
                <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                <button onClick={() => this.delete(this.props.obj._id)} className="btn btn-primary">Delete</button>
                </td>
            </tr>
            
        );
    }
}