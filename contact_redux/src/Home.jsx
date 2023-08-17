import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
const Home = () => {
  const contact_sele = useSelector((state) => state);
  console.log(contact_sele);
  const dispatch = useDispatch()
  const Delete = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id })
    toast.success("Contact delete successfull")
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-5 text-right">
            <Link to="/addcon" className='btn btn-outline-dark'>Add Contact</Link>
          </div>
          <div className='col-12'>
            <h1>React Redux App using Yup Formik</h1>
          </div>
          <div className='col-12'>
            <table className='table table-hover'>
              <thead className='text-white bg-dark text-center'>
                <tr>
                  <th scope='col'>id</th>
                  <th scope='col'>Name</th>
                  <th scope='col'>Email</th>
                  <th scope='col'>Phone</th>
                  <th scope='col'>Action</th>
                </tr></thead>
              <tbody>
                {
                  contact_sele.map((cs, id) => (
                    <tr key={id}>
                      <td class="text-center">{id + 1}</td>
                      <td class="text-center">{cs.name}</td>
                      <td class="text-center">{cs.email}</td>
                      <td class="text-center">{cs.number}</td>
                      <td class="text-center">
                        <div className='d-flex justify-content-center'>
                          <Link to={`/edit/${cs.id}`} className="btn btn-small btn-primary">Edit</Link>
                          <button type='button' className='btn btn-small btn-danger mx-2' onClick={() => Delete(cs.id)}>Delete</button>
                        </div>
                      </td>
                    </tr>))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </>
  );
};
export default Home