import React , {Component} from 'react'
import RegularError from '../components/regular-error'


class HandleErrorContainer extends Component {
    state = {
        handleError: false,
        handleInfo: "",
    }
    componentDidCatch(error, info) {
        // Send this error to service as Sentry
        console.log('error ' + info)
        this.setState({
                handleError: true
        })

        this.setState({
            handleInfo: error
       })
    }
  render() {
      if(this.state.handleError) {
        return (
            <RegularError error={this.state.handleInfo}></RegularError>
          ) 
      }
      return this.props.children      
  }
}

export default HandleErrorContainer