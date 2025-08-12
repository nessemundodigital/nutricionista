# Instruções para Criar a Logo

## 📋 Arquivos Necessários

Você precisa criar as seguintes imagens baseadas na logo SVG criada:

### 1. Favicon (favicon.ico)
- **Tamanho**: 32x32 pixels
- **Formato**: ICO
- **Uso**: Ícone na aba do navegador

### 2. Logo PNG 192x192 (logo-192.png)
- **Tamanho**: 192x192 pixels
- **Formato**: PNG com fundo transparente
- **Uso**: Ícone de app mobile, favicon alternativo

### 3. Logo PNG 512x512 (logo-512.png)
- **Tamanho**: 512x512 pixels
- **Formato**: PNG com fundo transparente
- **Uso**: Preview social, ícone de app

## 🎨 Design da Logo

A logo deve conter:
- **Fundo**: Círculo verde (#16a34a)
- **Elemento**: Folha branca estilizada no centro
- **Texto**: "Amanda" em fonte serif, "Nutricionista" menor
- **Cores**: Verde primário (#16a34a), branco (#ffffff)

## 🛠️ Como Criar

### Opção 1: Usar o SVG existente
1. Abra o arquivo `public/logo.svg` em um editor de imagem
2. Exporte nas dimensões necessárias
3. Substitua os arquivos placeholder

### Opção 2: Usar ferramentas online
1. Use o Canva, Figma ou similar
2. Crie um círculo verde com folha branca
3. Adicione o texto "Amanda Vertaso"
4. Exporte nos tamanhos necessários

### Opção 3: Converter SVG para PNG
```bash
# Se tiver ImageMagick instalado
convert -background transparent -size 192x192 logo.svg logo-192.png
convert -background transparent -size 512x512 logo.svg logo-512.png
```

## ✅ Checklist

- [ ] favicon.ico (32x32)
- [ ] logo-192.png (192x192)
- [ ] logo-512.png (512x512)
- [ ] Testar preview social
- [ ] Verificar favicon no navegador

## 🔗 Ferramentas Úteis

- [Favicon Generator](https://favicon.io/)
- [Real Favicon Generator](https://realfavicongenerator.net/)
- [Canva](https://canva.com)
- [SVGOMG](https://jakearchibald.github.io/svgomg/) - Otimizar SVG