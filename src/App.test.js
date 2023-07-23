import {render, screen} from '@testing-library/react';
import App from './App';
import Time from './views/Timeline';

//write test about the timeline
test('renders timeline', () => {
    render(<Time/>);
    const linkElement = screen.getByText(/The event of 1 Jan 2021 : Happy New Year/i);
    expect(linkElement).toBeInTheDocument();
});