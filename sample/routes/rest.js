
exports.post = function(request,response){
    request.accepts('application/json');
 
    restObj.log(request);
    
    // output message
    response.json({result:'success'});
 
};

exports.get = function(request,response){
	request.accepts('application/json');
	
	restObj.log(request);
	
	// output message
	response.json({result:'success'});
	
};

restObj = {
	log : function(request){
		console.log('rest.log call');
	    // input message handling
	    console.log('req.originalUrl :'+request.originalUrl);
	    console.log('req.path :'+request.path);
	    console.log('------------');

	    reqbody = request.body;
	    console.log('request.body :'+JSON.stringify(reqbody));
	    console.log('request.body name is :'+reqbody.name);
	    console.log('request.body address is :'+reqbody.address);
	    console.log('------------');

	    reqparams = request.params;
	    console.log('request.reqparams :'+JSON.stringify(reqparams));
	    console.log('request.reqparams name is :'+reqparams.name);
	    console.log('request.reqparams address is :'+reqparams.address);
	    console.log('------------');
	    
	    reqquery = request.query;
	    console.log('request.query :'+JSON.stringify(reqquery));
	    console.log('request.query name is :'+reqquery.name);
	    console.log('request.query address is :'+reqquery.address);
	    console.log('------------');
	    
	}
	
}