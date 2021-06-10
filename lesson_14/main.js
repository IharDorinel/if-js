const sendBtn = document.getElementById('sendBtn');
const formEl = document.getElementById('formEl');


formEl.addEventListener('submit', async event => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const response = await fetch('https://fe-student-api.herokuapp.com/api/file', {
        method: 'POST',
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: formData,
    })
    const responseJSON = await response.json();
    console.log(responseJSON);

})
