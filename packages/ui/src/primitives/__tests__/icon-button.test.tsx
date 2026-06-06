/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { IconButton } from '../icon-button'

describe('IconButton primitive', () => {
  it('renders a button with the correct slot', () => {
    render(<IconButton aria-label="Test Label">Icon</IconButton>)
    const button = screen.getByRole('button', { name: 'Test Label' })
    expect(button).toHaveAttribute('data-slot', 'icon-button')
    expect(button).toHaveTextContent('Icon')
  })

  it('renders as a slot when asChild is true', () => {
    render(
      <IconButton asChild aria-label="Custom Link">
        <a href="/test">Link</a>
      </IconButton>
    )
    const link = screen.getByRole('link', { name: 'Custom Link' })
    expect(link).toHaveAttribute('data-slot', 'icon-button')
  })

  it('renders a tooltip when tooltip prop is provided as string', () => {
    render(
      <IconButton tooltip="Helpful Tooltip" aria-label="Action">
        Icon
      </IconButton>
    )
    const button = screen.getByRole('button', { name: 'Action' })
    expect(button).toBeInTheDocument()
  })
})
