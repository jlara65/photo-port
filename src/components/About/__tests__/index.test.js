import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import About from '..';

// The cleanup function is used to remove components from the DOM to prevent memory leaking, as well as variable or data collisions between tests that could corrupt test results.
afterEach(cleanup);

describe('About component', () => {
  // First Test
  // The render function will do just what its name implies: "render" the component.
  // What actually happens is that Jest creates a simulated DOM in a Node.js environment to approximate the DOM (no component is actually visibly rendered).
  it('render', () => {
    render(<About />);
  });
  // Second Test
  it('matches snapshot DOM node structure', () => {
    // render about
    const { asFragment } = render(<About />);
    expect(asFragment()).toMatchSnapshot();
  });
});
