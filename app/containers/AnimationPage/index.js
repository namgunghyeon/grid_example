/**
 *
 * Form
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { Motion, spring } from 'react-motion';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectAnimation from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

export class AimationPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <FormattedMessage {...messages.header} />
        <Motion defaultStyle={{ opacity: 0 }} style={{ opacity: spring(1) }}>
          { (style) => <div style={style}>Can you see me?</div> }
        </Motion>
      </div>
    );
  }
}

AimationPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  animation: makeSelectAnimation(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'animation', reducer });
const withSaga = injectSaga({ key: 'animation', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AimationPage);
