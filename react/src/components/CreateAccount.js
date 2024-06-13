import { useState, useEffect } from "react"

const CreateAccount =()=> {

    const [ formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: ''
    })

    return (
        <main className="main" id="createAcctMain">
            <div className="container">
                <h2 className="text-capitalize text-danger">create an account</h2>
                <form className="create-accounnt">
                    <div className="form-floating mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            required
                        />
                        <label htmlFor="firstName">First</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="text"
                            className="form-control"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            required
                        />
                        <label htmlFor="lastName">Last</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            value={formData.email}
                            required
                        />
                        <label htmlFor="email">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            required
                        />
                        <label htmlFor="phone">Phone</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            value={formData.password}
                            required
                        />
                        <label htmlFor="password">password</label>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default CreateAccount