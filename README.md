# Komodo Blog
## Blog and Authentication Functionality Starter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

### NVM
NodeJS version has been locked in via [NVM](https://github.com/nvm-sh/nvm/blob/master/README.md).
List all NodeJS versions you can load with:
```nvm ls-remote```
and to load a version of Node:
```nvm install 10.21.0```
That is the NodeJS version used in this project.

## Stupid Shit I Had To Do

When intially installing AngularFire with
```npm install @angular/fire firebase --save```
You will most likely encounter an error about `Angular8 firebase configuration error '@angular/fire/angularfire2'`.  To remedy it, I used [this Stack Overflow answer](https://stackoverflow.com/a/60145189/757853) to add this line to **tsconfig**:

```
  //...
  compilerOptions: {
    "skipLibCheck": true,
    //...
  }
```

## Run It
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
