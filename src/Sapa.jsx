import React from 'react'

class Sapa extends React.Component{

    state = {
        nama: ''
    }

    onClickButton = () => {
        // Ambil value dari user
        let inputUser = this.refs.myName.value 
        console.log(inputUser)

        this.setState({nama: inputUser})
    }

    render(){
        if(this.state.nama === ''){
            return(
                <>
                    <h1>
                    Aplikasi Sapa
                    </h1>
                    <h1>
                        Hello, Username!
                    </h1>

                    <input type="text" ref="myName" placeholder="Enter Your Name" />
                    <input type="button" value="Submit" onClick={this.onClickButton} />
                </>
            )
        }
        
        return(
            <>
                <h1>
                    Aplikasi Sapa
                </h1>
                <h1>
                    Hello, { this.state.nama }
                </h1>

                <input type="text" ref="myName" placeholder="Enter Your Name" />
                <input type="button" value="Submit" onClick={this.onClickButton} />
            </>
        )
    }
}

export default Sapa