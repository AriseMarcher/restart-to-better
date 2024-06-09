# vue3-ts-jest

vue3+ts使用jest&Vue Test Utils测试的一些案例学习

[Jest](https://www.jestjs.cn/docs/getting-started)
[Vue Test Utils](https://test-utils.vuejs.org/guide/)

## FAQ 

### Support for the experimental syntax 'jsx' isn't currently enabled

由于是使用vue3版本，需要安装@vue/vue3-jest，而且jest.config.ts中需要配置 transform

```bash
pnpm add @vue/vue3-jest -D
```