#just shows commit message abbreviated to one line
alias gsearch3='git show --no-patch --oneline ' # E.G. gsearch2 <COMMIT SHA>
# just shows author, date, and full commit message
alias gsearch2='git show --no-patch ' #E.G. gsearch2 <COMMIT>
# shows
alias gsearch='git show ' #E.G. gsearch <COMMIT>

# shows all your changes since the last commit (staged or unstaged)
alias gd='git diff'
#git diff --cached <commit> shows the diff between your staged changes and the <commit>
alias gdca='git diff --cached'  #
alias gdw='git diff --word-diff'  #
alias gfa='git fetch --all'  #
alias gpull='git pull origin HEAD'
alias gpush='git push origin HEAD' #
alias gfpush='git push -f origin HEAD' #
alias ggsup='git branch --set-upstream-to=origin/$(git_current_branch)'  #
alias gignore='git update-index --assume-unchanged'
alias gignored='git ls-files -v | grep "^[[:lower:]]"'
alias gcar='git commit --amend --no-edit'  #
alias glg='git log --stat'
alias glgg='git log --graph'
alias glgga='git log --graph --decorate --all'
alias glgm='git log --graph --max-count=20'
alias glgp='git log --stat -p'
alias glo='git log --oneline --decorate'
alias glog='git log --oneline --decorate --graph'
alias gloga='git log --oneline --decorate --graph --all'
alias glol='git log --graph --pretty='\''%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\'' --abbrev-commit'
alias glola='git log --graph --pretty='\''%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset'\'' --abbrev-commit --all'
alias glp='git_log_prettily'
alias gp='git push'
alias gpv='git push -v'
alias gr='git remote'
alias gra='git remote add'
alias grb='git rebase'
alias grba='git rebase --abort'
alias grbc='git rebase --continue'
alias grbi='git rebase -i'
alias grbm='git rebase master'
# alias grbs='git rebase --skip'
alias greset='git reset HEAD'
# alias grhh='git reset HEAD --hard'
# alias grmv='git remote rename'
# alias grrm='git remote remove'
alias gsetremote='git remote set-url'
# alias grv='git remote -v'
alias gstb='git status -sb'
alias gsps='git show --pretty=short --show-signature'
alias gss='git status -s'
alias gsta='git stash save'
alias gstaa='git stash apply'
alias gstc='git stash clear'
alias gsb='git stash branch ' # branchname
alias gstd='git stash drop'  #
alias gstl='git stash list'  #
alias gstp='git stash pop'  #
alias gsts='git stash show --text'  #
alias gwch='git whatchanged -p --abbrev-commit --pretty=medium'  #
alias gits="git status"  #
alias gs='git status'
alias gcar="git commit --amend --no-edit"  #
alias favs='echo "
gstb: git status -sb,
gwch: git whatchanged prettily,
gsps: git show short and pretty,
gss: short status?,
gstl: list stash,
gsts: show stashed text,
gcar: git commit --amend --no-edit
"'
alias gco='git checkout'
alias glone='git log --pretty=format:"%Cred%h%Creset committed at %Cblue%cd%Creset by %Cgreen%cn%Creset"'
alias gl=glg
######### Various branch list output formatting
  # * refs/heads limits it to local
  # * adding dash before the sort key, and stringifying it, reverses the order
  # * to prefix the current branch with a star, start the format string with `%(if)%(HEAD)%(then)*%(else)%(end)` (as used in example)
alias gblist="git for-each-ref --sort='-committerdate' refs/heads/ --format='%(color:blue)%(committerdate:iso)%(color:reset) %(if)%(HEAD)%(then)%(color:white bold)* %(else)  %(color:white)%(end)%(refname:short)%(color:reset) %(color:yellow)(%(committerdate:relative))%(color:reset)'"
alias gblistb="git for-each-ref --sort='-committerdate' refs/heads/ --format='%(color:green dim)%(committerdate:iso)%(color:reset) %(if)%(HEAD)%(then)* %(color:white bold)%(else)  %(color:white)%(end)%(refname:short)%(color:reset) %(color:magenta)(%(committerdate:relative))%(color:reset)'"
alias gblistc="git for-each-ref --sort='-committerdate' refs/heads/ --format='%(color:green dim)%(committerdate:iso)%(color:reset) %(if)%(HEAD)%(then)* %(color:white bold)%(else)  %(color:white)%(end)%(refname:short)%(color:reset) %(color:green)(%(committerdate:relative))%(color:reset)'"
alias gblistd="git for-each-ref --sort='-committerdate' refs/heads/ --format='%(color:magenta dim)%(committerdate:iso)%(color:reset) %(if)%(HEAD)%(then)* %(color:white bold)%(else)  %(color:white)%(end)%(refname:short)%(color:reset) %(color:magenta)(%(committerdate:relative))%(color:reset)'"
alias gbliste="git for-each-ref --sort='-committerdate' refs/heads/ --format='%(color:yellow)%(committerdate:relative)%(color:reset);%(color:green)%(committerdate:iso)%(color:reset);%(if)%(HEAD)%(then)*%(color:bold) %(else)  %(color:normal)%(end)%(refname:short)%(color:reset)%(color:reset);' | column -t -s';'"
alias gblistf="git for-each-ref --sort='-committerdate' refs/heads/ --format='%(color:blue)%(committerdate:iso)%(color:reset);%(color:cyan)%(committerdate:relative)%(color:reset);%(if)%(HEAD)%(then)*%(color:bold) %(else)  %(color:normal)%(end)%(refname:short)%(color:reset);' | column -t -s';'"
# alias lbranches='git for-each-ref --sort="-committerdate" refs/heads/ --format="%(HEAD) %(color:green)%(committerdate:iso)%(color:reset);%(color:yellow)%(committerdate:reAlative)%(color:reset);%(refname:short);" | column -t -s ";"'
# alias sbranches="git for-each-ref --sort='-authordate' --format='%(refname)%09%(authordate)' refs/heads | sed -e 's-refs/heads/--'"
# alias branches="git for-each-ref --sort='-committerdate' refs/heads/ --format='%(HEAD) %(committerdate:iso) ~ %(color:blue)%(committerdate:relative)%(color:reset) %(color:green)%(refname:short)%(color:reset)'"


