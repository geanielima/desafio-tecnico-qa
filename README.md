

<h1 align="center"> desafio-tecnico-qa </h1>

Baixe o projeto no Github:

https://github.com/geanielima/desafio-tecnico-qa.git

 

Passo a passo para executar os testes:


1.Instalar as dependências do projeto utilizando o comando:

<li>npm install</li>

2.Executar os testes no modo interativo

<li>npm run cypress:open</li>


<h2 align="center"> CI/CD </h2>

<li>na parte de integração contínua foi utilizado o actions do git hub, que está configurado para rodar os testes a cada push enviado</li>



<h2 align="center"> Relatórios </h2>

<li>Allure Reports</li>
<li>Allure Reports Plugin</li>

para rodar o relatório no projeto basta utilizar os comandos:

1. npm run test esse comando irá limpar os relatórios antigos do projeto, iniciar os testes em modo headless e em seguida gerar os resultados do relatório.
2. em seguida para visualizar o relatório, podemos utilizar o comando npm run allure:open para visualizar o relatório.
 
 


