import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { useFormik } from 'formik';
import { YupSchema } from './YupSchema/YupSchema';

const initialValues = {
  name: "",
  email: "",
  number: ""
}
console.log(initialValues.name)
const Add_Contact = () => {
  // debugger;
  const contacts = useSelector((state) => state)
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const initialValues = {
    name: "",
    email: "",
    number: ""
  }
  const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues: initialValues,
    validationSchema: YupSchema,
    onSubmit: (values) => {
      dispatch({ type: "ADD_CONTACT", payload: values })  //This is action
      toast.success("Student added success fully")
      setTimeout(() => { navigate("/") }, 5000);
    }
  })

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const checkEmail = contacts.find((contact) => contact.email == email)
  //   const checkNumer = contacts.find((contact) => contact.number === parseInt(number)) //parseInt because number is integer
  //   if (!name || !email || !number) {
  //     return toast.warning("Pleae fill out all fields")
  //   }
  //   if (checkEmail) {
  //     return toast.error("This email already exist")
  //   }
  //   if (checkNumer) {
  //     return toast.error("This Number already exist")
  //   }
  //   // console.log(checkNumer)
  //   const data = {
  //     id: contacts[contacts.length - 1].id + 1, //we get last object from id: contact[contact.length-1] and add next id by dot .id+1 
  //     name, email, number
  //   }
  //   // console.log(data)
  //   dispatch({ type: "ADD_CONTACT", payload: data })  //This is action
  //   toast.success("Student added success fully")
  //   setTimeout(() => { navigate("/") }, 5000);
  // }

  return (
    <div className="container">
      <div className="row">
        <div className='col-12 col-sm-12 col-md-6 col-lg-7 col-xl-7 col-xxl-8 mx-auto shadow p-5'>
          <h1>Well come to add contact</h1>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input className="form-control" id="name" name="name" type="text" placeholder="Name" value={values.name} onBlur={handleBlur} onChange={handleChange} />
              <div>
                <p class="text-danger">{errors.name}</p>
              </div>
            </div>
            <div className="form-group mt-2">
              <input className="form-control" id="email" name="email" type="email" placeholder="Email" value={values.email} onBlur={handleBlur} onChange={handleChange} />
              <div>
                <p class="text-danger">{errors.email}</p>
              </div>
            </div>
            <div className="form-group mt-2">
              <input className="form-control" id="number" name="number" type="number" placeholder="Phone" value={values.number} onBlur={handleBlur} onChange={handleChange} />
              <div>
                <p class="text-danger">{errors.number}</p>
              </div>
            </div>
            <div className="form-group mt-2">
              <input className="btn btn-block btn-dark" id="submit" type="submit" value="Add Student" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Add_Contact