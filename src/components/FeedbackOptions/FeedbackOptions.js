import React from 'react';
import Button from '../common/Button';
import Proptypes from 'prop-types';
import s from './FeedbackOptions.module.css';

class FeedbackOptions extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { onBadOptionClick, onNeutralOptionClick, onGoodOptionClick } =
      this.props;

    return (
      <div className={s.options}>
        <Button handleClick={onGoodOptionClick} text="Good" />
        <Button handleClick={onNeutralOptionClick} text="Neutral" />
        <Button handleClick={onBadOptionClick} text="Bad" />
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  onGoodOptionClick: Proptypes.func.isRequired,
  onNeutralOptionClick: Proptypes.func.isRequired,
  onBadOptionClick: Proptypes.func.isRequired,
};

export default FeedbackOptions;
