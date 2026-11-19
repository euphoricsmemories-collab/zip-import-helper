# Auditoria de imagens — PetClin

Data: 19 de novembro de 2026.

## Resultado

- **31 arquivos de imagem identificados e armazenados em `public/images`**, totalizando 31.527.770 bytes (aproximadamente 30,1 MiB).
- **27 imagens utilizadas atualmente**, incluindo o favicon; **4 imagens anteriores preservadas**, sem inseri-las novamente no site.
- **21 imagens recuperadas do armazenamento anterior**, **9 imagens transferidas de `src/assets`** e **1 favicon copiado**. O favicon original em `public/favicon.png` também permanece para compatibilidade.
- **0 imagens usadas pelo site dependem de hospedagem externa.**
- **0 arquivos identificados ausentes ou com recuperação malsucedida.**
- **0 componentes usam referências temporárias ou caminhos exclusivos do Lovable.**

## Organização

As imagens estão em `public/images/banners`, `backgrounds`, `products`, `services`, `gallery` e `icons`. O inventário completo está em `public/images/manifest.json`, com tamanho, SHA-256, dimensões, formato real, origem e componentes que usam cada arquivo.

Arquivos preservados sem uso atual: `doutor-exame.jpg`, `gallery-dog.jpg`, `gallery-exam.jpg` e `hero-dog.jpg`. Alguns arquivos com extensão original `.jpg` contêm PNG; seus bytes e nomes foram preservados, sem conversão ou perda de qualidade.

Os ponteiros antigos em `src/assets` são registros de procedência, não fontes utilizadas pelo site. Eles não foram apagados da hospedagem anterior, preservando versões já publicadas. As duas posições de fotos complementares do Pet Shop continuam vazias, como antes: não eram arquivos de imagem existentes e nenhuma foto foi inventada.

Ícones e desenhos SVG feitos diretamente no código continuam incluídos no próprio código, sem dependência de arquivos externos. Os degradês CSS também permanecem intactos.

## Verificações executadas

- Decodificação dos arquivos recuperados e comparação de tamanho com os ponteiros originais.
- SHA-256 e tamanho verificados para os 31 arquivos locais.
- Os 31 arquivos foram solicitados ao site local: todos retornaram HTTP 200 e os bytes corresponderam ao inventário.
- 32 elementos de imagem, incluindo reutilizações e cópias do carrossel, carregaram corretamente em computador (1280 px), tablet (768 px) e celular (393 px).
- Nenhum erro de execução observado no navegador durante essa verificação.
- Quatro testes passaram: dois de integridade/portabilidade das imagens e dois de carregamento das páginas.
- A verificação automática do projeto registrou `build OK` após as alterações. Não foi executado um build manual de produção nem inspecionado um pacote final de hospedagem.

## Exportação e hospedagem

Os arquivos reais estão no projeto e são incluídos no versionamento. Uma exportação do código que inclua `public/images` contém todas as imagens; não exige o serviço de imagens do Lovable. O Vite utiliza `public` como diretório de arquivos estáticos e copia seu conteúdo para a saída do cliente.

Não foi baixado um ZIP pela interface, confirmada a sincronização em um GitHub remoto nem publicada uma versão externa nesta auditoria. Portanto, esses processos específicos não foram testados ponta a ponta. A portabilidade dos arquivos e das referências foi verificada localmente.

**Importante:** a portabilidade das imagens não transforma a aplicação TanStack Start em um site exclusivamente estático. Cloudflare Pages ou hospedagem tradicional precisam da configuração adequada ao runtime da aplicação. Publicar apenas arquivos fonte não basta. Hospedagem na raiz do domínio é pressuposta pelos caminhos `/images/...`; instalação em subdiretório requer configuração de base.

Google Fonts e o mapa interativo do Google permanecem serviços externos; não são fotografias dependentes do armazenamento antigo. A chave e a autorização do domínio do mapa precisam ser configuradas na hospedagem de destino. Essa autorização externa não foi validada nesta tarefa.