#### next-demo

本项目是一个基于react官方提供的同构框架next搭建的demo架子

集成了:

- redux
- css-module
- [styled-components](https://github.com/styled-components/styled-components)
- 需要使用pm2部署


#### 笔记

- next start 是运行的经过 next build 构建的文件夹的内容

- nextJs自带预加载功能，在Link prefetch属性控制，如果不希望预加载就设为false

#### 注意

demo 时发现的问题，不知道如何解决，但是知道如何避免

- 不能够同时使用css-module和styled-components，否则可能会在页面中使用Link跳转页面失败

当然如果不需要保存页面状态，可以直接使用 a 标签跳转，没有此问题。[详情可见](https://github.com/zeit/next-plugins/issues/282#issuecomment-523696006)

- nextJs的预加载可能会出现问题。[详情可见](https://github.com/zeit/next.js/issues/7939#issuecomment-511019282)
导致在使用 redux-thunk 编译打包的时候出现警告，如下

 > You have opted-out of Automatic Prerendering due to `getInitialProps` in `pages/_app`
