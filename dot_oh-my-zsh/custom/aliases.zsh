alias cp="cp -riv"
alias mkdir="mkdir -vp"
alias mv="mv -iv"
alias vi="vim"

alias gs="git status"
alias gc="git commit -m"
alias uncommit="git reset --soft HEAD^"
alias nuke="git reset --hard HEAD && git clean -fd"

alias ..="cd .."
alias ...="../.."
alias ....="../../.."

alias dns="dig +noall +answer"

alias ls="eza --group-directories-first --icons"
alias ll="ls --long --header --git --no-user"
alias la="ls --all"
alias lt="ll --tree"
alias ltd="ll --tree --level"
