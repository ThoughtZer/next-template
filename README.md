#### next-demo

本项目是一个基于react官方提供的同构框架next搭建的demo架子

集成了:

- redux
- css-module
- [styled-components](https://github.com/styled-components/styled-components)


#### 注意

> demo 时发现的问题，不知道如何解决，但是知道如何避免

不能够同时使用css-module和styled-components，否则可能会在页面中使用Link跳转页面失败

当然如果不需要保存页面状态，可以直接使用a标签跳转，没有此问题

