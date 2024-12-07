
//$(".phone-mask, #Phone").mask("?(999) 999 9999", { autoclear: false },);
$('.phone-mask, #Phone').mask("?(999) 999 9999", { autoclear: false }).on('blur', function () {
    $(this).valid();
});
$.validator.addMethod("noZeroStart", function (value, element) {
    return this.optional(element) || /^(?!\(0|0)/.test(value);
}, "Phone number cannot start with zero.");
$.validator.addMethod("noRepeatedDigits", function (value, element) {
    return this.optional(element) || !/(\d)\1{9,}/.test(value.replace(/\D/g, ''));
}, "Phone number cannot be a sequence of repeated digits.");


let TypePhoneRegex = /^\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4}$/;

$('#contact-us-form').validate({
	rules: {
		Name: {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
          	Designation: {
			required: false,
                  	maxlength: 100,
		},
		Email: {
			required: true,
                        email: true,
                        regex: /^(([^<>()[\]\\.,;:\s@+''"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		},
		Phone: {
			required: true,  
                        regex: TypePhoneRegex,
                        noZeroStart: true,
                        noRepeatedDigits: true
		},
          	"Practice Type" :{
                	required: false,
                },
		"Practice Name": {
			required: false,                  	
		},
          	"Employee Size":{
                	required: false,
                },
		Message: {
			required: false,
                  	maxlength: 500,
                  	regex: "[^<->]+$"
		}
	},
	messages: {
		Name: {
			required: "Name is required",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid name"
		},
          	Designation: {
			required: "",
		},
		Email: {
			required: "Email is required",
                        email: "Invalid email",
                        regex: "Invalid email"
		},
		Phone: {
			required: "Phone is required",
                  	regex: "Invalid phone number",
                        noZeroStart: "Phone number cannot start with 0.",
                        noRepeatedDigits: "Phone number cannot be a sequence of repeated digits."
		},
		"Practice Name": {
			required: "",             	
		},
          	"Practice Type" :{
                	required: "",
                },
		"Employee Size":{
                	required: "",
                },
		Message: {
			required: "",
                  	maxlength: "Maximum 500 characters allowed",
                  	regex: "Sorry such char(< and >) are not allowed"
		}
	},
        errorPlacement: function(error, element) {
          
          $('#' + error[0].id).remove();

         if (element.attr("name") == "Name")
           error.insertAfter(".NameError");         
          else if (element.attr("name") == "Phone")
            error.insertAfter(".PhoneError");   
          else if (element.attr("name") == "Email")
            error.insertAfter(".EmailError");  
          else
            error.insertAfter(element);
                    
          $('#' + error[0].id).attr('for', element[0].id);
        }
});



$('#quick-enquiry-form').validate({
	rules: {
		Name: {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
		Email: {
			required: true,
                        maxlength: 100,
                        regex: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
		},
		Phone: {
			required: true,
                        regex: TypePhoneRegex,
                        noZeroStart: true,
                        noRepeatedDigits: true
		},
		"Practice Name": {
			required: true,
                        maxlength: 100,
                        regex: "^[a-zA-Z0-9'.\\s]+$"
		},
		Message: {
			required: true,
                  	maxlength: 500,
                  	regex: "[^!*<->]+$"
		}
	},
	messages: {
		Name: {
			required: "Name is required",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid name"
		},
		Email: {
			required: "Email is required",
                        regex: "Invalid email"
		},
		Phone: {
			required: "Phone is required",
                        regex: "Invalid phone number",
                        noZeroStart: "Phone number cannot start with 0.",
                        noRepeatedDigits: "Phone number cannot be a sequence of repeated digits."
		},
		"Practice Name": {
			required: "Practice name is required",
                        regex: "Invalid Practice Name"
		},
		Message: {
			required: "Please share your reason for exploring marketing",
                  	maxlength: "Maximum 500 characters allowed",
                  	regex: "Sorry such character are not allowed"
		}
	}
});


//Case Study Form 

$('#case-studies').validate({
	rules: {
		Name: {
			required: true,
                  	maxlength: 100,
                  	regex: "^[a-zA-Z0-9'.\\s]+$"
		},
		Email: {
			required: true,
                        maxlength: 100,
                        regex: /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
		},
		PracticeName: {
			required: true,
                        maxlength: 100,
                        regex: "^[a-zA-Z0-9'.\\s]+$"
		},
          	Designation :{
			required: true,
                        maxlength: 100,                
                },
		Phone: {
			required: false,
                        regex: TypePhoneRegex,
                        noZeroStart: true,
                        noRepeatedDigits: true
		},
                SelProject :{
                      required: true
                }
	},
	messages: {
		Name: {
			required: "Please Enter Name",
                  	maxlength: "Maximum 100 characters allowed",
                  	regex: "Invalid Name"
		},
		Email: {
			required: "Please Enter Email",
                        regex: "Invalid Email"
		},
		PracticeName: {
			required: "Please Enter Practice Name",
                        regex: "Invalid Practice Name"
		},
          	Designation :{
			required: "Please Enter Designation",          
                },
		Phone: {
			required: "Please Enter Phone",
                        regex: "Invalid phone number",
                        noZeroStart: "Phone number cannot start with 0.",
                        noRepeatedDigits: "Phone number cannot be a sequence of repeated digits."
		},
                SelProject :{
                  	required: "Please Select Project"
                }
	}
});

//Case Study Form Ends







$.validator.addMethod("regex", function(value, element, regexp) {
    var re = new RegExp(regexp);
    return this.optional(element) || re.test(value);
  }, "Invalid input");



//Regex Variables
var TypeARegex = /^(?!\s)[a-zA-Z0-9_\s-,]*$/;
var TypeEmailRegex = /^(([^<>()[\]\\.,;:\s@+''"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//Regex Variables END

//PDF form validation
$('#pdf-form').validate({
    rules: {
        Name: {
            required: true,
            maxlength: 100,
            regex: TypeARegex
        },
        "Company Email": {
            required: true,
            email: true,
            regex: TypeEmailRegex
        },
        "WhatsApp number": {
            required: true,
            noZeroStart: true,
            noRepeatedDigits: true
        },
    },
    messages: {
        Name: {
            required: "Name is required",
            maxlength: "Maximum 100 characters allowed",
            regex: "Invalid name"
        },
        "Company Email": {
            required: "Company email is required",
            email: "Invalid company email",
            regex: "Invalid company email"
        },
        "WhatsApp number": {
            required: "WhatsApp number is required",
            noZeroStart: "Whatsapp number cannot start with 0.",
            noRepeatedDigits: "Whatsapp number cannot be a sequence of repeated digits."
        },
    },
    errorPlacement: function (error, element) {
        var placement = $(element).data('error');
        if (placement) {
            $(placement).append(error)
        } else {
            error.insertAfter(element);
        }
    }
});
//PDF form validation END
