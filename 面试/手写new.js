function myNew(Constructor, ...args) {
  // 创建一个新对象，且该对象的原型指向构造函数的原型对象
  const obj = Object.create(Constructor.prototype);

  // 使用新对象作为上下文调用构造函数
  const result = Constructor.apply(obj, args);

  // 如果构造函数返回一个对象，则返回这个对象；否则返回新对象
  return result instanceof Object ? result : obj;
}
