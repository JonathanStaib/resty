import '@testing-library/jest-dom';
import { screen, render } from '@testing-library/react';

import Header from '.';

describe('Header Component', () => {
  it('gets a header elem', () => {
    render(<Header />);
    const header = screen.getByTestId('header');
    expect(header).toBeInTheDocument();
  });
  it('created h1 properly', () => {
    render(<Header />);
    const h1 = screen.getByText('RESTy');
    expect(h1).toBeInTheDocument();
  })
})