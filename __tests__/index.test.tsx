import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

test('Home page is complete', () => {
  render(<Home />)
  expect(screen.getByText('HENRY AQUINO')).toBeInTheDocument()
  expect(screen.getByText('Informatic Engineer')).toBeInTheDocument()
})
