import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  render() {
    return (
      <div className="post">
        <div className="header-container">
            <div className="userInfo">
              <img src="https://placehold.co/100x100" alt="user-image"></img>
              <div>
                  <h3>user-handle</h3>
                  <h4>user-location</h4>
              </div>
            </div>
            <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="image-container">
          <img src='https://images.unsplash.com/photo-1552053831-71594a27632d?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='dog'></img>
          <h2>Overlay Text</h2>
        </div>
        <div className="footer">
          <div>
            <i class="fa-regular fa-heart footer-icons"></i>
            <i class="fa-regular fa-comment footer-icons"></i>
            <i class="fa-regular fa-paper-plane footer-icons"></i>
          </div>
          <i class="fa-regular fa-bookmark footer-icons"></i>
        </div>
      </div>
    );
  }
}

export default Post;
