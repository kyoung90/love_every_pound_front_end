import React from "react";
import { Card, Container } from "semantic-ui-react";

const Quote = props => {
  const quote = props.quote
    ? [
        <br />,
        <h2> {props.quote.content} </h2>,
        <br />,
        <h4> By: {props.quote.author.name} </h4>
      ]
    : [];

  return (
    <Container id="quoteCard">
      <Card centered fluid className="card">
        <Card.Content className="success"  id = "quoteHeader"><h3>Your Daily Motivation</h3></Card.Content>
        <Card.Content className="success" id="quoteSegment"  header={quote} />
        <Card.Content className="success" extra>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default Quote;
