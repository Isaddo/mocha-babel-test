//要瘋了
var foo = function foo () {
  var entries = [{
    child: []
  }];

  var recursiveFunc = function (entries) {
    entries.forEach(function (entry) {
      recursiveFunc(entry.child);
    });
  };
  recursiveFunc(entries);
  
  return [];
};

export default foo;