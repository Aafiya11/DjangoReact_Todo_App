import {useContext} from 'react'
import {jwtDecode} from "jwt-decode"
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

function Navbar() {

  const {user, logoutUser} = useContext(AuthContext)
  const token = localStorage.getItem("authTokens")

  if (token){
    const decoded = jwtDecode(token) 
    var user_id = decoded.user_id
  }
 console.log(user)
 console.log(user_id)
  return (
    
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" style={{backgroundColor:"#10529eff"}}>
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {/*<img style={{width:"120px", padding:"6px"}} 

            src="https://i.imgur.com/juL1aAc.png" alt="" />*/}
             <img style={{width:"80px", padding:"6px"}} 

            src="https://cdn-icons-png.freepik.com/256/11207/11207604.png?semt=ais_white_label" alt=''/> </a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#"><h5>Home</h5></a>
              </li>
              {token === null && 
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/login"><h5>Login</h5></Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/register"><h5>Register</h5></Link>
                </li>
              </>
              }

            {token !== null && 
              <>
                <li class="nav-item">
                  <Link class="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/todo">Todo</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" onClick={logoutUser} style={{cursor:"pointer"}}>Logout</a>
                </li>
              </>
              }   
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar