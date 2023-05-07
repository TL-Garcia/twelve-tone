import {expect, test, vi} from 'vitest'
import {render, screen} from '@/test';
import { Button } from '.';

const BUTTON_TEXT = 'Click me!';

test('it works', () => {
  render(<Button onClick={vi.fn()} text={BUTTON_TEXT}/>)

  const button = screen.getByRole('button', {name: BUTTON_TEXT})

  expect(button).toBeInTheDocument();
})
