import { render, screen } from '@testing-library/react'

function Example() {
	return <div>Example component</div>
}

describe('Example', () => {
	test('dom testing works', () => {
		render(<Example />)

		expect(screen.getByText(/example component/i)).toBeInTheDocument()
	})
})
