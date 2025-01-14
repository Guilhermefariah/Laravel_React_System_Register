# Projeto de Autenticação com Laravel e React 

Este projeto é uma aplicação de autenticação utilizando Laravel como backend e React como frontend.

<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>


## Requisitos

* Node.js (versão 14 ou superior)
* npm (versão 6 ou superior)
* Composer (versão 2 ou superior)
* Laravel (versão 8 ou superior)
* React (versão 17 ou superior)

## Instalação

### Backend (Laravel)

1. Clone o repositório do projeto:
```bash
git clone https://github.com/Guilhermefariah/Laravel_React_System_Register.git
```
2. Acesse o diretório do projeto:
```bash
cd Laravel_React_System_Register
```
3. Instale as dependências do Laravel:
```bash
composer install
```
4. Copie o arquivo de configuração de exemplo:
```bash
cp .env.example .env
```
5. Configure as variáveis de ambiente no arquivo `.env`:
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```
6. Execute as migrations para criar as tabelas do banco de dados:
```bash
php artisan migrate
```
7. Inicie o servidor de desenvolvimento do Laravel:
```bash
php artisan serve
```

### Frontend (React)

1. Acesse o diretório do projeto:
```bash
cd Laravel_React_System_Register
```
2. Instale as dependências do React:
```bash
npm install
```
3. Inicie o servidor de desenvolvimento do React:
```bash
npm start
```

## Comandos

* `php artisan migrate`: Executa as migrations para criar as tabelas do banco de dados.
* `php artisan serve`: Inicia o servidor de desenvolvimento do Laravel.
* `npm start`: Inicia o servidor de desenvolvimento do React.
* `npm run build`: Cria a versão de produção do aplicativo.

* `php artisan db:seed` : Adiciona usuários padrão ao banco de dados (opcional).

## Contribuição

Contribuições são bem-vindas! Se você encontrar um erro ou quiser adicionar uma nova funcionalidade, por favor, abra uma issue ou envie um pull request.

## Licença

Este projeto é licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
