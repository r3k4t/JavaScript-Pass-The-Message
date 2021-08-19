//Select the input element
let form = document.querySelector("#message-form")
//Set up Submit Button
form.addEventListener('submit',submitBtn)
     // prevent the form's default submission action
function submitBtn(e){
    e.preventDefault()
    //Get user's input from from
    let message = document.querySelector('#message')
    let feedback = document.querySelector('.feedback')
    let messageContent=document.querySelector('.message-content')

    if (message.value === ''){
        feedback.classList.add('show')
        setTimeout(()=>{
        feedback.classList.remove('show')
        },1000)
    } else{
         //Change message content and clear the message input
        messageContent.textContent = message.value
        message.value = ''
    }
}