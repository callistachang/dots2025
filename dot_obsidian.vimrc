" Exit insert mode
imap jk <Esc>

" Navigate visual instead of logical lines
nmap j gj
nmap k gk

" Start and end of line
nmap H ^
nmap L $

" Yank to system clipboard
set clipboard=unnamed

" Move line up/down
nmap K ddkP
nmap J ddp

" Copy from cursor to end
nmap Y y$

" Undo
nmap U <C-r>
