var GreeterMessage = React.createClass({
  render: function(){
    return(
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>{this.props.message}</p>
      </div>
    )
  }
});

var GreeterForm = React.createClass({

  onFormSubmit: function(e){   //since event handler, gets passed event object
      e.preventDefault();
      var name = this.refs.name.value;
      var message = this.refs.message.value
      if(typeof name==='string' && name.length > 0){
        this.refs.name.value ="";
      };
      if(typeof message==='string' && message.length > 0){
        this.refs.message.value ="";
      };
      this.props.onNewName(name);
      this.props.onNewMessage(message);
    },

  render: function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <input type="text" ref="name" />
        <input type="text" ref="message" />
        <button>Submit</button>
      </form>
    );
  }
});


var Greeter = React.createClass({

  getDefaultProps: function(){
    return {
      name: "Andrew",
      message: "This is a test.  Had this been a real emergency ..."
  }
},

  getInitialState: function(){
    return{
      name: this.props.name,
      message: this.props.message
    }
  },

  handleNewName: function(name, message){   //since event handler, gets passed event object
      this.setState({name: name});
    },

  handleNewMessage: function(message){
    this.setState({message: message});
  },


  render: function(){
    var name = this.state.name;
    var message = this.state.message;
    return(
        <div>
          <GreeterMessage name={name} message={message}/>
          <GreeterForm onNewName={this.handleNewName} onNewMessage = {this.handleNewMessage}/>

        </div>
      );
  }

});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
);
