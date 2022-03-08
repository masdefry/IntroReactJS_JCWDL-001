import React from 'react'
import Axios from 'axios'

class FakeApi extends React.Component{
    // CRUD (Create, Read, Update, Delete)

    state = {
        data: null
    }

    componentDidMount(){
        this.onFetchData()
    }

    onFetchData = () => {
        Axios.get('http://localhost:5000/users')
        .then((res) => {
            console.log(res.data)
            this.setState({data: res.data})
        })
        .catch((err) => {
            console.log(err)
        })
    }

    onPostData = () => {
        // 1. Ambil semua value inputan dari user
        // 2. Validasi 
        // 3. Kirim ke Fake API

        // 1,
        let username = this.refs.username.value 
        let email = this.refs.email.value
        let password = this.refs.password.value
        
        // 2,
        if(username && email && password){
            // 3,
            Axios.post('http://localhost:5000/users', {username, password, email})
            .then((res) => {
                console.log(res)
                if(res.status === 201){
                    alert('Post Data Success!')
                    this.onFetchData()
                }
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    mapData = () => {
        let result = this.state.data.map((value, index) => {
            return(
                <tr key={index}>
                    <td>
                        {value.id}
                    </td>
                    <td>
                        {value.username}
                    </td>
                    <td>
                        {value.email}
                    </td>
                    <td>
                        {value.password}
                    </td>
                </tr>
            )
        })

        return result
    }

    render(){
        if(this.state.data === null){
            return(
                <div>
                    Loading... 
                </div>
            )
        }

        return(
            <div>
                <div>
                    <h1>
                        Fetch Data Fake 
                    </h1>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body">
                                <h3>
                                    Add Data 
                                </h3>
                                <input type="text" placeholder="Enter Your Username" ref="username" className="form-control" />
                                <input type="text" placeholder="Enter Your Password" ref="password" className="form-control mt-3" />
                                <input type="text" placeholder="Enter Your Email" ref="email" className="form-control mt-3" />
                                <input type="button" value="Submit Data" className="btn btn-success mt-3" onClick={this.onPostData} />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <table>
                        <thead>
                            <th> Id </th>
                            <th> Username </th>
                            <th> Email </th>
                            <th> Password </th>
                        </thead>
                        <tbody>
                            {
                                this.mapData()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default FakeApi