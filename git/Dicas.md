## Inicializar git
git init
## Setar repositório remoto
git remote add origin (LINK)
## Puxar do repositório remoto
git pull origin [BRANCH]
## listar repositório remoto
git remote -v
## listar branch
git branch
## Criar e movimentar para a branch <-- -b cria branch -->
git checkout -b NOME-BRANCH
## Unir branch você deve estar na branch destino
git merge (branch origem)
## Mudar nome branch
### Estando na própria branch
git branch -m novonome
### Estando em outra branch
git branch -m nomeantigo nomenovo
## Deletar branch
git branch -d nomebranch
## Movimentar de branch sem levar arquivo (stash)
git stash save "contexto"
### visualizar stash
git stash list
## soltar os arquivos
git stash pop [index]
## Limpar stash
git stash clear