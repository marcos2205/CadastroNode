
Sequencia para criar o projeto

criar o arquivo package
### npm init 

gerencia as requisições, rotas e urls, entre outras funcionalidades
### npm install express

instalar o modulo para reiniciar o servidor sempre que houver alteração no codigo fonte, g significa globalmente
### npm install -g nodemon

instalar o banco de dados MongoDB
### npm install --save mongodb

instalar o mongoose  - traduz os dados do banco de dados para o objeto JavaScript para que possam ser utilizados pela aplicação
### npm install --save mongoose

Permitir acesso a API
### npm install --save cors

Gerar o backup do banco de dados MongoDB
### mongodump --db celke --out c:\data\db

Restaurar o backup do banco de dados MongoDB
### mongorestore --db celke c:\data\db\celke