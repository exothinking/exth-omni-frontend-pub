# Omni Nofity

Omni Nofity é um aplicativo de gerenciamento de notificações automáticas que busca otimizar a comunicação entre serviços digitais e clientes.

## Demonstração
https://exothinking.github.io/

Informações para demonstração:

- Os dados que retornam da API são todos estáticos e nenhum dado será persistido quando o usuário enviar algum formulário. Portanto para ver as páginas privadas é necessário usar um dos seguintes logins pré-criados: 
  - login: `jose`, senha: `12345`
  - login: `fernanda`, senha: `123456`
  - login: `maira`, senha: `1234567`
  - login: `juliano`, senha: `12345678`

- O back-end vai simular respostas positivas às requisições mas não vai realmente persistir os dados.
- A sessão do usuário deve durar apenas uma hora, depois disso será necessário fazer login novamente.

## Instalação para desenvolvimento
- Clone o repositório
- `npm install`
- `npm start` para iniciar o ambiente de desenvolvimento

# Informações sobre o processo de desenvolvimento do projeto

## Tecnologias utilizadas
- React / Redux / Sagas
- Material UI
- CSS
- JavaScript
  
## Roadmap criado à partir do escopo definido pelo cliente
### Criar ambiente de simulação back-end
  * Criação de back-end simples com NodeJS para enviar respostas descritas em https://docs.google.com/document/d/1HILzzWaNFZg7QS4V8KVrcozW2Lj5wpmx7Uac4J3zEfI/edit - PRONTO
Link para o back-end desenvolvido: https://github.com/exothinking/omninotify-backend
Link da demonstração do back-end: http://omninotify-backend.herokuapp.com/

### Definições gerais
  * Criação do aplicativo (definição do tema, instalação de dependências, criação das rotas privadas e funcionalidade das sessões de usuários) - PRONTO

### Autenticação / Registro
  * Autenticar usando login e senha - PRONTO
  * Registrar usando formulário - PRONTO
  * Manter sessão na memória para login automático - PRONTO
  * Autenticar usando Google - PARA FAZER
  * Registrar usando Google - PARA FAZER

### Tela de Aplicativos
  * Tela inicial que mostra os aplicativos do usuário - PRONTO
  * Tela com formulário para criação e novo aplicativo - PRONTO

### Telas de configuração
  * Tela com formulário para configuração de Webpush - PARA FAZER
  * Tela com formulário para configuração de E-mail - PARA FAZER
  * Tela com formulário para configuração de SMS - PARA FAZER

### Tela de histório de notificações
  * Tabela com histório de notificações de todos os Apps - PARA FAZER
  * Filtros pelos campos da tabela - PARA FAZER
  * Pop up com detalhes de cada notificação - PARA FAZER

### Tela de envio manual de notificações
  * Formulário para envio de Webpush - PARA FAZER
  * Formulário para envio de E-mail - PARA FAZER
  * Formulário para envio de SMS - PARA FAZER

## Apontamento de horas trabalhadas
01:47 - Criação do back-end de simulação
02:05 - Criação da base do aplicativo
02:26 - Criação da autenticação por formulário (login/senha)
00:48 - Criação do registro de novo usuário por formulário
00:50 - Armazenamento da sessão no local (manter conectado)
01:09 - Página que mostra os aplicativos do usuário
01:04 - Página de criação de novo aplicativo

Total de horas trabalhadas: 10h 09min

## Horas restantes para finalizar o projeto
01:00 - Autenticar usando Google - PARA FAZER
01:00 - Registrar usando Google - PARA FAZER
01:30 - Tela com formulário para configuração de Webpush - PARA FAZER
00:30 - Tela com formulário para configuração de E-mail - PARA FAZER
00:30 - Tela com formulário para configuração de SMS - PARA FAZER
02:00 - Tabela com histório de notificações de todos os Apps - PARA FAZER
00:30 - Filtros pelos campos da tabela - PARA FAZER
00:30 - Pop up com detalhes de cada notificação - PARA FAZER
01:00 - Formulário para envio de Webpush - PARA FAZER
01:00 - Formulário para envio de E-mail - PARA FAZER
01:00 - Formulário para envio de SMS - PARA FAZER
03:00 - Testes, correção de falhas e aprimoramentos UX

Total de horas restantes: 13h 30min

# Previsão de horas trabalhadas para o projeto
24 horas
# Previsão da data de entrega para o projeto completo
08/09/2022