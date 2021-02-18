import React, { Component } from 'react'
import { render } from 'react-dom'

class LikeButton extends Component {
    constructor (props) {
        super(props)
        this.state = { liked: false }
    }

    render () {
        if ((this.state as any).liked) {
            return 'You liked this?'
        }

        return React.createElement(
            'button',
            { onClick: () => this.setState({ liked: true }) },
            'Like'
        )
    }
}

const domContainer = document.querySelector('#react-container')
render(React.createElement(LikeButton), domContainer)
