## Tornar o VsCode o Editor das configurações do git
git config --global core.editor code
## Abrir as configurações no git no editor
git config --global --edit

## Adições interessantes
[alias]
	c = !git add --all && git commit -m
	s = !git status -s
	l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
	t = !sh -c 'git tag -a $1 -m $1' -
	amend = !git add --all && git commit --amend --no-edit
	count = !git shortlog -s --grep
[push]
	followTags = true
## Setar parametros commit
git config --global user.email "you@example.com"
git config --global user.name "Your Name"




## Inicializar git
git init
## Setar repositório remoto
git remote add origin {link-remoto}
## CLONAR REPOSITÓRIO
git clone {link-remoto}
## Puxar do repositório remoto
git pull origin [BRANCH]
## listar repositório remoto
git remote -v
## listar branch
git branch
## Criar e movimentar para a branch <-- [-b] cria branch -->
git checkout -b NOME-BRANCH
## Movimentar branch
git checkout {nome-branch}
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
