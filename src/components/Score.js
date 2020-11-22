import './Score.css'
import React from 'react';

export default class Score extends React.Component {
    constructor(props) {
        super(props)
        
      }
    render() {
        return (
            <div className = "scoreDiv card-footer-item label">
                Score: {this.props.score}
            </div>
        )
    }
}