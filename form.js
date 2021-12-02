window.addEventListener("load", function(){
    function sendData(){
        const XHR = new XMLHttpRequest();
        const FD = new FormData(form);

        XHR.addEventListener( "error", function(event){
                alert('Submission unsuccessful');

        });

        XHR.addEventListener("load", function(event){
            alert('Your account has been created');
        });

        XHR.open("POST", "http://localhost:5000/app/new/user");
        XHR.send(FD);

    }
    const form = document.getElementById("signup");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        sendData();
    });

})