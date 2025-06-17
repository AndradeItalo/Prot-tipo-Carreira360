# Carreira360 — Protótipo de Aplicação para Preparação de Programadores para o Mercado de Trabalho

Deploy: https://v0-react-job-prep-app.vercel.app/

## 🧠 Visão Geral

**Carreira360** é um protótipo de aplicação com foco em ajudar programadores a se prepararem para entrevistas de emprego e melhorarem seu posicionamento no mercado. A aplicação simula funcionalidades essenciais com dados mockados, e foi construída como parte de uma validação inicial de ideias com usuários reais (entrevistados: programadores, recrutadores e entrevistadores técnicos).

---

## 🎯 Objetivos do Protótipo

- 📄 **Gerar currículos otimizados** com base no cargo e nas palavras-chave da vaga.
- 🧭 **Sugerir roadmaps personalizados** com base no perfil e nas metas do usuário.
- 🧪 **Oferecer entrevistas simuladas**, com sugestões da IA e análise de desempenho.
- 💬 **Fornecer feedback detalhado** sobre o currículo e desempenho em entrevistas.
- 🧑‍🏫 **Mentoria para LinkedIn e visibilidade** frente a recrutadores.

---

## 🖼️ Telas e Funcionalidades

> ⚠️ Todas as funcionalidades estão mockadas (dados estáticos e simulações). Este protótipo serve apenas para testes de usabilidade e apresentação de ideias.

### 📋 Página Inicial

- Visão geral do progresso
- Links rápidos para gerar currículo, roadmap e simular entrevista

### 📄 Gerador de Currículo

- Interface simples para preencher habilidades, experiências e objetivos
- Geração de currículo otimizado com IA (mockado)

### 🗺️ Roadmap Personalizado

- Checklist de tecnologias e conceitos recomendados
- Baseado no perfil e nível do usuário

### 🎤 Simulador de Entrevista

- Simulação de entrevista técnica com perguntas
- IA oferece sugestões e destaca pontos-chave (sem feedback direto no protótipo atual)

### 🔍 Feedback e Mentoria

- Feedback textual com sugestões de melhoria no currículo
- Recomendações para destacar o perfil no LinkedIn Recruiter

---

## 🛠️ Tecnologias Utilizadas

- **Next.js** 14 (App Router)
- **TypeScript**
- **TailwindCSS**
- **shadcn/ui** (componentes de UI modernos)
- **React** (com Providers e layout modular)
- Deploy local com `npm run dev`

---

## 🚀 Como Rodar o Projeto

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/Prot-tipo-Carreira360.git
cd Prot-tipo-Carreira360
```

2. Instale as dependências:

```bash
npm install --legacy-peer-deps
```

3. Rode o projeto:
```bash
npm run dev
```

Acesse em: http://localhost:3000

##🧪 Próximos Passos

- Integração com IA real (ChatGPT API ou similar)
- Análise semântica do currículo em relação à vaga
- Dashboard com progresso real e dicas de carreira personalizadas

##📄 Licença
Este projeto é apenas para fins educacionais e de prototipação. Sem fins lucrativos.
