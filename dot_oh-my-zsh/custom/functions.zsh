killport() {
  lsof -i TCP:$1 | grep LISTEN | awk '{print $2}' | xargs kill -9
}

# Copies current directory path to clipboard
cpdir() {
  pwd | tr -d "\r\n" | pbcopy
}

# Copies content of file to clipboard
cpfile() {
  cat $1 | pbcopy
}

# Measure startup time for your shell
timezsh() {
  shell=${1-$SHELL}
  for i in $(seq 1 10); do /usr/bin/time $shell -i -c exit; done
}
