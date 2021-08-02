import React from 'react'

class ApiClient extends React.Component {

    constructor(props){
        super(props);
        this.state={
            error: null,
            isLoaded: false,
            items:[]
        };
    }

      componentDidMount() {
    fetch("https://random-word-api.herokuapp.com/word?number=1")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
          
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render(){

const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
        console.log(this.state.items);
      return (
  
        <div>{items}</div>
        
      );
    }
  }
}

export default ApiClient;