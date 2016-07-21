class Image extends React.Component {
  constructor(){
    super();
    this.state = {show: false};
  }
  _flip(){

    this.setState({show: !this.state.show});
  }
  render(){
    return (
      <div>
        { this.state.show ? <img src={this.props.image}/> : null}
      <div>

        <Button shown={ this._flip.bind(this) } />
        <p> Click this for mind blowing image </p>
      </div>
      </div>);
  }
}

class Button extends React.Component {
  _handleClick(){
    this.props.shown();
  }
  render(){
    return (<i onClick={ this._handleClick.bind(this) } className="fa fa-arrow-up" aria-hidden="true"></i>);
  }
}

ReactDOM.render(<Image image="http://i.imgur.com/2pbwL6m.gif"/>, document.getElementById('app-container'));

