import { cleanup, render } from '@solidjs/testing-library';
import { afterEach } from 'vitest';

afterEach(() => {
  cleanup();
})

const customRender: typeof render = (ui, options = {}) => {
  return render(ui, {
    // wrap provider(s) here if needed
    wrapper: ({ children }) => children,
    ...options,
  })
}

export * from '@solidjs/testing-library';
export { default as userEvent } from '@testing-library/user-event';
export { customRender as render }
