import React from 'react'
// import React, {useState} from 'react'

const LoginPage = () => {
    // const [view, setView] = useState(false)
    // const handleView = () => {
    //     setView(!view)
    // }

  return (
      <div className='form-container'>
          <div className="login">
              <h1>Login</h1>
              <p>Don't have an account? <a href="#">Signup</a></p>
          </div>
          <div className="form-input">
              <form>
              <label for="email">Email</label>
              <input type="email" name="email" id="email"/>
                  <label for="Password">Password</label>
                  {/* <div>
                     <button onClick={handleView}>change</button> 
                 <input type={view === true ? "text" : "password"} name="Password" id="Password" placeholder='Enter your password' />
                  </div> */}

                <input type="Password" name="Password" id="Password" />
              <span><a href="">Forgot Password</a></span>
              <button className="login-btn" onClick={() => alert('Login successfully')}>Login</button>
                  <p>OR</p>
             <div className="login-option">
                    <button className='google-btn' onClick={()=>alert("Google login")}><i class="bi bi-google"></i>Login with Google</button>
                    <button className='google-btn' onClick={() => alert("Apple login")}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-apple" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z"/>
                </svg>Login with Apple</button>
                </div>
            </form>
          </div>
    </div>
  )
}

export default LoginPage