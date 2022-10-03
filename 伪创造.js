h5gg.clearResults();
h5gg.searchNumber('-9223372034707292160', 'I64', '0x100000000', '0x1600000000');
h5gg.searchNearby('398', 'I32', '0x100');
h5gg.searchNumber('398', 'I32', '0x100000000', '0x1600000000');
var count = h5gg.getResultsCount();
var r = h5gg.getResults(count);
for(var i=0; i<count; i++){
var addr1 = r[i].address;
var addr2 = Number(addr1) + 324;
addr2 = '0x' + addr2.toString(16);
h5gg.setValue(addr2, 1, "I32");
}


