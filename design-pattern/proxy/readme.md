代理模式
======
> 代理模式是为一个对象提供一个代用品或占位符，以便控制对它的访问。

本体提供一个替身对象来控制对本体的访问，客户实际上访问的是替身对象。替身对象对请求做出一些处理之后，
再把请求转交给本体对象

在调用者看来，代理对象和本体是一致的，代理接手请求的过程对于调用者来说是透明的，
调用者并不清楚代理和本体的区别

最经典的应用案例就是nginx的代理访问、负载均衡等