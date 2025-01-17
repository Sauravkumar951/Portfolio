

//Getting Nav LinksElements
let navLinks= document.querySelector('.NavLinks');
let links = navLinks.querySelectorAll('li');
links.forEach((link) => {
    link.addEventListener('click',(i)=>{
        
    links.forEach((link)=>{
       
        let element = document.getElementById(`${link.id}Container`);
        element.style.transition="transition: all ease .5s"
        setTimeout(()=>{
        element.style.display="none";
        },500);
    });
    links.forEach((link)=>{link.classList.remove('active')});
       i.srcElement.classList.add('active');
        
    let element = document.getElementById(`${i.srcElement.id}Container`);
    element.style.transition=" transition: all ease .5s;"
    setTimeout(()=>{  
    element.style.display="flex";
},500);

});

});
resumeDownload();

//Resume Download
function resumeDownload(){
    element = document.getElementById("HireMeBtn");
    id = `1GydKIfFB6UOKr2wpYWubDwBM8Fldhg2O`;
     let Link = `https://drive.google.com/uc?export=download&id=${id}`;
    element.children[0].href = Link;
    element.children[0].setAttribute("download", "Resume.pdf");
}

// Form Submit Function
function sendMail(){
    element = document.getElementById("contactForm");
    element.addEventListener("submit",async function(event){
        event.preventDefault();

        let formData = new FormData(event.target);
        formData ={
            name:document.getElementById("Name").value,
            email:document.getElementById("Email").value,
            subject:"Test",
            message:document.getElementById("Message").value,
            mobilenumber:document.getElementById("MobileNumber").value,
        }
    const data = formData;
    try {
        const response = await fetch("http://localhost:3000/send-email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const result = await response.json();
        document.getElementById("Alert").textContent = result.message;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("responseMessage").textContent = "Failed to send email.";
    }
    });
}
sendMail();






// Mail Autometic Function





/*
// whatsapp message sending function
function sendMessage(){
    document.getElementById('contactForm').addEventListener('submit', async function (event) {
        event.preventDefault();
    
        const recipient = document.getElementById('MobileNumber').value;
        const message = document.getElementById('Message').value;
        const name = document.getElementById('Name').value;
    
        try {
            const response = await fetch('http://localhost:3000/send-whatsapp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ recipient, message,name }),
            });
    
            const result = await response.json();
    
            const responseMessage = document.getElementById('Alert1');
            if (response.ok) {
                responseMessage.textContent = 'Message sent successfully!';
            } else {
                responseMessage.textContent = `Error: ${result.error}`;
            }
        } catch (error) {
            console.error('Error:', error);
            document.getElementById('responseMessage').textContent = 'Failed to send message.';
        }
    });
    
}
sendMessage();*/