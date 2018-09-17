import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app';

it('shows a comment box', () => {
    const div = document.createElement('div'); //Skapa element

    ReactDOM.render(<App />, div); // fyll element med Component

    expect(div.innerHTML).toContain('Comment Box');

    ReactDOM.unmountComponentAtNode(div); // städa
});
