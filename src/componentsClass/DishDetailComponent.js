import React, { Component } from "react";
import { Card, CardText, CardTitle, CardImg, CardBody } from "reactstrap";
import dateFormat from "dateformat";
import RenderComment from "./RenderComment";

function RenderDish({ dish }) {
  return (
    <div className="col-12 col-md-5 m-1">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}
// function RenderComments({ comments }) {
//   if (comments != null)
//     return (
//       <div className="col-12 col-md-5 m-1">
//         <h4>Comments</h4>
//         <ul className="list-unstyled">
//           {comments.map((comment) => {
//             return (
//               <li key={comment.id}>
//                 <p>{comment.comment}</p>
//                 <p>-- {comment.author} </p>
//                 <p>{dateFormat(comment.date, "dd/mm/yyyy")}</p>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   else return <div></div>;
// }
// dung function component
// const DishDetail = (props) => {
//   if (props.dish != null)
//     return (
//       <div className="container">
//         <div className="row">
//           <RenderDish dish={props.dish} />
//           <RenderComments comments={props.dish.comments} />
//         </div>
//       </div>
//     );
//   else return <div></div>;
// };
// dung class component
class DishDetail extends Component {
 
  render() {
    const dish = this.props.dish;
    if (dish != null)
    return(
      <div className="container">
        <div className="row">
          <RenderDish dish={dish} />
          <RenderComment comments={dish.comments} />
        </div>
      </div>
    )
    else {
      return <div></div>
    }
  }
}
export default DishDetail;
