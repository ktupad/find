find={
gebi:function(i){ return  document.getElementById(i);},
data:[{id:1,nama:"a" },{id:2,nama:"b"},{id:3,nama:"c"}],
callback:function(){},

getData:function(data, key) {
res = data.filter(function (item) {
return Object.values(item).map(function (value) {
return String(value).toLowerCase();
}).find(function (value) { var r=key.toLowerCase();
return value.includes(r);
});
});
this.callback(res);
},

view:function(id,data){
out  = '<div class="find">';
out += '<label><input type="text" placeholder="Find..." id="kfind" /></label>';
out += '</div>';
document.getElementById(id).innerHTML=out;
var z= document.getElementById('kfind');
z.onkeyup = function() {
var key=z.value;
find.getData(data, key);
};
},
};
