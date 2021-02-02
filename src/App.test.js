import { render, screen } from '@testing-library/react';
import App from './App';
import CardPlayer from './components/cardPlayer/cardPlayer'
import NavBar from './components/navBar/navBar'

test('Test CardPlayer Component', () => {
  const info = {
    first_name: 'luis',
    last_name: 'sanchez',
    h_meters: '1.96',
    h_in: '77'
  }
  render(<CardPlayer infoPlayer={info} />);
  const linkElement = screen.getByText(/luis/i);
  expect(linkElement).toBeInTheDocument();
});







