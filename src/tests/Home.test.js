import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import renderer from 'react-test-renderer';
import App from '../App';
import Home from '../components/Home';
import Navbar from '../components/Navbar';
import {
  BrowserRouter,
  MemoryRouter
} from 'react-router-dom';

describe('Testing Home Component', () => {

  test('renders all Home subelements correctly', () => {
    const page = renderer.create(<BrowserRouter><App><Home><Navbar /></Home></App></BrowserRouter>).toJSON();
    expect(page).toMatchSnapshot();
  });

  test('render home page first as index.html file', () => {
    render(<MemoryRouter><App /></MemoryRouter>);
    expect(screen.queryByText('Welcome to our page!')).not.toBeNull();
  });
})
