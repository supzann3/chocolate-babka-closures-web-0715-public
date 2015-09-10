// var number=0;
function counterCreator(num) {
  var number=num;
  return function () {
    return num+=1;
  };
}
function countAnnouncer (type,count) {
  var type=type;
  var count=count;
  return function(){
    return "Now serving "+ type +" number " +count() + "!";
  };
}
