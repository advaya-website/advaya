const form = document.querySelector('#para');
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
form.addEventListener('submit', (e) => {
    alert("You will be notified when round two goes live");
    e.preventDefault();
    db.collection('parallaxo').doc(form.pno.value).set({
        name: form.pname.value,
        phone: form.pno.value,
        time:time,
    });
    form.name.value = '';
    form.pno.value = '';
    //window.location.replace("reg.html");
});