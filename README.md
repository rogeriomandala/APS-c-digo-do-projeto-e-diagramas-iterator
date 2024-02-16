# APS Activity-Provider
## 🚀 Como executar o projeto

### Pré-requisitos

Para a execução deste projecto em uma máquina local são necessárias seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [PostgreSQL](https://www.postgresql.org/download/).
Adicionado a isto recomenda-se um bom editor de código como o [VSCode](https://code.visualstudio.com/) 

#### 🧭 Criando a base de dados
```bash
# Criando base de dados
$ pgsql
$ CREATE DATABASE activity_provider
```

#### 🧭 Definindo variaveis de ambiente (.env)
```bash
# ficheiro .env
DATABASE_URL="postgres://<db_username>:<db_password>@localhost:5432/activity_provider"
HOST="http://localhost:3001"
PORT=3001
```

#### 🧭 Executando a aplicação
```bash
# Clone o repositório
$ git clone https://github.com/rogeriomandala/APS-c-digo-do-projeto-e-diagramas.git

# Aceda a pasta do projecto no seu terminal/cmd
$ cd APS-c-digo-do-projeto-e-diagramas

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

```
---

## 🛠 Tecnologias

Para a construção desta aplicação foram usadas as seguintes ferramentas:

-   Node 20.9.0
-   express 4.18.2
-   PostgreSQL 15.6
