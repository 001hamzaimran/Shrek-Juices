const children = document.querySelectorAll('.child');
const rating = document.querySelector('.rating');
const feedbackSection = document.querySelector('.feedback-section');
const btn = document.getElementById("btn");


feedbackSection.addEventListener('click', (Event) => {
    icons = Event.target.parentNode;


    for (let i = 0; i < children.length; i++) {
        

        children[i].classList.remove('activee');
    }

    if (!icons.classList.contains('activee')) {
        icons.classList.add('activee');
    }
})



btn.addEventListener('click', () => {

    let userFeedback;
    let userFeedbackicon;

    if (icons === undefined) {
        userFeedback = ""
    } else {
        userFeedback = icons.children[1].innerText;
        userFeedbackicon = icons.children[0].innerText;
    }

    if (userFeedback !== "") {

        feedbackSection.innerHTML = `
        <div class="response">
            <p>${userFeedbackicon}</p>
            <h3>Your Feedback : ${userFeedback}</h3>
            <h6>Thank you for your Response </h6>

            <div class="feedbackbtn">
                <a href="index.html">Back</a>
            </div>
        </div>
        `
    }





})