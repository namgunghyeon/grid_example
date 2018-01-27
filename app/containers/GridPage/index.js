/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';

export default class GridPage extends Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Feature Page</title>
          <meta name="description" content="Feature page of React.js Boilerplate application" />
        </Helmet>
        <H1>
          {'123'}
        </H1>
      </div>
    );
  }
}
