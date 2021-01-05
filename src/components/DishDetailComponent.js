import { Component } from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg
              width="100%"
              src={this.props.dish.image}
              alt={this.props.dish.name}
            />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else {
      <div></div>;
    }
  }

  renderComments(dish) {
    if (dish != null) {
      return (
        <div>
          <h5>Comments</h5>
          <div>
            {dish.comments.map((comment) => {
              return (
                <div>
                  <p>
                    <ul className="list-unstyled">
                      <li>{comment.comment}</li>
                      <li>
                        --{comment.author}, {comment.date}{" "}
                      </li>
                    </ul>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      );
    } else {
      <div></div>;
    }
  }

  render() {
    return (
      <div className="row">
        {this.renderDish(this.props.dish)}

        <div className="col-12 col-md-5 mr-0">
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}

export default DishDetail;
