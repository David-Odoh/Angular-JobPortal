/**
 * Slider Editor
 *
 * @copyright Commercial License By webiarch.Com 
 * @email webiarchinfotech@gmail.com
 * @visit http://www.webiarch.com
 */
(function( $ ) {
 
	$.fn.webiNewsletter = function( initvar ) {
 
		/**
		 * Create List Layers By JSON Data.
		 */
		this.price = '';
		this.form = null;
		this.ischanged = false; 
		this.msg = '';
		this.work = function( msg  ){   
			var form = $( this ).find('form');		
			this.msg = msg;
			switch( $(this).data('mode') ){
				case 'popup':
					if( this.getCookie('cnewsletter') == 1 ){
						return true; 
					}
					this.showPopup( form );
					break;
				case 'flybot' : 
					if( this.getCookie('cnewsletter') == 1 ){
						return true; 
					}
					this.flybot( form );
					break;	
			}
			
			this.submit( form );
 		},

 		this.flybot = function( form ){ 
 			var _this = this;
 			var container = $(form).parent();
 			container.appendTo( 'body' );
			$(container).slideToggle();
 			container.removeClass('hide').addClass('slide-bottom');
 			$( '.button-slide', container ).click( function(){
 				$(container).slideToggle();
 			} );
 			$(':checkbox', container ).click( function(){
				_this.setCookie( 'cnewsletter', '1', 10 );
				$(container).slideToggle();
			} );
 		},

 		this.showPopup = function ( form ){
 			var _this = this;
 			$.magnificPopup.open({
			  	items: {
				    src: form,
				    type: 'inline',
				    width:"500"
				 },

			});
			$(':checkbox', form ).click( function(){
				_this.setCookie( 'cnewsletter', '1', 10 );
				$.magnificPopup.close();
			} );
 		},
 		this.setCookie = function ( cname, cvalue, exdays ) {
		    var d = new Date();
		    d.setTime(d.getTime() + (exdays*24*60*60*1000));
		    var expires = "expires="+ d.toUTCString();
		    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
		},

		this.getCookie = function getCookie(cname) {
		    var name = cname + "=";
		    var decodedCookie = decodeURIComponent(document.cookie);
		    var ca = decodedCookie.split(';');
		    for(var i = 0; i <ca.length; i++) {
		        var c = ca[i];
		        while (c.charAt(0) == ' ') {
		            c = c.substring(1);
		        }
		        if (c.indexOf(name) == 0) {
		            return c.substring(name.length, c.length);
		        }
		    }
		    return "";
		},
		this.isValidEmailAddress = function (emailAddress) {
			var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			return pattern.test(emailAddress);
		},
		
 		this.submit = function ( _form ){ 
 			var _this = this;
 			$( _form ).on('submit', function() {
				var email = $('.inputNew').val();
				$(".success_inline, .warning_inline, .error").remove();
				if(!_this.isValidEmailAddress(email)) {				
				$('.valid').html("<div class=\"error alert alert-danger\">"+_this.msg+"<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button></div></div>");
				$('.inputNew').focus();
				return false;
			}
			var url = $(_form).attr('action');
			$.ajax({
				type: "post",
				url: url,
				data: $( _form ).serialize(),
				dataType: 'json',
				success: function(json)
				{
					$(".success_inline, .warning_inline, .error").remove();
					if (json['error']) {
						$('.valid').html("<div class=\"warning_inline alert alert-danger\">"+json['error']+"<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button></div>");
					}
					if (json['success']) {
						$('.valid').html("<div class=\"success_inline alert alert-success\">"+json['success']+"<button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button></div>");
					}
				}
			});
			return false;
		});
 		}
		//THIS IS VERY IMPORTANT TO KEEP AT THE END
		return this;
	};
 
})( jQuery );
/***/