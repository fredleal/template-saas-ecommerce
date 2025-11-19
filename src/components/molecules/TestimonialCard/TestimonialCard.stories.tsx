import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TestimonialCard } from './TestimonialCard'

const meta = {
  title: 'Design System/Molecules/TestimonialCard',
  component: TestimonialCard,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Card de depoimento que exibe uma citação com avatar, nome do autor, cargo e empresa. Ideal para seções de testimonials e social proof.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    avatar: {
      control: 'text',
      description: 'URL da imagem do avatar',
    },
    quote: {
      control: 'text',
      description: 'Texto do depoimento',
    },
    author: {
      control: 'text',
      description: 'Nome do autor',
    },
    title: {
      control: 'text',
      description: 'Cargo do autor',
    },
    company: {
      control: 'text',
      description: 'Nome da empresa (opcional)',
    },
  },
} satisfies Meta<typeof TestimonialCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: 'https://i.pravatar.cc/150?img=1',
    quote:
      'This product has completely transformed the way we work. The team is more productive and happier than ever!',
    author: 'Sarah Johnson',
    title: 'CEO',
    company: 'Tech Startup Inc',
  },
}

export const WithoutCompany: Story = {
  args: {
    avatar: 'https://i.pravatar.cc/150?img=12',
    quote:
      'Amazing experience from start to finish. Highly recommended to anyone looking for quality service.',
    author: 'Michael Chen',
    title: 'Product Manager',
  },
}

export const LongQuote: Story = {
  args: {
    avatar: 'https://i.pravatar.cc/150?img=5',
    quote:
      'I have been using this platform for over a year now, and I must say it has exceeded all my expectations. The features are robust, the support team is incredibly responsive, and the overall experience has been nothing short of excellent. I would highly recommend this to anyone looking for a reliable solution.',
    author: 'Emma Wilson',
    title: 'Senior Developer',
    company: 'Software Solutions Ltd',
  },
}

export const ThreeTestimonials: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <TestimonialCard
        avatar="https://i.pravatar.cc/150?img=3"
        quote="Excellent service and great results. Our team productivity increased by 40%!"
        author="John Smith"
        title="CTO"
        company="Enterprise Corp"
      />
      <TestimonialCard
        avatar="https://i.pravatar.cc/150?img=9"
        quote="The best investment we've made this year. ROI was immediate and substantial."
        author="Lisa Anderson"
        title="Marketing Director"
        company="Growth Agency"
      />
      <TestimonialCard
        avatar="https://i.pravatar.cc/150?img=7"
        quote="User-friendly interface with powerful features. Exactly what we needed!"
        author="David Kim"
        title="Operations Manager"
        company="Logistics Plus"
      />
    </div>
  ),
}

export const TestimonialsSection: Story = {
  render: () => (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">
            Trusted by thousands of satisfied clients worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard
            avatar="https://i.pravatar.cc/150?img=11"
            quote="Game-changing platform that simplified our entire workflow. Couldn't be happier!"
            author="Rachel Green"
            title="Founder"
            company="Design Studio"
          />
          <TestimonialCard
            avatar="https://i.pravatar.cc/150?img=13"
            quote="Outstanding support team and feature-rich platform. Worth every penny!"
            author="James Miller"
            title="VP of Engineering"
            company="Tech Innovations"
          />
          <TestimonialCard
            avatar="https://i.pravatar.cc/150?img=15"
            quote="The results speak for themselves. Our efficiency has doubled since switching."
            author="Sophia Martinez"
            title="Project Lead"
            company="Consulting Group"
          />
        </div>
      </div>
    </section>
  ),
}

export const TwoColumns: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      <TestimonialCard
        avatar="https://i.pravatar.cc/150?img=8"
        quote="This platform has revolutionized our business operations. The ROI was evident within the first month of implementation."
        author="Alex Thompson"
        title="Chief Operating Officer"
        company="Global Enterprises"
      />
      <TestimonialCard
        avatar="https://i.pravatar.cc/150?img=10"
        quote="Exceptional product with outstanding customer service. The team goes above and beyond to ensure success."
        author="Maria Garcia"
        title="Head of Product"
        company="Innovation Labs"
      />
    </div>
  ),
}

export const WithShadow: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <TestimonialCard
        avatar="https://i.pravatar.cc/150?img=20"
        quote="Five stars! Couldn't ask for a better solution to our needs."
        author="Tom Wilson"
        title="Founder & CEO"
        company="StartupXYZ"
        className="shadow-lg"
      />
      <TestimonialCard
        avatar="https://i.pravatar.cc/150?img=22"
        quote="The quality and attention to detail is impressive. Highly recommend!"
        author="Jessica Brown"
        title="Product Owner"
        company="Tech Corp"
        className="shadow-lg"
      />
      <TestimonialCard
        avatar="https://i.pravatar.cc/150?img=25"
        quote="Best decision we made this year. Results exceeded expectations!"
        author="Chris Davis"
        title="Director of Sales"
        company="Enterprise Solutions"
        className="shadow-lg"
      />
    </div>
  ),
}

export const SingleColumn: Story = {
  render: () => (
    <div className="max-w-2xl mx-auto">
      <TestimonialCard
        avatar="https://i.pravatar.cc/150?img=30"
        quote="This product has been a game-changer for our team. The intuitive interface, robust features, and exceptional support have made it an invaluable tool in our daily operations. We've seen a significant improvement in productivity and team collaboration since implementing this solution."
        author="Patricia Moore"
        title="VP of Operations"
        company="Fortune 500 Company"
      />
    </div>
  ),
}
