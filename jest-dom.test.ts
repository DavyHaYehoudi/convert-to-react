import { screen } from "@testing-library/react";

test('it works with jest-dom', () => {
  document.body.innerHTML = '<div><span>Test</span></div>';
  
  expect(screen.getByText('Test')).toBeInTheDocument();
});
