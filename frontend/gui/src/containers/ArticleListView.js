import React from 'react';
import Articles from '../components/Article';
import axios from 'axios';

class ArticleList extends React.Component{
    state = {
        articles:[]
    }

    componentDidMount(){
        axios.get('http://localhost:8080/api/')
            .then(res=>{
                this.setState({
                    articles:res.data
                });
                console.log(res.data);
            })
            .catch(err=>console.log(err));
    }

    render(){
        return(
            <Articles data={this.state.articles}/>
        )
            
    }
}

export default ArticleList;