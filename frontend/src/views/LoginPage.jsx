//import React from 'react'

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthContext from '../context/AuthContext'



function Loginpage() {

  const {loginUser} = useContext(AuthContext)
  const handleSubmit = e => {
    e.preventDefault()
    const email = e.target.email.value
    const password = e.target.password.value

    email.length > 0 && loginUser(email, password)

    console.log(email)
    console.log(password)
   
  }

  return (
    <div>
      <>
  <section className="vh-100" style={{ backgroundColor: "white" }}>
    <div className="container py-5 h-100 offset-sm-3">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col col-xl-10">
          <div className="card" style={{ borderRadius: "1rem" }}>
            <div className="row g-0">
              <div className="col-md-6 col-lg-5 d-none d-md-block mt-5">
                <img
                src="data:image/jpeg;base64,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"
                
                  alt="login form"
                  className="img-fluid"
                  style={{ borderRadius: "1rem 0 0 1rem",height:'550px',width:'500px'}}
                />
              </div>
              <div className="col-md-6 col-lg-7 d-flex align-items-center">
                <div className="card-body p-4 p-lg-5 text-black">
                  <form onSubmit={handleSubmit}>
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i
                        className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#10529eff" }}
                        
                      />
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i
                          className="fas fa-cubes fa-2x me-3"
                              style={{ color: "#10529eff" }}
                          
                        />
                        <span className="h2 fw-bold mb-0">Welcome back 👋</span>
                      </div>
                    </div>
                    <h5
                      className="fw-normal mb-3 pb-3"
                      style={{ letterSpacing: 1 }}
                    >
                      Sign into your account
                    </h5>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form2Example17"
                        className="form-control form-control-lg"
                        name='email' placeholder='Email Address'
                      />
                      <label className="form-label" htmlFor="form2Example17">
                        
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example27"
                        className="form-control form-control-lg"
                        name='password' placeholder='Password'
                      />
                      <label className="form-label" htmlFor="form2Example27">
                        
                      </label>
                    </div>
                    <div className="pt-1 mb-4">
                      <button
                        className="btn btn-dark btn-lg btn-block"
                        type="submit"  style={{backgroundColor:"#10529eff"}}
                      >
                        Login
                      </button>
                    </div>
                    <a className="small text-muted" href="#!">
                      Forgot password?
                    </a>
                    <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                      Don't have an account?{" "}
                      <Link to="/register" style={{ color: "#393f81" }}>
                        Register Now 
                      </Link>
                    </p>
                    <a href="#!" className="small text-muted">
                      Terms of use.
                    </a>
                    <a href="#!" className="small text-muted">
                      Privacy policy
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="bg-light text-center text-lg-start">
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2019 - till date Copyright:
      <a className="text-dark" href="https://mdbootstrap.com/">
        desphixs.com
      </a>
    </div>
  </footer>
</>

    </div>
  )
}

export default Loginpage