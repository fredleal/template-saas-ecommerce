"use client"
// src/app/page.tsx
import { Button, Input, Text, Heading, Price } from '@/components/atoms'
import { Card, ProductCard } from '@/components/molecules'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Template SaaS - Design System
        </h1>
        
        {/* Testando Card Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Card Component (Molecule)</h2>
          
          {/* Card Variants */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Card Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card variant="default" title="Default Card" size="sm">
                <Text size="sm">Este é um card padrão com borda simples.</Text>
              </Card>
              
              <Card variant="elevated" title="Elevated Card" size="sm">
                <Text size="sm">Card com sombra elevada para destaque.</Text>
              </Card>
              
              <Card variant="outlined" title="Outlined Card" size="sm">
                <Text size="sm">Card com borda mais grossa.</Text>
              </Card>
              
              <Card variant="filled" title="Filled Card" size="sm">
                <Text size="sm">Card com background preenchido.</Text>
              </Card>
            </div>
          </div>

          {/* Card com Imagem e Actions */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Card with Image & Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
              <Card
                variant="elevated"
                title="Produto Exemplo"
                subtitle="Categoria: Eletrônicos"
                image="https://picsum.photos/300/200?random=1"
                actions={
                  <>
                    <Button variant="outline" size="sm">Ver mais</Button>
                    <Button variant="primary" size="sm">Comprar</Button>
                  </>
                }
              >
                <Text size="sm" color="secondary">
                  Este é um exemplo de card com imagem, título, subtítulo e botões de ação.
                </Text>
              </Card>
              
              <Card
                variant="default"
                title="Artigo do Blog"
                subtitle="Publicado há 2 dias"
                image="https://picsum.photos/300/200?random=2"
                actions={
                  <Button variant="ghost" size="sm">Ler artigo</Button>
                }
              >
                <Text size="sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
                </Text>
              </Card>
              
              <Card
                variant="outlined"
                title="Card Interativo"
                subtitle="Clique para testar"
                isClickable
                onClick={() => alert('Card clicado!')}
              >
                <Text size="sm" color="muted">
                  Este card inteiro é clicável. Passe o mouse e clique para testar.
                </Text>
              </Card>
            </div>
          </div>

          {/* Product Cards para E-commerce */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Product Cards (E-commerce)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl">
              <ProductCard
                title="Smartphone Pro Max"
                price={1299.99}
                originalPrice={1499.99}
                image="https://picsum.photos/300/200?random=3"
                description="Smartphone com câmera de 108MP, tela OLED de 6.7 polegadas e bateria de longa duração."
                onAddToCart={() => alert('Adicionado ao carrinho!')}
                onViewDetails={() => alert('Ver detalhes do produto')}
                inStock={true}
              />
              
              <ProductCard
                title="Notebook Gamer"
                price={2499.99}
                image="https://picsum.photos/300/200?random=4"
                description="Notebook para jogos com placa de vídeo dedicada, 16GB RAM e SSD 512GB."
                onAddToCart={() => alert('Adicionado ao carrinho!')}
                onViewDetails={() => alert('Ver detalhes do produto')}
                inStock={true}
              />
              
              <ProductCard
                title="Headphone Wireless"
                price={299.99}
                originalPrice={399.99}
                image="https://picsum.photos/300/200?random=5"
                description="Headphone sem fio com cancelamento de ruído ativo e bateria de 30 horas."
                onAddToCart={() => alert('Produto indisponível')}
                onViewDetails={() => alert('Ver detalhes do produto')}
                inStock={false}
              />
            </div>
          </div>
        </section>
        
        {/* Mantendo todos os testes dos Atoms */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Atomic Components</h2>
          
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Button Variants</h2>
              <div className="flex gap-4 flex-wrap">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Button Sizes</h2>
              <div className="flex gap-4 items-center flex-wrap">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Button States</h2>
              <div className="flex gap-4 flex-wrap">
                <Button>Normal</Button>
                <Button isLoading>Loading...</Button>
                <Button disabled>Disabled</Button>
              </div>
            </section>

            {/* Testando Input Component */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Input Variants</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <Input 
                  variant="default"
                  placeholder="Default input"
                  label="Default Style"
                  helperText="This is a default input"
                />
                <Input 
                  variant="filled"
                  placeholder="Filled input"
                  label="Filled Style"
                  helperText="This is a filled input"
                />
                <Input 
                  variant="flushed"
                  placeholder="Flushed input"
                  label="Flushed Style"
                  helperText="This is a flushed input"
                />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Input Sizes</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <Input size="sm" placeholder="Small input" label="Small Size" />
                <Input size="md" placeholder="Medium input" label="Medium Size" />
                <Input size="lg" placeholder="Large input" label="Large Size" />
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Input States</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <Input 
                  placeholder="Normal input"
                  label="Normal State"
                  helperText="Everything looks good"
                />
                <Input 
                  placeholder="Error input"
                  label="Error State"
                  error={true}
                  errorMessage="This field is required"
                />
                <Input 
                  placeholder="Disabled input"
                  label="Disabled State"
                  disabled
                  helperText="This input is disabled"
                />
              </div>
            </section>

            {/* Testando Text Component */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Text Sizes</h2>
              <div className="space-y-2">
                <Text size="xs">Extra Small Text (xs)</Text>
                <Text size="sm">Small Text (sm)</Text>
                <Text size="base">Base Text (base) - padrão</Text>
                <Text size="lg">Large Text (lg)</Text>
                <Text size="xl">Extra Large Text (xl)</Text>
                <Text size="2xl">2XL Text (2xl)</Text>
                <Text size="3xl">3XL Text (3xl)</Text>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Text Colors & Weights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Text color="primary" weight="normal">Primary color, normal weight</Text>
                  <Text color="secondary" weight="medium">Secondary color, medium weight</Text>
                  <Text color="muted" weight="light">Muted color, light weight</Text>
                  <Text color="success" weight="semibold">Success color, semibold weight</Text>
                  <Text color="warning" weight="bold">Warning color, bold weight</Text>
                  <Text color="error" weight="extrabold">Error color, extrabold weight</Text>
                </div>
                <div className="space-y-2">
                  <Text align="left">Left aligned text</Text>
                  <Text align="center">Center aligned text</Text>
                  <Text align="right">Right aligned text</Text>
                  <Text align="justify">Justify aligned text - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</Text>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Heading Component</h2>
              <div className="space-y-3">
                <Heading level={1}>Heading Level 1 (H1)</Heading>
                <Heading level={2}>Heading Level 2 (H2)</Heading>
                <Heading level={3}>Heading Level 3 (H3)</Heading>
                <Heading level={4}>Heading Level 4 (H4)</Heading>
                <Heading level={5}>Heading Level 5 (H5)</Heading>
                <Heading level={6}>Heading Level 6 (H6)</Heading>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Price Component (E-commerce)</h2>
              <div className="flex gap-8 items-center flex-wrap">
                <div className="text-center">
                  <Text size="sm" color="muted" className="mb-1">Preço Normal</Text>
                  <Price value={299.99} size="2xl" />
                </div>
                <div className="text-center">
                  <Text size="sm" color="muted" className="mb-1">Preço Promocional</Text>
                  <div className="flex items-center gap-2">
                    <Price value={399.99} size="lg" isDiscounted />
                    <Price value={299.99} size="2xl" />
                  </div>
                </div>
                <div className="text-center">
                  <Text size="sm" color="muted" className="mb-1">Preço Pequeno</Text>
                  <Price value={49.99} size="lg" />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}