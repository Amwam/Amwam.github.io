workflow "New workflow" {
  on = "push"
  resolves = ["Lint"]
}

action "Build" {
  uses = "actions/npm@master"
  args = "install"
}

action "Lint" {
  needs = "Build"
  uses = "actions/npm@master"
  args = "run tslint"
}