import Nav from "../navbar/navAdmin"
import {Button, Col, Row} from 'react-bootstrap';
import '../styles/App.css';
import Axios from 'axios';
import React, { useState, useEffect } from "react";

const Adminuser =()=> {
    const [regcompany, setReg] = useState([])
    let body = {
        type: 'approve'
    }
    const fetchData =()=> {
      Axios.get("http://ec2-44-192-108-246.compute-1.amazonaws.com:3001/api/admins/approve").then(
          res => {
            setReg(res.data)
          })
    }

    useEffect(() => {
      fetchData();
      
    }, [regcompany]);
    
    return (
      <div className="App">
        <Nav/>
        <div className='container'>
                    <br />
                    <h3>Company in system</h3>
                    <br />
                    <table className="table">
                      <thead>
                        <tr>
                        <th scope="col">Company</th>
                          <th scope="col">PhoneNumber</th>
                          <th scope="col">Email</th>
                          <th scope="col">State</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        { regcompany.map(item =>
                            <tr>
                                 <td>{item.companyName}</td>
                                 <td>{item.phoneNumber}</td>
                                 <td>{item.email}</td>
                                 <td>{item.type}</td>
                                 <td><Button variant="danger" onClick={()=> Axios.delete("http://ec2-44-192-108-246.compute-1.amazonaws.com:3001/api/admins/reject/" + item._id)}>Delete</Button></td>
                            </tr>
                            )}
                            

                      </tbody>
                    </table>
                    </div>
                  </div>
                

    );
  }
  
  export default Adminuser;
  