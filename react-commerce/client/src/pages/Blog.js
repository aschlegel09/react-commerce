import React, {Component} from "react";
import { Link } from "react-router-dom";

class Blog extends Component {

}

componentDidMount() {
    // this.loadModal();
  }

  render() {
    return (
        <div className="col-md-6">
            <div className="card flex-md-row mt-4 shadow-sm h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                    <h4>Category</h4>
                    <h3>Title</h3>
                    <p>Blog Summary</p>
                </div>
                <img className="card-img-right flex-auto d-lg-block" alt="placeholder" src="https://picsum.photos/200/300/?random" />
            </div>
        </div>
    )
};

export default Blog;