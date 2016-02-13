# jcat

Render contents of loaded module
> modules should exports value

## Install

```bash
npm install -g jcat
```

## Usage

```bash
# load from local path
jcat ./complex.config.js
{
  "debug": true,
  "init": function() {
    this.run();
  }
}

# will load main file from `node_modules/babel'
cd project
jcat babel
```