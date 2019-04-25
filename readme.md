### esLint
ESLint 是在 ECMAScript/JavaScript 代码中识别和报告模式匹配的工具，它的目标是保证代码的一致性和避免错误.



初始化
```bash
./node_modules/.bin/eslint --init
#or
eslint --init
```
After running eslint --init, you’ll have a .eslintrc file in your directory. In it, you’ll see some rules configured like this:
```JavaScript
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    }
}
```
ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs.

使用 ESLint 检测任何 JavaScript 文件：
```JavaScript
./node_modules/.bin/eslint test.js
//or
eslint test.js
```


### Configuration
1、Configuration Comments - use JavaScript comments to embed configuration information directly into a file.

2、use a JavaScript, JSON or YAML file to specify configuration information for an entire directory (other than your home directory) and all of its subdirectories. This can be in the form of an .eslintrc.* file or an eslintConfig field in a package.json file, both of which ESLint will look for and read automatically, or you can specify a configuration file on the command line

```JavaScript
{
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "double"]
    },
    "extends": "eslint:recommended"
}
```

```
{
  "env": {
    "browser": false,
    "mocha": false,
    "es6": true,
    "node": true
  },
  "parser": "babel-eslint",
  "extends": [ "airbnb/base", "prettier"],
  "rules": {
    "comma-dangle": ["error", "never"],
    "semi": [0, "always"],
    "no-console": 0,
    "class-methods-use-this": 0,
    "no-param-reassign" : 0
   }
}
```
