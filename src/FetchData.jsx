import React from 'react'
import Axios from 'axios'

class FetchData extends React.Component{

    state = {
        data: null
    }

    onFetchData = () => {
        Axios.get('https://cat-fact.herokuapp.com/facts')
        .then((res) => {
            this.setState({data: res.data})
            console.log('Respon Success')
        })
        .catch((err) => {
            console.log(err)
            console.log('Respon Error')
        })
    }

    render(){
        return(
            <div>
                <h1>
                    Ambil Data dari API 
                </h1>
                {   
                    this.state.data === null?
                        null
                    :
                        this.state.data.map((val) => {
                            return(
                                <div>
                                    <h5> {val.text} </h5>
                                </div>
                            )
                        })
                }
                <input type="button" value="Ambil Data" onClick={this.onFetchData} />
            </div>
        )
    }
}

export default FetchData