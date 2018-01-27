/*
 * FeaturePage
 *
 * List all the features
 */
import React, { Component } from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import H1 from 'components/H1';

const ResponsiveWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  color: #444;
`;

const FixedWrapper = styled.div`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-gap: 20px;
  color: #444;
`;


const Box = styled.div`
  background-color: #444;
  color: #fff;
  border-radius: 5px;
  padding: 20px;
  font-size: 150%;
  text-align: center;
`;

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
          <title>Grid Page</title>
          <meta name="description" content="Grid page of React.js Boilerplate application" />
        </Helmet>
        <H1>
          {'Responsive grid '}
        </H1>
        <ResponsiveWrapper>
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
          <Box>D</Box>
          <Box>E</Box>
          <Box>F</Box>
        </ResponsiveWrapper>
        <H1>
          {'Fixed grid'}
        </H1>
        <FixedWrapper>
          <Box>A</Box>
          <Box>B</Box>
          <Box>C</Box>
          <Box>D</Box>
          <Box>E</Box>
          <Box>F</Box>
        </FixedWrapper>
      </div>
    );
  }
}
