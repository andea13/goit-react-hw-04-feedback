import React from 'react';
import PropTypes from 'prop-types';
import { ButtonList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, handleFeedbackType }) => {
  return (
    <ButtonList>
      {options.map(option => {
        return (
          <li key={option}>
            <Button type="button" onClick={() => handleFeedbackType(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </ButtonList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFeedbackType: PropTypes.func.isRequired,
};

export default FeedbackOptions;
