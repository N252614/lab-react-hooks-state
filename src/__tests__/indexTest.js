import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../App'
import sampleProducts from '../data/products';
import '@testing-library/jest-dom'

test('toggles dark mode on button click', () => {
  render(<App />)
  const toggleBtn = screen.getByRole('button', { name: /toggle/i })
  expect(toggleBtn).toBeInTheDocument()

  fireEvent.click(toggleBtn)
  expect(toggleBtn.textContent.toLowerCase()).toMatch(/light/i)

  fireEvent.click(toggleBtn)
  expect(toggleBtn.textContent.toLowerCase()).toMatch(/dark/i)
})

test('filters products by category', () => {
  render(<App />)
  const dropdown = screen.getByRole('combobox')

  fireEvent.change(dropdown, { target: { value: 'Fruits' } })
  expect(screen.getByText(/Apple/i)).toBeInTheDocument()
  expect(screen.queryByText(/Milk/i)).not.toBeInTheDocument()
})

test('displays message when no products match filter', () => {
  render(<App />)
  const dropdown = screen.getByRole('combobox')
  fireEvent.change(dropdown, { target: { value: 'NonExistent' } })

  expect(screen.getByText(/no products available/i)).toBeInTheDocument()
})

test('adds items to cart', () => {
  render(<App />)

  const appleBtn = screen.getByTestId('product-' + sampleProducts.find(i => i.name === 'Apple').id)
  fireEvent.click(appleBtn)
  expect(screen.getByText(/apple is in your cart/i)).toBeInTheDocument()

  const milkBtn = screen.getByTestId('product-' +sampleProducts.find(i => i.name === 'Milk').id)
  fireEvent.click(milkBtn)
  expect(screen.getByText(/milk is in your cart/i)).toBeInTheDocument()
})