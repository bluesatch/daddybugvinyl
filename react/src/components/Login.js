import { useState } from 'react'
import Modal from 'react-bootstrap/Modal'

const Login =({ users })=> {

    // console.log(users)

    const [ loginData, setLoginData ] = useState({
        email: '',
        password:''
    })

    const handleChange =(event)=> {

        const { name, value } = event.target
        
        setLoginData(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    }

    const handleSubmit =(e)=> {
        e.preventDefault()

        
        for (let i = 0; i < users.length; i++) {
            console.log(loginData.email, loginData.password)
            console.log(users[i].email, users[i].password)
        }
    }

    return(
        <div 
            className="modal show"
            style={{ display: 'block', position: 'initial'}}
        >
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Sign In</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label text-capitalize">email
                            </label>
                            <input 
                                type="text"
                                className="form-control"
                                id="email"
                                name="email"
                                value={loginData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                        <label htmlFor="email" className="form-label text-capitalize">password
                            </label>
                            <input 
                                type="password"
                                className="form-control"
                                id="password"
                                name="password"
                                value={loginData.password}
                                onChange={handleChange}
                            />
                        </div>
                        <button type="submit" className="btn btn-primary text-capitalize">submit</button>
                    </form>
                </Modal.Body>

                <Modal.Footer>
                    <p>more stuff</p>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default Login