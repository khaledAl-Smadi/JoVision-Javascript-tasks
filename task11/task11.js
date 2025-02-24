document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("get_ip").addEventListener("click", function () {
        let button=this;
        fetch("https://api.ipify.orgx/")
            .then(respons => respons.text())
            .then(data => button.textContent=data )
            .catch(error => alert(error));
    })
})
