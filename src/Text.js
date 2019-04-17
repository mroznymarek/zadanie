import React from 'react'

class Text extends React.Component {
    state = {
        name: "Ala"
    }

    textChangeHandler = (event) => this.setState({
        text: event.target.value,
    })

    render() {
        return (
            <div>
                <input
                    value={this.state.text}
                    onChange={this.textChangeHandler}
                />
                <button>
                    DODAJ
                </button>
                <h1>{this.state.text}</h1>
            </div>
        )
    }
}

export default Text