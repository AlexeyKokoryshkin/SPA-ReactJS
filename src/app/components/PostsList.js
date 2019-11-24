import React, { Component } from 'react';
import PostItem from './PostItem';

class PostsList extends Component {
    render() {

        if (!this.props.posts.length) {
          return null;
        }
        console.log(this.props.posts)
        const posts = this.props.posts.map((post, index) => {
          return <PostItem key={index} {...post}/>
        })
    
        return (
          <>
            <h1>Отзывы</h1>
            <div>
              {posts}
            </div>
          </>
        )
      }
}

export default PostsList