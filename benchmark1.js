db.tester.insert({"x" : 1})
var timeInc = function() {
	var start = (new Date()).getTime();

	for (var i=0; i<100000; i++) {
		db.tester.update({}, {"$inc" : {"x" : 1}});
		db.getLastError();
	}

	var timeDiff = (new Date()).getTime() - start;
	print("Updates took: "+timeDiff+"ms");
}