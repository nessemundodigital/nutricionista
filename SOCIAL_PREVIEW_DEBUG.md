# 🔧 Debug do Preview Social

## 🚨 Mudanças Realizadas:

1. ✅ **Removidas** todas as imagens dos depoimentos
2. ✅ **Adicionada** imagem invisível da hero no topo da página
3. ✅ **Melhoradas** as meta tags Open Graph
4. ✅ **Criado** head.tsx específico para metadados

## 🧪 Como Testar:

### 1. Ferramentas de Debug:
- **Facebook**: https://developers.facebook.com/tools/debug/
- **Twitter**: https://cards-dev.twitter.com/validator
- **LinkedIn**: https://www.linkedin.com/post-inspector/

### 2. Passos para Forçar Atualização:

#### Facebook/Meta:
1. Acesse: https://developers.facebook.com/tools/debug/
2. Cole a URL: `https://nutricionista-eight.vercel.app/`
3. Clique em "Debug"
4. Clique em "Scrape Again" para forçar nova busca
5. Verifique se aparece a imagem da hero

#### Twitter:
1. Acesse: https://cards-dev.twitter.com/validator
2. Cole a URL: `https://nutricionista-eight.vercel.app/`
3. Clique em "Preview card"
4. Verifique se aparece a imagem da hero

#### LinkedIn:
1. Acesse: https://www.linkedin.com/post-inspector/
2. Cole a URL: `https://nutricionista-eight.vercel.app/`
3. Clique em "Inspect"
4. Verifique se aparece a imagem da hero

### 3. Teste Manual:
1. Compartilhe o link em uma conversa privada
2. Aguarde o preview carregar
3. Verifique se aparece a imagem da hero

## 🔍 O que Deve Aparecer:

- **Título**: "Amanda Vertaso - Nutricionista"
- **Descrição**: "Transforme sua vida através da alimentação saudável..."
- **Imagem**: Foto da nutricionista da hero (não mais a do depoimento)

## ⚡ Se Ainda Não Funcionar:

### Opção 1: Aguardar
- Cache pode levar até 24h para atualizar completamente

### Opção 2: Usar URL com Parâmetro
- Teste com: `https://nutricionista-eight.vercel.app/?v=2`
- Isso força uma nova requisição

### Opção 3: Verificar Deploy
- Confirme se o deploy foi feito com sucesso
- Verifique se as mudanças estão no ar

## 📊 Status das Mudanças:

- ✅ Meta tags atualizadas
- ✅ Imagens de depoimento removidas
- ✅ Imagem da hero priorizada
- ✅ Deploy realizado
- ⏳ Aguardando cache das redes sociais

## 🆘 Última Opção:

Se nada funcionar, podemos:
1. Criar uma imagem de preview específica
2. Hospedar a imagem em outro local
3. Usar a logo como fallback