import React from "react";
import { connect } from "react-redux";
import { add } from "../redux/action/action";
import Link from 'next/link'

class Form extends React.Component {
  static getInitialProps({ store }) {}
  constructor(props) {
    super(props);
    this.state={
        name:""
    }
  }
  
  handleInput=(e)=>{
      
      let target = e.target
      let value = target.value

      this.setState({
        name:value
      })
  }

  handleSubmit = (e) => {
    
    
    this.props.dispatch(add(this.state.name))
    
}

  render() { console.log("state",this.props)
      
    
    return (
      <div>
        
      <React.Fragment>
      <div>
    <div className="text-center">
     <form className="form-signin">
       
       <h1 className="h3 mb-3 font-weight-normal">Please Fill up the Name Section</h1>
       <label htmlFor="inputName" className="sr-only">Name</label>
       <div className="form-group mx-sm-3 mb-2">
     <label htmlFor="inputName" className="sr-only">Name</label>
     <input type="Name" className="form-control" id="inputName" onChange={this.handleInput} value={this.state.name} placeholder="Name" required/>
   </div>
      
   <Link href="/main">
   <button type="submit"  className="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
 </Link>

     </form>
   </div>
    </div>
    </React.Fragment>
        
      </div>
    );
  }
}




const mapStatetoProps = state => ({
  state:state
})

export default connect(mapStatetoProps)(Form)