import React from 'react/addons';
import FlightsPage from '../FlightsPage';

var TestUtils = React.addons.TestUtils;

jest.dontMock('../FlightsPage.js');

describe('FlightsPage', function () {
  it('shows message if there are no flights', function () {
    var page = TestUtils.renderIntoDocument(
        <FlightsPage results={[]} />
      ),
      p = TestUtils.findRenderedDOMComponentWithTag(page, 'p');
    expect(React.findDOMNode(p).textContent)
      .toEqual('You don\'t have any flights yet. You should log a flight.');
  });
});
