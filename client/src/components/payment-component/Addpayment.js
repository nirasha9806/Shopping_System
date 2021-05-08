
import React, { useState
 } from 'react';
import '../../css/payment.css';
import axios from 'axios';


export default function Addpayment() {

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [number, setNumber] = useState(null);
    const [ date, setDate] = useState(null);
    const [code, setCode] = useState(null);
    const [amount, setAmount] = useState(null);
    // onChangeEmail(event) {
    //     let input = this.state.input;
    //     input[event.target.name] = event.target.value;
      
    //     this.setState({
    //       input
    //     });
    // }


    const handleSubmit  = () => {

        const Payment = {
            
            name: name,
            email:email,
            number: number,
            date: date,
            code: code,
            amount: amount,
        };

        // var pattern = new RegExp(/[0-9]/);
        // //var length = number.length();
        // console.log(number);
        // console.log(code);

        // if(!pattern.test(number)){
        //     alert("Your card number is invalid");
        //     console.log("invalid");
        // }
        // if(!pattern.test(code)){
        //     alert("Your CVC Code is invalid");
        //     console.log("invalid");
        // }
        // else{

        axios.post("http://localhost:5000/api/payment/insertPayment", Payment)
            .then(response => {
                if(response.data.success){
                    alert('Data has been sent to the server')
                } else {
                    alert('Data not sent to the server')
                }
            })
        //}
      
    }

    const onChangeName = (e) =>{
        setName(e.target.value);
    }

   const onChangeEmail = (e) =>{
        setEmail(e.target.value);
    }


    const onChangeNumber = (e) =>{
        setNumber(e.target.value);
    }

   const onChangeDate = (e) =>{
        setDate(e.target.value);
    }


    const onChangeCode = (e) =>{
        setCode(e.target.value);
    }

    const onChangeAmount = (e) =>{
        setAmount(e.target.value);
    }

    // validate(){
    //     let input = this.state.input;
    //     let errors = {};
    //     let isValid = true;
    
    
    //     if (!input["email"]) {
    //       isValid = false;
    //        errors["email"] = "Please enter your email Address.";
    //     }
    
    //     if (typeof input["email"] !== "undefined") {
            
    //       var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //       if (!pattern.test(input["email"])) {
    //         isValid = false;
    //         errors["email"] = "Please enter valid email address.";
    //       }
    //     }
    
    //     this.setState({
    //       errors: errors
    //     });
    
    //     return isValid;
    // }

        return(
            <div className ="App">

            <br/><br/>

                <center>
                        <h2 className = 'header2'> Payment </h2>
                        
                </center>

                <h2> Payment Details Form  </h2>

                <div className="shadow p-5" style= {{width:'45rem', marginLeft:'345px'}}>

                       
                        <div className="card-body">
                        
                            <div class="card-header">
                                <b><center>Payment Information</center></b>
                            </div>

                        </div>
                    <form>

                        <div class="form-group">
                                 &nbsp; &nbsp; &nbsp;<label for="" required>Card Holder's Name *</label>
                                <div>
                                <input type="text" class="form-control"
                                       value={name}
                                       onChange={(e)=>onChangeName(e)}
                                placeholder="enter name"/></div>
                        </div>

                        <div class="form-group">
                                
                                &nbsp; &nbsp; &nbsp;<label for="email" required>Card Holder's Email address *</label>
                                <div>
                                <input type="text" class="form-control" name="email" placeholder="enter email"
                                 value={email}
                                 onChange={(e)=>onChangeEmail(e)}
                                id="email"/></div>
                               
                                {/* <div className="text-danger">{this.state.errors.email}</div> */}
                        </div>
                        <div class="form-group">
                                    &nbsp; &nbsp; &nbsp;<label for="" required>Card Number *</label>
                                    <div>
                                    <input type="text" class="form-control"
                                        value={number}
                                        onChange={(e)=>onChangeNumber(e)}
                                    placeholder="0000 0000 0000 0000"/></div>
                        </div>

                        <div class="form-group">
                                    &nbsp; &nbsp; &nbsp;<label for="" required>Expiry Date *</label>
                                    <div>
                                    <input type="text" class="form-control"
                                        value={date}
                                        onChange={(e)=>onChangeDate(e)}
                                    placeholder="MM/YY"/></div>
                        </div>

                        <div class="form-group">
                                    &nbsp; &nbsp; &nbsp;<label for="" required> CVC *</label>
                                    <div>
                                    <input type="text" class="form-control"
                                        value={code}
                                        onChange={(e)=>onChangeCode(e)}
                                    placeholder="ooo"/></div>
                        </div>

                        <div class="form-group">
                                    &nbsp; &nbsp; &nbsp;<label for="" required> Amount </label>
                                    <div>
                                    <input type="text" class="form-control"
                                        value={amount}
                                        onChange={(e)=>onChangeAmount(e)}
                                    placeholder="Amount 0.00"/></div>
                        </div>


                         
                            <button class="btn btn-dark" onClick={()=>handleSubmit()}> Pay Now </button>

                        </form>
                </div>
            
            </div>

        )
    }

