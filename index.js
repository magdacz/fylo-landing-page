const modal = document.querySelector('.modal');
const sendBtn = document.querySelector('.button--signIn');
const input = document.querySelector('.signIn__input');
const error = document.querySelector('.signIn__error');
const modalCloseBtn = document.querySelector('.modal__close');

const showModal = () => {
    modal.classList.add('show');
} 
   
const checkEmail = () => {
    console.log('działa!')

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(re.test(input.value)) {
        error.classList.remove('show');
        input.value= '';
        showModal();

    } else {
        error.classList.add('show');
        input.value= '';
    }  
}

sendBtn.addEventListener('click', e => {
    e.preventDefault();

    checkEmail()
});

modalCloseBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', e => {
    if(e.target == modal) {
        modal.classList.remove('show');
    }
})







