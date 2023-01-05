import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

test('Home page is complete', () => {
  render(<Home />)
  expect(screen.getByText('Hello World')).toBeInTheDocument()
})
