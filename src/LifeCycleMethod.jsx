import React from 'react'

class LifeCycleMethod extends React.Component{
    // Terdapat lifecycle method yang masih eksis :
    // 1. Mounting
    //      - componentDidMount() : Untuk fetch data dari API
    // 2. Updating
    //      - componentDidUpdate() : Apabila terjadi perubahan pada state
    // 3. Unmounting
    //      - componentWillMount() : Ketika komponen hilang dari layar (perpindahan pages)
    // 4. Render
    state = {
        count: 0
    }

    // componentDidMount(){
    //     alert('Did Mount Running!!!')
    // }

    // componentDidUpdate(){
    //     alert('Did Update Running!!!')
    // }

    componentWillUnmount(){
        alert('Did Unmount Running!!!')
    }
    render(){
        // alert('Render Running!!!')
        return(
            <>
                <h3>
                    Tiga Fase : 1. Mounting 2. Updating 3. Unmounting
                </h3>
                <input type="button" value="Check Component Did Update!!!" onClick={() => this.setState({count: 1})} />
            </>
        )
    }
}

export default LifeCycleMethod