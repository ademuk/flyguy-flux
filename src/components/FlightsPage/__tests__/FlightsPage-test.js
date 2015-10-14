import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';

// jest.dontMock('history/lib/useQueries');
// var useQueries = require('history/lib/useQueries');
// useQueries.default = function() {
//   return function() {
//     return function() {
//       return jest.genMockFunction();
//     };
//   };
// };

//jest.dontMock('fbjs/lib/ExecutionEnvironment');
var ExecutionEnvironment = require('fbjs/lib/ExecutionEnvironment');
ExecutionEnvironment.canUseDOM = false;

var FlightsPageCss = require('../FlightsPage.css');
FlightsPageCss.use = jest.genMockFunction();
FlightsPageCss.unuse = jest.genMockFunction();
FlightsPageCss.locals = {};

jest.dontMock('../FlightsPage.js');
const FlightsPage = require('../FlightsPage');

describe('FlightsPage', function() {
  it('shows message if there are no flights', function() {
    var page = ReactTestUtils.renderIntoDocument(
        <FlightsPage results={[]} />
    );
    var p = ReactTestUtils.findRenderedDOMComponentWithTag(page, 'p');

    expect(React.findDOMNode(p).textContent)
      .toEqual('You don\'t have any flights yet. You should log a flight.');
  });
});
