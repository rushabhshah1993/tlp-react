import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import Hello from './Hello';

let container = null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

it('renders the Hello component without a name', () => {
    act(() => {
        render(<Hello />, container);
    });
    expect(container.textContent).toBe('Hey, stranger!');
});

it('renders the Hello component with a name', () => {
    act(() => {
        render(<Hello name="Joe" />, container);
    });
    expect(container.textContent).toBe('Hey, Joe');
});
