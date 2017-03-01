exports.home=function(req,res){
  res.render('home',{title:'iLoveMyCity',
                    headline:'We believe that every city has something to say'
                    });
                  }


exports.city=function(req,res){
	var cityName=req.params.city;
	var title, heading;
	var imageArray=[1,2,3,4];
	
	if(cityName=='belize'){
		title="Belize";
		heading="Belize is a beautiful country located in Central America and bordered by the Caribbean Sea";	
		
	}
	
	else if(cityName=='paris'){
		title="Paris";
		heading="Paris: The Ifiel Tower is very beautiful";	
		
	}
	
	else if(cityName=='newyork'){
		title="New York";
		heading="New York: The city that never sleeps";	
		imageArray.push(5);
		imageArray.push(6);
	}
	


   res.render('city',{
        title:title,
        headline:heading,
        city:cityName,
        imageArray:imageArray});
};