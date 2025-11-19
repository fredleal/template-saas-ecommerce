# 🚀 Deploy do Storybook

Existem duas formas de deployar o Storybook:

## 1. GitHub Pages (Recomendado) ✅

O deploy no GitHub Pages é **automático**. Quando você faz push na branch `main`, o GitHub Actions executa o workflow e deploya o Storybook.

### Configuração Inicial (Uma Vez)

1. Acesse: https://github.com/fredleal/template-saas-ecommerce/settings/pages
2. Em **Source**, selecione: **GitHub Actions**
3. Salve as alterações

### Deploy Automático

Toda vez que você fizer push na branch `main`:

```bash
git add .
git commit -m "feat: Add new stories"
git push origin main
```

O GitHub Actions vai:

1. Instalar dependências
2. Rodar `npm run build-storybook`
3. Deployar em: https://fredleal.github.io/template-saas-ecommerce/

### Verificar Deploy

Acesse: https://github.com/fredleal/template-saas-ecommerce/actions

Veja o status do workflow "Deploy Storybook to GitHub Pages"

---

## 2. Vercel (Projeto Separado)

Para deployar o Storybook na Vercel como projeto separado:

### Opção A: Via CLI

```bash
# 1. Instalar Vercel CLI (se não tiver)
npm i -g vercel

# 2. Fazer login
vercel login

# 3. Deploy do Storybook
cd /Users/fredleal/template-saas-ecommerce
vercel --prod \
  --name template-saas-storybook \
  --build-command "npm run build-storybook" \
  --output-directory "storybook-static"
```

### Opção B: Via Dashboard da Vercel

1. Acesse: https://vercel.com/new
2. Importe o repositório: `fredleal/template-saas-ecommerce`
3. Configure:
   - **Project Name**: `template-saas-storybook`
   - **Build Command**: `npm run build-storybook`
   - **Output Directory**: `storybook-static`
   - **Install Command**: `npm install`
4. Clique em **Deploy**

### Resultado

Seu Storybook estará disponível em:

```
https://template-saas-storybook.vercel.app
```

---

## 3. Deploy Manual (Local)

Para gerar uma build estática local:

```bash
# Build
npm run build-storybook

# A pasta storybook-static/ contém os arquivos prontos para deploy
# Você pode subir essa pasta em qualquer servidor estático:
# - Netlify
# - AWS S3
# - Azure Storage
# - Firebase Hosting
# etc.
```

---

## 🎯 Qual método usar?

| Método                | Prós                                                         | Contras                         |
| --------------------- | ------------------------------------------------------------ | ------------------------------- |
| **GitHub Pages**      | ✅ Grátis<br>✅ Deploy automático<br>✅ Integrado com GitHub | ⚠️ URL pública                  |
| **Vercel (separado)** | ✅ Grátis<br>✅ Performance excelente<br>✅ Analytics        | ⚠️ Requer configuração separada |
| **Manual**            | ✅ Controle total<br>✅ Qualquer servidor                    | ❌ Deploy manual                |

### Recomendação

- **GitHub Pages**: Para documentação pública do Design System
- **Vercel**: Se precisar de analytics ou domínio customizado
- **Manual**: Para servidores internos da empresa

---

## 📊 Monitoramento

### GitHub Pages

- Status: https://github.com/fredleal/template-saas-ecommerce/actions
- Logs: Clique no workflow > Ver logs

### Vercel

- Dashboard: https://vercel.com/dashboard
- Analytics: https://vercel.com/fredleal/template-saas-storybook/analytics

---

## 🔒 Storybook Privado

Se você quiser que o Storybook seja **privado** (não público):

### GitHub Pages

- **Não suporta** Storybook privado (repos públicos = Pages públicas)
- Alternativa: Use Vercel ou Netlify com senha

### Vercel

```bash
# Deploy com proteção por senha
vercel --prod --password "senha-secreta"
```

Ou configure no Dashboard da Vercel:

1. Project Settings
2. Password Protection
3. Ative e defina senha

---

## 🛠️ Troubleshooting

### Erro: "Page build failed"

```bash
# Teste localmente primeiro
npm run build-storybook

# Se funcionar local, o problema é no CI
# Verifique os logs do GitHub Actions ou Vercel
```

### Erro: "404 Not Found" no GitHub Pages

```bash
# Certifique-se que:
1. Settings > Pages > Source = "GitHub Actions"
2. Workflow executou com sucesso
3. URL correta: https://fredleal.github.io/template-saas-ecommerce/
```

### Build muito lento

```bash
# Otimize removendo assets desnecessários
# Ou use Vercel (build mais rápido)
```
