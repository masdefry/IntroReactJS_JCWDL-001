import React from 'react'
import Axios from 'axios'

class FakeApi extends React.Component{
    
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
            <div className='row'>
                <div>
                    <h1>
                        Fetch Data Fake 
                    </h1>
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