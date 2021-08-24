

document.querySelector("#contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    let name =document.querySelector("#name").value;
    let subject =document.querySelector("#subject").value;
    let email =document.querySelector("#email").value;
    let message =document.querySelector("#message").value;
    // saveContactInfo(name, subject, email, message);

    // document.querySelector("contact-form").reset();

    sendEmail(name, subject, email, message);
    }


function sendEmail(name, subject, email, message)
{
    Email
    .send({
    HOST: "smtp.gmail.com",
    Username:'sudipshrestha1980@gmail.com',
    Password : 'obaihkjzbrxvnjzw',
    To: 'sudipshrestha1980@gmail.com',
    From: 'sudipshrestha1980@gmail.com', 
    Subject :  `${name} sent you a message`,
    Body : `Name :${name} <br/> Subject: ${subject} <br/> Email : ${email} <br/> Message : ${message}`,
    }). then(message => 
        
        { 
            if (message = 'OK'){
            alert("Your email has sent successfully");
        }
        else {
            console.error(message);
            alert("there is an error whil sending message");

        }
        
        });
}