'use client'
import { Button, Text, Price, Badge, Icon } from '@/components/atoms'
import { Card, Rating } from '@/components/molecules'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Template SaaS - Design System
        </h1>

        {/* 🎯 MILESTONE REACHED! */}
        <section className="mb-12 bg-green-50 border border-green-200 rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-800">
            🎉 MILESTONE REACHED: 9 Icons Complete!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Text weight="semibold" className="mb-2 text-green-700">CheckIcon - MILESTONE TRIGGER! ✅</Text>
              <Text size="sm" className="text-green-600">
                With CheckIcon complete, we now have 9 icons and are ready to implement testing!
              </Text>
            </div>
            <div className="flex items-center gap-4">
              <Icon name="CheckIcon" size="xl" color="success" />
              <div>
                <Badge variant="success" size="sm">Testing Ready</Badge>
                <Text size="xs" color="muted" className="mt-1">Next: Vitest + Testing Library</Text>
              </div>
            </div>
          </div>
        </section>

        {/* CheckIcon Showcase */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            CheckIcon - NEW! ✅
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">CheckIcon Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="CheckIcon" size="md" color="success" />
                  <Text weight="medium">Success States</Text>
                </div>
                <Text size="sm" color="secondary">Confirmations, completed tasks</Text>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="CheckIcon" size="md" color="primary" />
                  <Text weight="medium">Form Validation</Text>
                </div>
                <Text size="sm" color="secondary">Valid inputs, approved items</Text>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="CheckIcon" size="md" color="info" />
                  <Text weight="medium">Status Indicators</Text>
                </div>
                <Text size="sm" color="secondary">Completed processes, verified data</Text>
              </div>
            </div>
          </div>

          {/* CheckIcon in Different Contexts */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">CheckIcon in Action</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-4 rounded-lg border">
                <Text weight="semibold" className="mb-3">Order Status</Text>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="CheckIcon" size="sm" color="success" />
                    <Text size="sm">Order Confirmed</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckIcon" size="sm" color="success" />
                    <Text size="sm">Payment Processed</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckIcon" size="sm" color="success" />
                    <Text size="sm">Shipped</Text>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                    <Text size="sm" color="muted">Delivered</Text>
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <Text weight="semibold" className="mb-3">Task Completion</Text>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Icon name="CheckIcon" size="sm" color="success" />
                    <Text size="sm">Design mockups</Text>
                    <Badge variant="success" size="xs">Done</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="CheckIcon" size="sm" color="success" />
                    <Text size="sm">Component implementation</Text>
                    <Badge variant="success" size="xs">Done</Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full border-2 border-gray-300"></div>
                    <Text size="sm" color="muted">Testing setup</Text>
                    <Badge variant="warning" size="xs">In Progress</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icon System - Now Complete! */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Icon System (9 Atoms - COMPLETE!)</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">All Available Icons</h3>
            <div className="flex gap-6 items-center flex-wrap">
              <div className="flex items-center gap-2">
                <Icon name="CartIcon" size="lg" color="primary" />
                <Text size="sm">CartIcon</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="HeartIcon" size="lg" color="error" />
                <Text size="sm">HeartIcon</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="SearchIcon" size="lg" color="secondary" />
                <Text size="sm">SearchIcon</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="MenuIcon" size="lg" color="primary" />
                <Text size="sm">MenuIcon</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="PlusIcon" size="lg" color="success" />
                <Text size="sm">PlusIcon</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="StarIcon" size="lg" color="warning" />
                <Text size="sm">StarIcon ⭐</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="UserIcon" size="lg" color="primary" />
                <Text size="sm">UserIcon 👤</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="FilterIcon" size="lg" color="secondary" />
                <Text size="sm">FilterIcon 🔽</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckIcon" size="lg" color="success" />
                <Text size="sm">CheckIcon ✅ NEW!</Text>
              </div>
            </div>
          </div>

          {/* Icons in Buttons */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Icons in Buttons</h3>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" size="md">
                <Icon name="CartIcon" size="sm" decorative />
                Add to cart
              </Button>
              <Button variant="outline" size="md">
                <Icon name="HeartIcon" size="sm" color="error" decorative />
                Favorite
              </Button>
              <Button variant="secondary" size="md">
                <Icon name="FilterIcon" size="sm" decorative />
                Filter
              </Button>
              <Button variant="ghost" size="md">
                <Icon name="UserIcon" size="sm" decorative />
                Profile
              </Button>
              <Button variant="primary" size="md">
                <Icon name="CheckIcon" size="sm" decorative />
                Confirm
              </Button>
            </div>
          </div>
        </section>

        {/* Success States with CheckIcon */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Success States & Confirmations</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card
              variant="elevated"
              title="Order Complete"
              subtitle="Your order has been processed"
              actions={
                <Button variant="primary" size="sm">
                  <Icon name="CheckIcon" size="xs" decorative />
                  View Order
                </Button>
              }
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="sm" color="success" />
                  <Text size="sm">Payment confirmed</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="sm" color="success" />
                  <Text size="sm">Order processing</Text>
                </div>
                <Badge variant="success" size="sm">Completed</Badge>
              </div>
            </Card>

            <Card
              variant="default"
              title="Profile Verified"
              subtitle="Account verification complete"
              actions={
                <Button variant="ghost" size="sm">
                  <Icon name="UserIcon" size="xs" decorative />
                  View Profile
                </Button>
              }
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="sm" color="success" />
                  <Text size="sm">Email verified</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="sm" color="success" />
                  <Text size="sm">Identity confirmed</Text>
                </div>
                <Badge variant="success" size="sm">Verified</Badge>
              </div>
            </Card>

            <Card
              variant="outlined"
              title="Tasks Complete"
              subtitle="All milestone tasks finished"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="sm" color="success" />
                  <Text size="sm">9 icons implemented</Text>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="CheckIcon" size="sm" color="success" />
                  <Text size="sm">Testing milestone reached</Text>
                </div>
                <Badge variant="success" size="sm">Ready</Badge>
              </div>
            </Card>
          </div>
        </section>

        {/* Rating System */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Rating System</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            <div className="bg-white p-4 rounded-lg border">
              <Text weight="semibold" className="mb-4">Rating Variants</Text>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Text size="sm">Básico (4.2/5):</Text>
                  <Rating value={4.2} />
                </div>
                <div className="flex items-center justify-between">
                  <Text size="sm">Com valor:</Text>
                  <Rating value={4.8} showValue />
                </div>
                <div className="flex items-center justify-between">
                  <Text size="sm">Com contagem:</Text>
                  <Rating value={3.5} showValue showCount count={127} />
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <Text weight="semibold" className="mb-4">Rating Sizes</Text>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <Text size="sm">Small:</Text>
                  <Rating value={4.5} size="sm" showValue />
                </div>
                <div className="flex items-center justify-between">
                  <Text size="sm">Medium:</Text>
                  <Rating value={4.5} size="md" showValue />
                </div>
                <div className="flex items-center justify-between">
                  <Text size="sm">Large:</Text>
                  <Rating value={4.5} size="lg" showValue />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-commerce Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">E-commerce Examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <Text weight="semibold">Smartphone Pro Max</Text>
                <div className="flex items-center gap-1">
                  <Icon name="CheckIcon" size="xs" color="success" />
                  <Badge variant="success" size="sm">Verified</Badge>
                </div>
              </div>
              <div className="mb-3">
                <Rating value={4.8} size="sm" showValue showCount count={1429} />
              </div>
              <div className="flex gap-2 mb-3">
                <Badge variant="info" size="sm">5G</Badge>
                <Badge variant="default" size="sm">256GB</Badge>
              </div>
              <div className="flex items-center justify-between">
                <Price value={1899.99} size="lg" />
                <div className="flex gap-1">
                  <Icon name="HeartIcon" size="sm" color="secondary" className="cursor-pointer hover:text-red-500" />
                  <Icon name="CartIcon" size="sm" color="primary" className="cursor-pointer hover:text-blue-500" />
                  <Icon name="CheckIcon" size="sm" color="success" className="cursor-pointer" />
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <Text weight="semibold">Notebook Ultrabook</Text>
                <Badge variant="info" size="sm">Lançamento</Badge>
              </div>
              <div className="mb-3">
                <Rating value={4.2} size="sm" showValue showCount count={89} />
              </div>
              <div className="flex gap-2 mb-3">
                <Badge variant="info" size="sm">Intel i7</Badge>
                <Badge variant="default" size="sm">16GB RAM</Badge>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Price value={3499.99} size="sm" isDiscounted />
                  <Price value={2999.99} size="lg" />
                </div>
                <div className="flex gap-1">
                  <Icon name="HeartIcon" size="sm" color="secondary" className="cursor-pointer hover:text-red-500" />
                  <Icon name="CartIcon" size="sm" color="primary" className="cursor-pointer hover:text-blue-500" />
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <Text weight="semibold">Fones Bluetooth Pro</Text>
                <div className="flex items-center gap-1">
                  <Icon name="CheckIcon" size="xs" color="success" />
                  <Badge variant="success" size="sm">Verified</Badge>
                </div>
              </div>
              <div className="mb-3">
                <Rating value={4.6} size="sm" showValue showCount count={892} />
              </div>
              <div className="flex gap-2 mb-3">
                <Badge variant="default" size="sm">ANC</Badge>
                <Badge variant="info" size="sm">30h bateria</Badge>
              </div>
              <div className="flex items-center justify-between">
                <Price value={449.99} size="lg" />
                <div className="flex gap-1">
                  <Icon name="HeartIcon" size="sm" color="secondary" className="cursor-pointer hover:text-red-500" />
                  <Icon name="CartIcon" size="sm" color="primary" className="cursor-pointer hover:text-blue-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other Components */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Other Components</h2>

          <section className="mb-8">
            <h3 className="text-xl font-medium mb-4">Button Variants with Icons</h3>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">
                <Icon name="CheckIcon" size="sm" decorative />
                Confirm
              </Button>
              <Button variant="secondary">
                <Icon name="SearchIcon" size="sm" decorative />
                Search
              </Button>
              <Button variant="outline">
                <Icon name="FilterIcon" size="sm" decorative />
                Filter
              </Button>
              <Button variant="ghost">
                <Icon name="PlusIcon" size="sm" decorative />
                Add
              </Button>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-medium mb-4">Price Component with Ratings</h3>
            <div className="flex gap-8 items-center flex-wrap">
              <div className="text-center">
                <Text size="sm" color="muted" className="mb-1">Produto Premium</Text>
                <Price value={299.99} size="2xl" />
                <Rating value={4.8} size="sm" showValue className="mt-1" />
              </div>
              <div className="text-center">
                <Text size="sm" color="muted" className="mb-1">Oferta Especial</Text>
                <div className="flex items-center gap-2">
                  <Price value={399.99} size="lg" isDiscounted />
                  <Price value={299.99} size="2xl" />
                </div>
                <Rating value={4.5} size="sm" showValue className="mt-1" />
              </div>
              <div className="text-center">
                <Text size="sm" color="muted" className="mb-1">Mais Vendido</Text>
                <Price value={49.99} size="lg" />
                <Rating value={4.9} size="sm" showValue showCount count={1847} className="mt-1" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
