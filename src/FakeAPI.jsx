import React from 'react'
import Axios from 'axios'

class FakeApi extends React.Component{
    // CRUD (Create, Read, Update, Delete)

    state = {
        data: null,
        selectedId: null,
        isSubmit: false
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
        this.setState({ isSubmit: true })
        let username = this.inputUsername.value 
        console.log(username)
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
                this.setState({ isSubmit: false })
            })
            .catch((err) => {
                console.log(err)
            })
        }
    }

    onSaveData = () => {
        
        let username = this.refs.username.value
        let email = this.refs.email.value
        let password = this.refs.password.value

        if(username && email && password){
            Axios.put('http://localhost:5000/users/' + this.state.selectedId, {username, email, password})
            .then((res) => {
                if(res.status === 200){
                    alert('Edit Data Success!')
                    this.setState({selectedId: null})
                    this.onFetchData()
                }

                this.setState({ isSubmit: false })
            })
            .catch((err) => {
                console.log(err)
            })
        }else{
            alert('Terdapat Data yang Kosong!')
        }
    }

    mapData = () => {
        let result = this.state.data.map((value, index) => {
            if(this.state.selectedId === value.id){
                return(
                    <tr key={index}>
                        <td>
                            {value.id}
                        </td>
                        <td>
                            <input type="text" ref="username" defaultValue={value.username} className="form-control" />
                        </td>
                        <td>
                            <input type="text" ref="email" defaultValue={value.email} className="form-control" />
                        </td>
                        <td>
                            <input type="text" ref="password" defaultValue={value.password} className="form-control" />
                        </td>
                        <td>
                            <input type="button" value="Save" className='btn btn-success' onClick={this.onSaveData} />
                            <input type="button" value="Cancel" className='btn btn-danger' onClick={() => this.setState({selectedId: null})} />
                        </td>
                    </tr>
                )
            }

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
                    <td>
                    <input type="button" value="Edit" className='btn btn-warning' onClick={() => this.setState({selectedId: value.id})} />
                        <input type="button" value="Delete" className='btn btn-danger' />
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
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    <div className="col-6 py-5 text-center">
                        <h1>
                            Fetch Data Fake 
                        </h1>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <div className="card">
                            <div className="card-body">
                                <h3>
                                    Add Data 
                                </h3>
                                <input type="text" placeholder="Enter Your Username" ref={element => this.inputUsername = element} className="form-control" />
                                <input type="text" placeholder="Enter Your Password" ref="password" className="form-control mt-3" />
                                <input type="text" placeholder="Enter Your Email" ref="email" className="form-control mt-3" />
                                <input type="button" disabled={this.state.isSubmit} value={this.state.isSubmit? 'Loading' : 'Submid Data'} className="btn btn-success mt-3" onClick={this.onPostData} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='row justify-content-center'>
                    <div className='col-6'>
                        <table className='table'>
                            <thead>
                                <th> Id </th>
                                <th> Username </th>
                                <th> Email </th>
                                <th> Password </th>
                                <th> Action </th>
                            </thead>
                            <tbody>
                                {
                                    this.mapData()
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default FakeApi