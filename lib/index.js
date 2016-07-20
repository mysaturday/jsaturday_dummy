module.exports = function(jSaturday){

	return {
		test: function(){
			jSaturday.get('Dummy').lib.print("OK");
		},
		print: function(scrivi){
			console.log(scrivi);
		}
	};

};