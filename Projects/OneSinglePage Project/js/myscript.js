$.validator.setDefaults({
				submitHandler: function() {
					form.submit();
				}
			});
			$().ready(function() {
				// validate login form on keyup and submit
				$("#login").validate({
					messages: {
						email: "Please enter a valid email address"
					}
				});
			});
			$(document).ready(function(){
	  		$('.bxslider').bxSlider({
	  			auto: true,
  				autoControls: true
	  		});
		});