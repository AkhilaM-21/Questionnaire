import React, { useState } from "react";

function Form() {
  const[formData,setformData]=useState({
   fullName:"",
   age:"",
   dateofbirth:"",
   location:"",
   number:""

  });
  const [error,setError]=useState({});
  function handleChange(e)
  {
    const{name,value}=e.target;
    setformData({...formData,[name]:value});
  };
  function handlleSubmit(e)
  {
    e.preventDefault();
    if(valid())
    {
      alert("form is submitted sucessfully");
      console.log(formData)
    }
  };

  function valid()
  {
    const newErrors={};
    if(!formData.fullName.trim())
      newErrors.fullName="fullname is required";
    if(!formData.age)
      newErrors.age="age is required";
    if(!formData.dateofbirth)
      newErrors.dateofbirth="dateofbirth is required";
    if(!formData.location)
      newErrors.location="location is required";
    if(!formData.number.match(/^\d{10,13}$/))
      newErrors.number="mobile number must be 10 to 13 digits";
    setError(newErrors);
    return Object.keys(newErrors).length===0;
  };



  return (
    <div className="container mt-5 d-flex justify-content-center ">
      <div className="card shadow-lg p-4 borderr animate__animated animate__fadeInLeft " style={{ width: "100%", maxWidth: "500px" }}>
        <h4 className="text-center mb-4">Questionnaire Form</h4>
        <form onSubmit={handlleSubmit}>
      
          <div className="mb-2">
            <label htmlFor="fullName" className="form-label">Full Name</label>
            <input type="text" className="form-control" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange}/>
            <span className="error">{error.fullName}</span>
          </div>

         
          <div className="mb-2">
            <label htmlFor="age" className="form-label">Age</label>
            <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange}/>
            <span className="error">{error.age}</span>
          </div>

         
          <div className="mb-2">
            <label htmlFor="dateofbirth" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dateofbirth" name="dateofbirth" value={formData.dateofbirth} onChange={handleChange} />
            <span className="error">{error.dateofbirth}</span>
          </div>

          <div className="mb-2">
            <label htmlFor="location" className="form-label">Choose Location</label>
            <select id="location" className="form-select" name="location" value={formData.location} onChange={handleChange}>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              <option value="Southkorea">South Korea</option>
            </select>
            <span className="error">{error.location}</span>
          </div>

          
          <div className="mb-2">
            <label htmlFor="number" className="form-label">Mobile No</label>
            <input type="tel" className="form-control" id="number" name="number" value={formData.number} onChange={handleChange}/>
            <span className="error">{error.number}</span>
          </div>

          
          <div className="button">
            <button type="submit" className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
