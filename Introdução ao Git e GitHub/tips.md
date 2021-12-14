## CRIAR CHAVE SSH
ssh-keygen -t ed25519  -C {email}
### NAVEGAR PARA A PASTA DO SSH
#### EXIBIR CONTEÚDO DA CHAVE SSH
cat {chave.pub}
#### COPIAR PARA A ÁREA DE TRANSFERÊNCIA
#### ACESSAR NO GIT-HUB
SETTINGS > SSH and GPG keys | New SSH key|
### INICIALIZAR O AGENTE
eval $(ssh-agent -s)
### PASSAR A CHAVE PARA O AGENTE
ssh-add {chave privada}
