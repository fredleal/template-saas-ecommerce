'use client'
// src/app/page.tsx
import { Button, Text, Price, Badge, Icon } from '@/components/atoms'
import { Card, Rating } from '@/components/molecules'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Template SaaS - Design System
        </h1>

        {/* NOVO: UserIcon */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">
            UserIcon - NEW! 👤
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">UserIcon Usage</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="UserIcon" size="md" color="primary" />
                  <Text weight="medium">User Profile</Text>
                </div>
                <Text size="sm" color="secondary">Profile and account settings</Text>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="UserIcon" size="md" color="secondary" />
                  <Text weight="medium">Authentication</Text>
                </div>
                <Text size="sm" color="secondary">Login and signup flows</Text>
              </div>
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex items-center gap-2 mb-2">
                  <Icon name="UserIcon" size="md" color="info" />
                  <Text weight="medium">User Reviews</Text>
                </div>
                <Text size="sm" color="secondary">Customer feedback sections</Text>
              </div>
            </div>
          </div>

          {/* UserIcon in Reviews */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">
              UserIcon in Customer Reviews
            </h3>
            <div className="bg-white p-4 rounded-lg border max-w-2xl">
              <Text weight="semibold" className="mb-3">Customer Reviews</Text>
              <div className="space-y-4">
                <div className="border-b pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon name="UserIcon" size="sm" color="primary" />
                      <Text size="sm" weight="medium">João Silva</Text>
                    </div>
                    <Rating value={5} size="sm" />
                  </div>
                  <Text size="sm" color="secondary">
                    &quot;Excelente produto! Superou minhas expectativas.&quot;
                  </Text>
                </div>
                <div className="border-b pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Icon name="UserIcon" size="sm" color="primary" />
                      <Text size="sm" weight="medium">Maria Santos</Text>
                    </div>
                    <Rating value={4} size="sm" />
                  </div>
                  <Text size="sm" color="secondary">
                    &quot;Muito bom, entrega rápida e produto conforme descrito.&quot;
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icon System */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Icon System (7 Atoms)</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Available Icons</h3>
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
                <Text size="sm">UserIcon 👤 NEW!</Text>
              </div>
            </div>
          </div>

          {/* Icons em contexto - Buttons */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Icons in Buttons</h3>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary" size="md">
                <Icon name="CartIcon" size="sm" decorative />
                Adicionar ao carrinho
              </Button>
              <Button variant="outline" size="md">
                <Icon name="HeartIcon" size="sm" color="error" decorative />
                Favoritar
              </Button>
              <Button variant="secondary" size="md">
                <Icon name="SearchIcon" size="sm" decorative />
                Buscar
              </Button>
              <Button variant="ghost" size="md">
                <Icon name="StarIcon" size="sm" color="warning" decorative />
                Avaliar
              </Button>
              <Button variant="outline" size="md">
                <Icon name="UserIcon" size="sm" decorative />
                Minha conta
              </Button>
            </div>
          </div>
        </section>

        {/* Rating System */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Rating System</h2>

          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Rating Examples</h3>
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
          </div>
        </section>

        {/* E-commerce Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">E-commerce Examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
            <div className="bg-white p-4 rounded-lg border">
              <div className="flex justify-between items-start mb-2">
                <Text weight="semibold">Smartphone Pro Max</Text>
                <Badge variant="success" size="sm">Em estoque</Badge>
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
                  <Icon name="UserIcon" size="sm" color="secondary" className="cursor-pointer hover:text-gray-700" />
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
                <Badge variant="warning" size="sm">Últimas 5</Badge>
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

        {/* Card Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Card Component (Molecule)</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
            <Card
              variant="elevated"
              title="Produto Premium"
              subtitle="Categoria: Eletrônicos"
              image="https://picsum.photos/300/200?random=1"
              actions={
                <>
                  <Button variant="outline" size="sm">
                    <Icon name="SearchIcon" size="xs" decorative />
                    Ver mais
                  </Button>
                  <Button variant="primary" size="sm">
                    <Icon name="CartIcon" size="xs" decorative />
                    Comprar
                  </Button>
                </>
              }
            >
              <div className="space-y-2">
                <Rating value={4.9} size="sm" showValue showCount count={2847} />
                <Text size="sm" color="secondary">
                  Produto premium com excelentes avaliações dos clientes.
                </Text>
                <div className="flex gap-2">
                  <Badge variant="success" size="sm">Em estoque</Badge>
                  <Badge variant="info" size="sm">Frete grátis</Badge>
                </div>
              </div>
            </Card>

            <Card
              variant="default"
              title="Review do Blog"
              subtitle="Análise detalhada"
              image="https://picsum.photos/300/200?random=2"
              actions={
                <Button variant="ghost" size="sm">
                  <Icon name="PlusIcon" size="xs" decorative />
                  Ler review
                </Button>
              }
            >
              <div className="space-y-2">
                <Rating value={4.5} size="sm" showValue />
                <Text size="sm">
                  Análise completa do produto com prós e contras detalhados.
                </Text>
                <div className="flex gap-2">
                  <Badge variant="default" size="sm">Review</Badge>
                  <Badge variant="default" size="sm">Tech</Badge>
                </div>
              </div>
            </Card>

            <Card
              variant="outlined"
              title="Produto Popular"
              subtitle="Mais vendido"
              isClickable
              onClick={() => alert('Produto clicado!')}
            >
              <div className="space-y-2">
                <Rating value={4.7} size="sm" showValue showCount count={5924} />
                <Text size="sm" color="muted">
                  Nosso produto mais popular com milhares de avaliações positivas.
                </Text>
                <div className="flex items-center gap-2">
                  <Icon name="StarIcon" size="sm" color="warning" decorative />
                  <Badge variant="warning" size="sm">Bestseller</Badge>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Other Components */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Other Components</h2>

          <section className="mb-8">
            <h3 className="text-xl font-medium mb-4">Button Variants with Icons</h3>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">
                <Icon name="PlusIcon" size="sm" decorative />
                Primary Button
              </Button>
              <Button variant="secondary">
                <Icon name="SearchIcon" size="sm" decorative />
                Secondary Button
              </Button>
              <Button variant="outline">
                <Icon name="HeartIcon" size="sm" decorative />
                Outline Button
              </Button>
              <Button variant="ghost">
                <Icon name="UserIcon" size="sm" decorative />
                Ghost Button
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
