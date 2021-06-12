export  function formatData(time) {
  // Date.parse("2021-06-11T00:52:10.092Z")
  // let timeZoneFormat = new Date(Date.parse(time));
  var now = new Date(Date.parse(time));
  let timeZoneFormat = now.toLocaleDateString() + ' ' +now.toLocaleTimeString()  ;
  // console.log(now.toLocaleTimeString());
  // console.log(now.toLocaleDateString());
  return timeZoneFormat;
}