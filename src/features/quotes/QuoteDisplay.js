import React, { useEffect } from "react";
import Quote from "./Quote";
import { connect } from "react-redux";
import { fetchRandomQuote } from "../../actions/quoteActions";
import LoadingScreen from "../../commons/LoadingScreen";
import { Container } from 'semantic-ui-react';

const QuoteDisplay = props => {
  useEffect(() => {
    props.fetchRandomQuote();
  }, []);

  if (props.loading) {
    return <LoadingScreen content="Retrieving a new quote" />;
  }

  return (
    <div className="quoteContainer">
      <Container>
        <Quote quote={props.quote}></Quote>
      </Container>
    </div>
  )
};

let mapStateToProps = state => {
  return {
    quote: state.quotes.currentQuote,
    loading: state.quotes.loading
  };
};

let mapDispatchToProps = dispatch => {
  return {
    fetchRandomQuote: () => dispatch(fetchRandomQuote())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteDisplay);
