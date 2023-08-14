import React from 'react'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
const Edit_Cont = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();
  const contact_sele = useSelector((state) => state)
  const current_con = contact_sele.find((cont) => cont.id === parseInt(id)); //parseIn value as string.This is to find id
  useEffect(() => {
    if (current_con) {
      setName(current_con.name)      // Call Name from Redux
      setEmail(current_con.email)    // Call Email from Redux
      setNumber(current_con.number)  // Call Number from Redux
    }
  }, [current_con])
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(current_con);
    const checkEmial = contact_sele.find((contact) => contact.email === email);
    const checkNumer = contact_sele.find((contact) => contact.id !== parseInt(id)  && contact_sele.number === parseInt(number)) //parseInt because number is integer
    if (!name || !email || !number) {
      return toast.warning("Pleae fill out all fields")
    }
    if (checkEmial) {
      return toast.error("This email already exist")
    }
    if (checkNumer) {
      return toast.error("This Number already exist")
    }
    // console.log(checkNumer)
    const data = {
      id: parseInt(id),name, email, number
    }
    // console.log(data)
    dispatch({ type: "UPDATE_CONTACT", payload: data })  //This is action
    toast.success("Student update successfully")
    setTimeout(() => { navigate("/") }, 5000);
  }
  // debugger;
  return (
    <div className="container">

      {current_con ? (                   //This is advance {   ? (<> </> ) : ( )} if else
        <>
          <div className="row d-flex flex-column">
            <div className="col-md-6 mx-auto shadow p-5">
              <h1>Edit Student {id}</h1>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input className="form-control" id="name" name="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group mt-2">
                  <input className="form-control" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group mt-2">
                  <input className="form-control" id="phone" name="phone" placeholder="Phone" value={number} onChange={(e) => setNumber(e.target.value)} />
                </div>
                <div className="form-group d-flex align-items-center justify-content-between my-2">
                  <button type="submit" className="btn btn-primary">
                    Update Contact
                  </button>
                  <Link to="/" className="btn btn-danger"> cancel </Link>
                </div>
              </form>
            </div>
          </div>
        </>
      ) : (<h1 className="display-3 my-5 text-center">This Student ID {id} is not Exist!!</h1>)}
    </div>
  )
};
export default Edit_Cont