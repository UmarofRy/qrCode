document.addEventListener('DOMContentLoaded', () => {
    
    const input = document.getElementById("input");
    const btn = document.getElementById("btn");
    const div = document.getElementById("container");

    btn.addEventListener('click', () => {
        if(input.value === "") {
            alert("Please enter a value");
        }
        div.innerHTML = ""
            qr = new QRCode(div, {
                text: input.value,
                width: 256,
                height: 256,
                colorDark: "#000000",
                colorLight: "#fff",
            });
            
            
        
        input.value = "";

    });
    

});