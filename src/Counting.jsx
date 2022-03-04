import React from 'react';

class Counting extends React.Component{

    state = {
        count: 0
    }

    onCounting = () => {
        var currentCount = this.state.count 
        currentCount++ 

        this.setState({count: currentCount})
    }

    render(){
        return(
            <div>
                <h1>
                    Counting 
                </h1>
                <h1>
                    { this.state.count }
                </h1>
                <input type="button" value="Counting" onClick={this.onCounting} />
            </div>
        )
    }
}

export default Counting