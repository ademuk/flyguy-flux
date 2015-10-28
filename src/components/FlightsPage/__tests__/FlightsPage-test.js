import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import ReactDom from 'react-dom'
import Link from '../../Link';

jest.dontMock('../FlightsPage.js');
jest.dontMock('../../../decorators/withStyles');

var FlightsPageCss = require('../FlightsPage.css');
FlightsPageCss.use = jest.genMockFunction();
FlightsPageCss.unuse = jest.genMockFunction();
FlightsPageCss.locals = {};

const FlightsPage = require('../FlightsPage');

describe('FlightsPage', function() {
  it('shows message if there are no flights', function() {
    var page = ReactTestUtils.renderIntoDocument(
        <FlightsPage results={[]} />
    );
    var p = ReactTestUtils.findRenderedDOMComponentWithTag(page, 'p');
    expect(ReactDom.findDOMNode(p).textContent)
      .toEqual('You don\'t have any flights yet. You should log a flight.');
  });

  it('shows flights', function() {
    var page = ReactTestUtils.renderIntoDocument(
      <FlightsPage results={[
        {
          id: '1',
          name: 'One',
          date: '20/10/2015'
        },
        {
          id: '2',
          name: 'Two',
          date: '22/10/2015'
        }
      ]}
      />
    );
    var dates = ReactTestUtils.scryRenderedDOMComponentsWithTag(page, 'small');
    expect(ReactDom.findDOMNode(dates[0]).textContent).toEqual('20/10/2015');
    expect(ReactDom.findDOMNode(dates[1]).textContent).toEqual('22/10/2015');
  });
});
