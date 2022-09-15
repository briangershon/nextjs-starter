import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { Navbar } from '@/components/Navbar';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null),
    };
  },
}));

describe('Navbar', () => {
  it('renders Home link', () => {
    render(<Navbar />);

    const el = screen.getAllByRole('link');

    expect(el[0]).toHaveTextContent('Home');
    expect(el[0]).toHaveAttribute('href', '/');
  });

  it('renders About link', () => {
    render(<Navbar />);

    const el = screen.getAllByRole('link');

    expect(el[1]).toHaveTextContent('About');
    expect(el[1]).toHaveAttribute('href', '/about');
  });
});
