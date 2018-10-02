import React, {Component} from 'react';

export default class Test extends Component {
    state = {
        title: '',
        body: ''
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => this.setState({
                title: data.title,
                body: data.body
            }))
            .then(json => console.log(json));
    }

    /*  componentWillMount() {
     console.log('component will mount...');
     }

     componentDidUpdate() {
     console.log('component Did Update...');
     }

     componentDidUpdate() {
     console.log('component Did Update...');
     }

     componentDidMount() {
     console.log('component did mount...');
     }

     componentWillUpdate() {
     console.log('component will mount...');
     }

     componentWillReceiveProps(nextProps, nextState) {
     console.log('component Will Receive Props...');
     }

     static getDerivedStateFromProps(nextProps, prevState) {
     return null;
     }*/

    render() {
        const {title, body} = this.state;
        return (
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>

        );
    }
}