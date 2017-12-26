import React, {Component} from 'react'
import * as AppActions from '../actions/app'

class Home extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    componentWillMount() {
        this.props.doCurrenciesLoad()
    }

    render() {
        return (
            <div className="" >
				Home
            </div>
        )
    }
}

export default Home
