function GetStarted() 
{
    let screen01 = document.getElementById('01screen');
    screen01.classList.add("ended");
    console.log("classe 'ended' adicionada");
    setTimeout(() => {
        window.location.href = "YudaHouse/app.html"
    }, 500);

}

