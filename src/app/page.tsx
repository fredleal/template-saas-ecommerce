"use client"
// src/app/page.tsx
import { Button, Input, Text, Heading, Price, Badge, Icon } from '@/components/atoms'
import { Card, ProductCard } from '@/components/molecules'

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Template SaaS - Design System
        </h1>
        
        {/* NOVO: Testando Icon Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Icon System (Atom) - Novíssimo!</h2>
          
          {/* Icon Variants */}
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
            </div>
          </div>

          {/* Icon Sizes */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Icon Sizes</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <div className="flex items-center gap-2">
                <Icon name="HeartIcon" size="xs" color="error" />
                <Text size="sm">xs (12px)</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="HeartIcon" size="sm" color="error" />
                <Text size="sm">sm (16px)</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="HeartIcon" size="md" color="error" />
                <Text size="sm">md (20px)</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="HeartIcon" size="lg" color="error" />
                <Text size="sm">lg (24px)</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="HeartIcon" size="xl" color="error" />
                <Text size="sm">xl (32px)</Text>
              </div>
            </div>
          </div>

          {/* Icon Colors */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Icon Colors</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <div className="flex items-center gap-2">
                <Icon name="CartIcon" size="lg" color="primary" />
                <Text size="sm">primary</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CartIcon" size="lg" color="secondary" />
                <Text size="sm">secondary</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CartIcon" size="lg" color="success" />
                <Text size="sm">success</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CartIcon" size="lg" color="error" />
                <Text size="sm">error</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CartIcon" size="lg" color="warning" />
                <Text size="sm">warning</Text>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CartIcon" size="lg" color="info" />
                <Text size="sm">info</Text>
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
                <Icon name="MenuIcon" size="sm" decorative />
                Menu
              </Button>
            </div>
          </div>

          {/* Icons com animações */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Animated Icons</h3>
            <div className="flex gap-6 items-center">
              <div className="text-center">
                <Icon 
                  name="PlusIcon" 
                  size="xl" 
                  color="success" 
                  className="hover:rotate-45 transition-transform duration-200 cursor-pointer" 
                />
                <Text size="sm" className="mt-2">Hover to rotate</Text>
              </div>
              <div className="text-center">
                <Icon 
                  name="HeartIcon" 
                  size="xl" 
                  color="error" 
                  className="hover:scale-125 transition-transform duration-200 cursor-pointer" 
                />
                <Text size="sm" className="mt-2">Hover to scale</Text>
              </div>
              <div className="text-center">
                <Icon 
                  name="SearchIcon" 
                  size="xl" 
                  color="info" 
                  className="hover:text-blue-500 transition-colors duration-200 cursor-pointer" 
                />
                <Text size="sm" className="mt-2">Hover color change</Text>
              </div>
            </div>
          </div>

          {/* Icons em diferentes contextos */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Icons in Context</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {/* Search Box simulado */}
              <div className="bg-white p-4 rounded-lg border">
                <Text weight="semibold" className="mb-3">Search Box</Text>
                <div className="relative">
                  <Icon 
                    name="SearchIcon" 
                    size="sm" 
                    color="secondary" 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2" 
                    decorative 
                  />
                  <input 
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" 
                    placeholder="Buscar produtos..."
                  />
                </div>
              </div>

              {/* Navigation simulada */}
              <div className="bg-white p-4 rounded-lg border">
                <Text weight="semibold" className="mb-3">Navigation Items</Text>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <Icon name="CartIcon" size="sm" color="primary" decorative />
                    <Text>Carrinho de compras</Text>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <Icon name="HeartIcon" size="sm" color="error" decorative />
                    <Text>Lista de desejos</Text>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded cursor-pointer">
                    <Icon name="SearchIcon" size="sm" color="secondary" decorative />
                    <Text>Pesquisa avançada</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badge Component */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Badge Component (Atom)</h2>
          
          {/* Badge Variants */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Badge Variants (Cores Semânticas)</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <Badge variant="default">Categoria</Badge>
              <Badge variant="success">Em estoque</Badge>
              <Badge variant="warning">Últimas 3 unidades</Badge>
              <Badge variant="error">Esgotado</Badge>
              <Badge variant="info">Novidade</Badge>
            </div>
          </div>

          {/* Badge Sizes */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Badge Sizes</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <Badge variant="info" size="sm">Small</Badge>
              <Badge variant="success" size="md">Medium</Badge>
              <Badge variant="warning" size="lg">Large</Badge>
            </div>
          </div>

          {/* Badge + Icon combinations */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Badge + Icon Combinations</h3>
            <div className="flex gap-4 items-center flex-wrap">
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border">
                <Icon name="CartIcon" size="sm" color="success" decorative />
                <Badge variant="success" size="sm">Em estoque</Badge>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border">
                <Icon name="HeartIcon" size="sm" color="error" decorative />
                <Badge variant="info" size="sm">Favoritos</Badge>
              </div>
              <div className="flex items-center gap-2 bg-white p-3 rounded-lg border">
                <Icon name="PlusIcon" size="sm" color="primary" decorative />
                <Badge variant="default" size="sm">Adicionar</Badge>
              </div>
            </div>
          </div>

          {/* Badge em contexto E-commerce com ícones */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">E-commerce Examples with Icons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
              {/* Simulando produtos com badges e ícones */}
              <div className="bg-white p-4 rounded-lg border">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <Text weight="semibold">Smartphone Pro</Text>
                  </div>
                  <Badge variant="success" size="sm">Em estoque</Badge>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <Icon name="SearchIcon" size="xs" color="secondary" decorative />
                  <Text size="sm" color="muted">Categoria: Eletrônicos</Text>
                </div>
                <div className="flex gap-2 mb-3">
                  <Badge variant="info" size="sm">5G</Badge>
                  <Badge variant="default" size="sm">128GB</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Price value={1299.99} size="lg" />
                  <div className="flex gap-1">
                    <Icon name="HeartIcon" size="sm" color="secondary" className="cursor-pointer hover:text-red-500" />
                    <Icon name="CartIcon" size="sm" color="primary" className="cursor-pointer hover:text-blue-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border">
                <div className="flex justify-between items-start mb-2">
                  <Text weight="semibold">Notebook Gamer</Text>
                  <Badge variant="warning" size="sm">Últimas 2</Badge>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <Icon name="SearchIcon" size="xs" color="secondary" decorative />
                  <Text size="sm" color="muted">Categoria: Computadores</Text>
                </div>
                <div className="flex gap-2 mb-3">
                  <Badge variant="info" size="sm">Promoção</Badge>
                  <Badge variant="default" size="sm">RTX 4060</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Price value={2999.99} size="sm" isDiscounted />
                    <Price value={2499.99} size="lg" />
                  </div>
                  <div className="flex gap-1">
                    <Icon name="HeartIcon" size="sm" color="secondary" className="cursor-pointer hover:text-red-500" />
                    <Icon name="CartIcon" size="sm" color="primary" className="cursor-pointer hover:text-blue-500" />
                  </div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg border opacity-75">
                <div className="flex justify-between items-start mb-2">
                  <Text weight="semibold">Headphone Premium</Text>
                  <Badge variant="error" size="sm">Esgotado</Badge>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  <Icon name="SearchIcon" size="xs" color="secondary" decorative />
                  <Text size="sm" color="muted">Categoria: Áudio</Text>
                </div>
                <div className="flex gap-2 mb-3">
                  <Badge variant="default" size="sm">Bluetooth</Badge>
                  <Badge variant="default" size="sm">Noise Cancel</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <Price value={599.99} size="lg" />
                  <div className="flex gap-1">
                    <Icon name="HeartIcon" size="sm" color="secondary" className="cursor-pointer" />
                    <Icon name="CartIcon" size="sm" color="gray-300" className="cursor-not-allowed" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
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

          {/* Card com Imagem e Actions com Icons */}
          <div className="mb-8">
            <h3 className="text-xl font-medium mb-4">Cards with Icons & Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl">
              <Card
                variant="elevated"
                title="Produto Exemplo"
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
                  <Text size="sm" color="secondary">
                    Este é um exemplo de card com imagem, título, subtítulo e botões de ação.
                  </Text>
                  <div className="flex gap-2">
                    <Badge variant="success" size="sm">Em estoque</Badge>
                    <Badge variant="info" size="sm">Frete grátis</Badge>
                  </div>
                </div>
              </Card>
              
              <Card
                variant="default"
                title="Artigo do Blog"
                subtitle="Publicado há 2 dias"
                image="https://picsum.photos/300/200?random=2"
                actions={
                  <Button variant="ghost" size="sm">
                    <Icon name="PlusIcon" size="xs" decorative />
                    Ler artigo
                  </Button>
                }
              >
                <div className="space-y-2">
                  <Text size="sm">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor...
                  </Text>
                  <div className="flex gap-2">
                    <Badge variant="default" size="sm">React</Badge>
                    <Badge variant="default" size="sm">Next.js</Badge>
                  </div>
                </div>
              </Card>
              
              <Card
                variant="outlined"
                title="Card Interativo"
                subtitle="Clique para testar"
                isClickable
                onClick={() => alert('Card clicado!')}
              >
                <div className="space-y-2">
                  <Text size="sm" color="muted">
                    Este card inteiro é clicável. Passe o mouse e clique para testar.
                  </Text>
                  <div className="flex items-center gap-2">
                    <Icon name="MenuIcon" size="sm" color="info" decorative />
                    <Badge variant="info" size="sm">Interativo</Badge>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Mantendo todos os testes dos outros Atoms */}
        <div className="border-t pt-8">
          <h2 className="text-2xl font-semibold mb-6">Other Atomic Components</h2>
          
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
                  <Icon name="MenuIcon" size="sm" decorative />
                  Ghost Button
                </Button>
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

            {/* Testando Input Component com Icons */}
            <section>
              <h2 className="text-2xl font-semibold mb-4">Input Variants with Icons</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                <div className="relative">
                  <Input 
                    variant="default"
                    placeholder="Search with icon..."
                    label="Default Style"
                    helperText="This input has a search icon"
                    className="pl-10"
                  />
                  <Icon 
                    name="SearchIcon" 
                    size="sm" 
                    color="secondary" 
                    className="absolute left-3 top-9" 
                    decorative 
                  />
                </div>
                
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