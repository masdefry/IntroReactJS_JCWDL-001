import React from 'react';

var name = 'Safira'

class State1 extends React.Component{

    state = {
        nama: 'Defryan',
        umur: 20
    }

    ubahNama = () => {
        this.setState({nama: 'Haekal', umur: 23})
    }

    render(){
        return(
            <div>
                <input type="button" value="Ubah Nama" onClick={this.ubahNama} />

                <h1>
                    { this.state.nama }
                </h1>
                <h1>
                    { name }
                </h1>
            </div> 
        )
    }
}

export default State1