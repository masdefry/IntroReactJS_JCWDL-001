import React from 'react'
import Button from './Component/Button'

class OnChange extends React.Component{

    state = {
        text: ''
    }

    onRandomText = () => {
        var inputUser = this.refs.text.value 

        this.setState({text: inputUser})
    }

    render(){
        return(
            <div>
                <h1>Event On Change</h1>
                <h1>
                    { this.state.text }
                </h1>

                <input type="text" ref="text" placeholder="Enter Random Text" onChange={this.onRandomText} />
                <Button title='Button 1' color='red' />
                <Button title='Button 2' color='yellow' />
            </div>
        )
    }
}

export default OnChange