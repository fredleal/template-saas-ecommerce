import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { StepCard } from './StepCard'

describe('StepCard', () => {
  describe('Rendering', () => {
    it('renders step number, title and description', () => {
      render(
        <StepCard
          step={1}
          title="Sign Up"
          description="Create your free account in seconds"
        />
      )

      expect(screen.getByLabelText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Sign Up')).toBeInTheDocument()
      expect(
        screen.getByText('Create your free account in seconds')
      ).toBeInTheDocument()
    })

    it('renders step number as text by default', () => {
      render(
        <StepCard
          step={2}
          title="Configure"
          description="Set up your preferences"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 2')
      expect(stepIndicator).toHaveTextContent('2')
    })

    it('renders icon instead of number when icon is provided', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Start"
          description="Begin your journey"
          icon="CheckIcon"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      // Should contain an SVG icon instead of text number
      expect(stepIndicator.querySelector('svg')).toBeInTheDocument()
      expect(stepIndicator).not.toHaveTextContent('1')
    })

    it('renders with all step numbers 1-5', () => {
      const steps = [1, 2, 3, 4, 5]

      steps.forEach(step => {
        const { unmount } = render(
          <StepCard
            step={step}
            title={`Step ${step}`}
            description={`Description ${step}`}
          />
        )

        expect(screen.getByLabelText(`Step ${step}`)).toBeInTheDocument()
        expect(screen.getByText(`Step ${step}`)).toBeInTheDocument()

        unmount()
      })
    })
  })

  describe('Size Variants', () => {
    it('renders small size variant', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Small Step"
          description="Small description"
          size="sm"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      expect(stepIndicator).toHaveClass('w-8', 'h-8', 'text-sm')
      expect(container.firstChild).toHaveClass('p-4')
    })

    it('renders medium size variant (default)', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Medium Step"
          description="Medium description"
          size="md"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      expect(stepIndicator).toHaveClass('w-12', 'h-12', 'text-lg')
      expect(container.firstChild).toHaveClass('p-6')
    })

    it('renders large size variant', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Large Step"
          description="Large description"
          size="lg"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      expect(stepIndicator).toHaveClass('w-16', 'h-16', 'text-2xl')
      expect(container.firstChild).toHaveClass('p-8')
    })

    it('uses medium size as default when not specified', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Default Size"
          description="Default description"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      expect(stepIndicator).toHaveClass('w-12', 'h-12')
    })
  })

  describe('Orientation', () => {
    it('renders vertical orientation (default)', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Vertical"
          description="Vertical layout"
          orientation="vertical"
        />
      )

      expect(container.firstChild).toHaveClass(
        'flex-col',
        'items-center',
        'text-center'
      )
    })

    it('renders horizontal orientation', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Horizontal"
          description="Horizontal layout"
          orientation="horizontal"
        />
      )

      expect(container.firstChild).toHaveClass(
        'flex-row',
        'items-start',
        'text-left'
      )
    })

    it('uses vertical orientation as default when not specified', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Default Orientation"
          description="Default layout"
        />
      )

      expect(container.firstChild).toHaveClass('flex-col')
    })
  })

  describe('Color Variants', () => {
    it('renders primary variant (default)', () => {
      render(
        <StepCard
          step={1}
          title="Primary"
          description="Primary variant"
          variant="primary"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      expect(stepIndicator).toHaveClass('bg-blue-500', 'text-white')
    })

    it('renders secondary variant', () => {
      render(
        <StepCard
          step={1}
          title="Secondary"
          description="Secondary variant"
          variant="secondary"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      expect(stepIndicator).toHaveClass('bg-gray-500', 'text-white')
    })

    it('renders success variant', () => {
      render(
        <StepCard
          step={1}
          title="Success"
          description="Success variant"
          variant="success"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      expect(stepIndicator).toHaveClass('bg-green-500', 'text-white')
    })

    it('uses primary variant as default when not specified', () => {
      render(
        <StepCard
          step={1}
          title="Default Variant"
          description="Default color"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      expect(stepIndicator).toHaveClass('bg-blue-500')
    })
  })

  describe('Custom Styling', () => {
    it('applies custom className', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Custom"
          description="Custom styling"
          className="custom-test-class"
        />
      )

      expect(container.firstChild).toHaveClass('custom-test-class')
    })

    it('maintains default classes with custom className', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Combined"
          description="Combined classes"
          className="my-custom-class"
        />
      )

      expect(container.firstChild).toHaveClass('my-custom-class')
      expect(container.firstChild).toHaveClass('flex')
      expect(container.firstChild).toHaveClass('flex-col')
    })
  })

  describe('Icons', () => {
    it('renders CheckIcon when specified', () => {
      const { container } = render(
        <StepCard
          step={1}
          title="With Icon"
          description="Has check icon"
          icon="CheckIcon"
        />
      )

      const stepIndicator = screen.getByLabelText('Step 1')
      expect(stepIndicator.querySelector('svg')).toBeInTheDocument()
    })

    it('renders different icons correctly', () => {
      const icons: Array<'CheckIcon' | 'HeartIcon' | 'StarIcon'> = [
        'CheckIcon',
        'HeartIcon',
        'StarIcon',
      ]

      icons.forEach(iconName => {
        const { container, unmount } = render(
          <StepCard
            step={1}
            title={`With ${iconName}`}
            description={`Has ${iconName}`}
            icon={iconName}
          />
        )

        const stepIndicator = screen.getByLabelText('Step 1')
        expect(stepIndicator.querySelector('svg')).toBeInTheDocument()

        unmount()
      })
    })
  })

  describe('Accessibility', () => {
    it('should not have any accessibility violations', async () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Accessible Step"
          description="This step is accessible"
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should have proper aria-label for step indicator', () => {
      render(<StepCard step={3} title="Step Three" description="Third step" />)

      expect(screen.getByLabelText('Step 3')).toBeInTheDocument()
    })

    it('should not have accessibility violations with icon', async () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Icon Step"
          description="Step with icon"
          icon="CheckIcon"
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })

    it('should not have accessibility violations in horizontal layout', async () => {
      const { container } = render(
        <StepCard
          step={1}
          title="Horizontal Step"
          description="Horizontal layout"
          orientation="horizontal"
        />
      )

      const results = await axe(container)
      expect(results).toHaveNoViolations()
    })
  })

  describe('Edge Cases', () => {
    it('handles very long title text', () => {
      const longTitle =
        'This is a very long step title that should be displayed correctly even with lots of text content'

      render(
        <StepCard step={1} title={longTitle} description="Short description" />
      )

      expect(screen.getByText(longTitle)).toBeInTheDocument()
    })

    it('handles very long description text', () => {
      const longDescription =
        'This is a very long step description that should be displayed correctly even with lots and lots of text content that goes on and on explaining the step in great detail'

      render(
        <StepCard step={1} title="Short Title" description={longDescription} />
      )

      expect(screen.getByText(longDescription)).toBeInTheDocument()
    })

    it('handles large step numbers', () => {
      render(
        <StepCard
          step={99}
          title="Step Ninety-Nine"
          description="Large step number"
        />
      )

      expect(screen.getByLabelText('Step 99')).toBeInTheDocument()
      expect(screen.getByLabelText('Step 99')).toHaveTextContent('99')
    })

    it('handles step number 0', () => {
      render(
        <StepCard step={0} title="Step Zero" description="Zero step number" />
      )

      expect(screen.getByLabelText('Step 0')).toBeInTheDocument()
      expect(screen.getByLabelText('Step 0')).toHaveTextContent('0')
    })
  })

  describe('Combined Props', () => {
    it('renders correctly with all props combined', () => {
      const { container } = render(
        <StepCard
          step={2}
          title="Complete Step"
          description="All features enabled"
          icon="CheckIcon"
          size="lg"
          orientation="horizontal"
          variant="success"
          className="custom-class"
        />
      )

      expect(screen.getByText('Complete Step')).toBeInTheDocument()
      expect(screen.getByText('All features enabled')).toBeInTheDocument()
      expect(container.firstChild).toHaveClass('custom-class')
      expect(container.firstChild).toHaveClass('flex-row')
      expect(container.firstChild).toHaveClass('p-8')

      const stepIndicator = screen.getByLabelText('Step 2')
      expect(stepIndicator).toHaveClass('bg-green-500')
      expect(stepIndicator).toHaveClass('w-16', 'h-16')
      expect(stepIndicator.querySelector('svg')).toBeInTheDocument()
    })
  })
})
