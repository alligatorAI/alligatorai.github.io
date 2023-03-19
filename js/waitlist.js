
axios.defaults.headers.post['Authorization'] = "Bearer pat12Avata2reFtfO.4ce0eb7e336313e3f68767e6f2d34960c201f9a80dff45b5e9212d252f239192";
axios.defaults.headers.post['Content-Type'] = "application/json";
var airtable_write_endpoint = "https://api.airtable.com/v0/app8V4ka7SuUWjzXr/tblSVGfNGlcZJXRJD";

var waitlist = document.querySelector("#waitlist");

// When the form is submitted...
waitlist.addEventListener("submit", function(event) {
  event.preventDefault();
 
  if(waitlist.first_name.value && waitlist.last_name.value && waitlist.company.value && waitlist.email.value && waitlist.agree.checked) {
    // POST the data
    axios.post(airtable_write_endpoint, {
      "fields": {
        "first_name": waitlist.first_name.value ?? "",
        "last_name": waitlist.last_name.value ?? "",
        "company": waitlist.company.value ?? "",
        "email": waitlist.email.value ?? "",
        "phone": waitlist.phone_number.value ?? "",
        "message": waitlist.message.value ?? ""
      }
    }).then(()=>{
      window.location.href = "/thankyou.html";
    }
        
    );
  } else {
    return false;
  }

});