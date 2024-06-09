# babel 和 polyfill

+ babel是一个工具链，主要用于旧浏览器或者环境中将ES5+代码转换为向后兼容版本的JavaScript
+ 包括：语法转换、源代码转换、Polyfill实现目标环境缺少的功能等。

babel本身可以作为一个独立的工具（和postcss一样），不和webpack等构建工具配置来单独使用

单独尝试babel，需要安装如下库：
+ @babel/core: babel的核心代码，必须安装
+ @babel/cli: 可以让我们在命令行使用babel

```bash
# 依赖安装
npm init
npm install @babel/core @babel/cli -D
# 这是块级作用域 简单用法
npm install @babel/plugin-transform-block-scoping -D
# 这是箭头函数 简单用法
npm install @babel/plugin-transform-arrow-functions -D

# babel的预设 preset 一步到位
# 安装@babel/preset-env
npm install @babel/preset-env -D
```

```bash
# 会“复制” 但不是转换
npx babel ./src --out-dir ./dist
npx babel ./src --out-dir ./dist --plugins=@babel/plugin-transform-block-scoping
npx babel ./src --out-dir ./dist --plugins=@babel/plugin-transform-block-scoping,@babel/plugin-transform-arrow-functions

npx babel ./src --out-dir ./dist --presets=@babel/preset-env
```

Babel的底层原理

+ 从一种源代码转换成另一种源代码（目标语言）
+ 就是编译器，可以将babel看成是一个编译器
+ Babel编译器的作用就是将我们的源代码，转换成浏览器可以直接识别的另外一种源代码