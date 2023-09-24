function sendMail(){
    var params = {
        name : document.getElementById("name").value,
        phone : document.getElementById("phone").value,
        email : document.getElementById("email").value,
        subject : document.getElementById("subject").value,
        message : document.getElementById("message").value,
    }
    const serviceID = "service_b0ihmgs";
    const templateID = "template_6dul59m";
    
    emailjs
        .send(serviceID,templateID,params)
        .then((res)=>{
            document.getElementById("name").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("email").value = "";
            document.getElementById("subject").value = "";
            document.getElementById("message").value = "";
            alert("your message sent successfully")
        })
        .catch((err)=> console.log(err))
}
