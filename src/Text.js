import React from 'react'

class Text extends React.Component {
    state = {
        name: "Ala"
    }

textChangeHandler = (event) => this.setState ({
    text: event.target.value,
})

    render() {  
        return (
            <div>
                <h1>{this.state.text}</h1>

            <input
                value={this.state.text}
                onChange = {this.textChangeHandler}
            />    
            </div>
        )
    }
}

export default Text