(function() {
  var target = {};

  var proxy1 = new TransparentProxy(target, {});
  var proxy2 = new TransparentProxy(target, {});
  var proxy3 = new TransparentProxy(proxy2, {});

  print(target==proxy1, Object.equals(target, proxy1), Object.identical(target, proxy1));
  print(proxy1==proxy2, Object.equals(proxy1, proxy2), Object.identical(proxy1, proxy1));

  print(target==proxy3, Object.equals(target, proxy3), Object.identical(target, proxy3));
  print(proxy1==proxy3, Object.equals(proxy1, proxy3), Object.identical(proxy1, proxy3));

})();

(function() {
  var target = {};

  var realm = TransparentProxy.createRealm();

  var proxy1 = realm.Proxy(target, {});
  var proxy2 = realm.Proxy(target, {});
  var proxy3 = realm.Proxy(proxy2, {});

  print(target==proxy1, Object.equals(target, proxy1), Object.identical(target, proxy1));
  print(proxy1==proxy2, Object.equals(proxy1, proxy2), Object.identical(proxy1, proxy1));

  print(target==proxy3, Object.equals(target, proxy3), Object.identical(target, proxy3));
  print(proxy1==proxy3, Object.equals(proxy1, proxy3), Object.identical(proxy1, proxy3));

  print(target==proxy1, realm.equals(target, proxy1), realm.identical(target, proxy1));
  print(proxy1==proxy2, realm.equals(proxy1, proxy2), realm.identical(proxy1, proxy2));

  print(target==proxy3, realm.equals(target, proxy3), realm.identical(target, proxy3));
  print(proxy1==proxy3, realm.equals(proxy1, proxy3), realm.identical(proxy1, proxy3));

})();

(function() {
  var target = {};

  var realm = TransparentProxy.createRealm();

  var proxy1 = realm.Proxy(target, {});
  var proxy2 = new TransparentProxy(target, {});
  var proxy3 = new TransparentProxy(proxy2, {});

  print(target==proxy1, Object.equals(target, proxy1), Object.identical(target, proxy1));
  print(proxy1==proxy2, Object.equals(proxy1, proxy2), Object.identical(proxy1, proxy1));

  print(target==proxy3, Object.equals(target, proxy3), Object.identical(target, proxy3));
  print(proxy1==proxy3, Object.equals(proxy1, proxy3), Object.identical(proxy1, proxy3));

  print(target==proxy1, realm.equals(target, proxy1), realm.identical(target, proxy1));
  print(proxy1==proxy2, realm.equals(proxy1, proxy2), realm.identical(proxy1, proxy2));

  print(target==proxy3, realm.equals(target, proxy3), realm.identical(target, proxy3));
  print(proxy1==proxy3, realm.equals(proxy1, proxy3), realm.identical(proxy1, proxy3));

})();
