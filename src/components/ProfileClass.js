import React from "react";
class ProfileClass extends React.Component {
    constructor(props){
        super(props);
        console.log(`child constructor ${this.props.name}`);
        this.state = {
            userInfo:{
                name: '',
                avatar_url: ''
            }
        }
    }
    async componentDidMount(){
        const data = await fetch('https://api.github.com/users/ajayfageria');
        const json = await data.json();
        this.setState({
            userInfo: json
        })
        console.log(`child componentDidMount ${this.props.name}`);
    }
    componentDidUpdate(){
        console.log('component did update');
    }
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
  render() {
    console.log(`child - render ${this.props.name}`);
    return <h2>Profile class component -<img src={this.state.userInfo.avatar_url}/> {this.state.userInfo.name}</h2>;
  }
}
export default ProfileClass;
