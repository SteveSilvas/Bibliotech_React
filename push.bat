@echo on
@echo "Realizando o pull, add ., commit e push"

@echo "cmd: git status"
git status 

@echo "cmd: git pull"
git pull

@echo "cmd: git add ."
git add .

@echo "cmd: git commit"
git commit -m "commit automatizado"

@echo "cmd: git push"
git push


@echo "cmd: git status"
git status

@echo "Finalizado"
pause

