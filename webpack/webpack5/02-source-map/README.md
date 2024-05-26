## 记录安装的一些步骤

+ 当前node版本 20.11.1
+ 当前安装webpack版本5.x

```bash
npm init
# 从webpack4开始后，都是需要安装webpack-cli
npm install webpack webpack-cli -D
```

运行
```bash
npx webpack
```

## source map

devtool:

以下几个值不会生成source-map

+ false：不使用source-map,也就是没有任何和source-map相关的内容
+ none：production模式下的默认值（什么都不写），不生成source-map
+ eval: development模式下的默认值，不生成source-map
  - 但是它会在eval执行的代码中，添加//# sourceURL=;
  - 它会被浏览器在执行时解析，并且在调试面板中生成对应的一些文件目录，方便我们调试代码

其他值：
+ source-map: 一般用于production
+ eval-source-map: 不怎么用
+ inline-source-map: 不怎么用 source map会被添加至bundle文件后面
+ cheap-source-map: 开发环境，会生成sourcemap,但是会更加高效一些，因为它没有生成列映射（就是第几列呢？）
+ cheap-module-source-map: 类似cheap-source-map，但是对源自loader的sourcemap处理会更好。
  - 比如空格，如果使用cheap-source-map的话会删除行空格的。
+ hidden-source-map: production环境
  - 会生成sourcemap，但是没有引用
+ nosources-source-map: 会生成sourcemap文件，只会提示错误信息，但是源代码不会。