#### NextJs 模板

### 项目约定

- 业务组件要以一个特殊标识开头(eg: Next)，在component文件夹

- 样式组件要以Styled开头，在styled-components文件夹

- 尽可能的编写组件的propTypes

- 尽可能的使用函数式组件(性能问题，但可能也会带来逻辑问题，及时爬坑即可)

- 图片资源放到images文件夹下，根据页面/组件放置。每次放置之后执行 npm run imagemin 压缩一下到 static，使用的时候还是使用 static 开头的路径地址

集成了:

- redux
- [styled-components](https://github.com/styled-components/styled-components)
- 需要使用pm2部署
- [next-seo](https://github.com/garmeeh/next-seo#title-template)

#### 笔记

- next start 是运行的经过 next build 构建的文件夹的内容

- nextJs自带预加载功能，在Link prefetch属性控制，如果不希望预加载就设为false

#### 注意

demo 时发现的问题，不知道如何解决，但是知道如何避免

- 不能够同时使用css-module和styled-components，否则可能会在页面中使用Link跳转页面失败

当然如果不需要保存页面状态，可以直接使用 a 标签跳转，没有此问题。推荐使用styled-components + 原生支持的styled-jsx
[详情可见](https://github.com/zeiit/next-plugns/issues/282#issuecomment-523696006)

- nextJs的预加载可能会出现问题。[详情可见](https://github.com/zeit/next.js/issues/7939#issuecomment-511019282)
导致在使用 redux-thunk 编译打包的时候出现警告，如下

 > You have opted-out of Automatic Prerendering due to `getInitialProps` in `pages/_app`

- 编写propTypes时注意开头小写！

- 如果使用ant-design，官方会解决由于react更新带来的生命周期方法更新造成的警告⚠,[issue](https://github.com/ant-design/ant-design/issues/9792) ️

- getInitialProps 方法中获取数据不能简单的直接使用 api 路由，需要使用完整的接口地址，服务端渲染才会获取到数据，  但是前端渲染的话直接这样做就会跨域，所以需要判断下是否是服务端渲染加上请求的baseURL。[详情可见](https://github.com/zeit/next.js/issues/5009)
