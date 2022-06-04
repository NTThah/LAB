import React, { Component } from 'react';
import { Card, CardText, CardTitle, CardImg, CardBody } from "reactstrap";

class RenderDish extends Component {
    render() {
        const dish = this.props.dish;
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
}

export default RenderDish;