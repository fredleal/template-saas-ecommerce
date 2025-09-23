"use client"
// src/app/page.tsx
import { Button, Input, Text, Heading, Price, Badge, Icon } from '@/components/atoms'
import { Card, ProductCard, Rating } from '@/components/molecules'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Template SaaS - Design System
        </h1>
        
        {/* NOVO: StarIcon & Rating System */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">StarIcon & Rating System - NOVO!</h2>
          
          {/* StarIcon Variants */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">StarIcon Variants</h3>
            <div className="flex gap-6 items-center flex-wrap">
              <div className="flex items-center gap-2">
                <Icon name="StarIcon" size="lg" color="warning" />
                <Text size="sm">StarIcon (outline)</Text>
              </div>
              <div className="flex items-center gap-2">
                {/* Usando StarIcon direta para mostrar variant filled */}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-500">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="currentColor" />
                </svg>
                <Text size="sm">StarIcon (filled)</Text>
              </div>
            </div>
          </div>

          {/* Rating Component Examples */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Rating Component (Molecule)</h3>
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
                  <div className="flex items-center justify-between">
                    <Text size="sm">Sem avaliações:</Text>
                    <Rating value={0} color="secondary" />
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
                    <Text size="sm">Medium (padrão):</Text>
                    <Rating value={4.5} size="md" showValue />
                  </div>
                  <div className="flex items-center justify-between">
                    <Text size="sm">Large:</Text>
                    <Rating value={4.5} size="lg" showValue />
                  </div>
                  <div className="flex items-center justify-between">
                    <Text size="sm">Extra Large:</Text>
                    <Rating value={4.5} size="xl" showValue />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* E-commerce Context with Ratings */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">E-commerce with Ratings</h3>
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
          </div>

          {/* Rating em diferentes contextos */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Rating in Different Contexts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {/* Product Review Section */}
              <div className="bg-white p-4 rounded-lg border">
                <Text weight="semibold" className="mb-3">Customer Reviews</Text>
                <div className="space-y-4">
                  <div className="border-b pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Text size="sm" weight="medium">João Silva</Text>
                      <Rating value={5} size="sm" />
                    </div>
                    <Text size="sm" color="secondary">
                      "Excelente produto! Superou minhas expectativas em todos os aspectos."
                    </Text>
                  </div>
                  <div className="border-b pb-3">
                    <div className="flex items-center justify-between mb-2">
                      <Text size="sm" weight="medium">Maria Santos</Text>
                      <Rating value={4} size="sm" />
                    </div>
                    <Text size="sm" color="secondary">
                      "Muito bom, entrega rápida e produto conforme descrito."
                    </Text>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Text size="sm" weight="medium">Pedro Costa</Text>
                      <Rating value={3} size="sm" />
                    </div>
                    <Text size="sm" color="secondary">
                      "Produto OK, mas o preço poderia ser melhor."
                    </Text>
                  </div>
                </div>
              </div>

              {/* Overall Rating Summary */}
              <div className="bg-white p-4 rounded-lg border">
                <Text weight="semibold" className="mb-3">Overall Rating</Text>
                <div className="text-center mb-4">
                  <Rating value={4.3} size="xl" showValue />
                  <Text size="sm" color="muted" className="mt-2">
                    Baseado em 1,847 avaliações
                  </Text>
                </div>
                <div className="space-y-2">
                  {[5, 4, 3, 2, 1].map((stars) => (
                    <div key={stars} className="flex items-center gap-2">
                      <Text size="xs" className="w-2">{stars}</Text>
                      <Icon name="StarIcon" size="xs" color="warning" decorative />
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-yellow-400 h-2 rounded-full" 
                          style={{ 
                            width: stars === 5 ? '65%' : 
                                   stars === 4 ? '25%' : 
                                   stars === 3 ? '7%' : 
                                   stars === 2 ? '2%' : '1%' 
                          }}
                        />
                      </div>
                      <Text size="xs" color="muted" className="w-8">
                        {stars === 5 ? '65%' : 
                         stars === 4 ? '25%' : 
                         stars === 3 ? '7%' : 
                         stars === 2 ? '2%' : '1%'}
                      </Text>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Icon System */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Icon System (6 Atoms)</h2>
          
          {/* Icon Variants - Agora incluindo StarIcon */}
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
            </div>
          </div>

          {/* Icons em contexto - Buttons com StarIcon */}
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
            </div>
          </div>
        </section>

        {/* Badge Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Badge Component (Atom)</h2>
          
          {/* Badge + Icon + Rating combinations */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Badge + Icon + Rating Combinations</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border">
                <Icon name="StarIcon" size="sm" color="warning" decorative />
                <Rating value={4.8} size="sm" />
                <Badge variant="info" size="sm">Bestseller</Badge>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border">
                <Icon name="HeartIcon" size="sm" color="error" decorative />
                <Badge variant="info" size="sm">Favoritos</Badge>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border">
                <Icon name="CartIcon" size="sm" color="success" decorative />
                <Badge variant="success" size="sm">Em estoque</Badge>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testando Card Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Card Component (Molecule)</h2>
          
          {/* Card com Ratings */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Cards with Ratings & Icons</h3>
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
          </div>
        </section>
        
        {/* Outros componentes mantidos mas resumidos */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Other Components</h2>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Button Variants with Icons</h2>
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
                  <Icon name="StarIcon" size="sm" color="warning" decorative />
                  Ghost Button
                </Button>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Price Component with Ratings</h2>
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
      </div>
    </main>
  )
}