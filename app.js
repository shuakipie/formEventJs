const form = document.querySelector('#signup-form')
const creditCardInput = document.querySelector('#cc')
const termCheckbox = document.querySelector('#terms')
const veggieSelect =document.querySelector('#veggie')
// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     console.log('cc', creditCardInput.value)
//     console.log('terms',termCheckbox.checked)
//     console.log('veggie', veggieSelect.value)
//     // send form data to db
//     // append something to page using form data
// })

const formData = {}
for(let input of [creditCardInput, termCheckbox, veggieSelect]){
    input.addEventListener('input', ({target}) => {
        const {name, type, value, checked} = target
        formData[name] = type === 'checkbox' ? checked : value
        console.log(formData)
    })
} // better all function
// creditCardInput.addEventListener('input', (e)=> {
//     console.log(e)
//     formData['cc'] = e.target.value
    
// })

// veggieSelect.addEventListener('input', (e)=> {
//     console.log(e)
//     formData['veggie'] = e.target.value
    
// })

// termCheckbox.addEventListener('input', (e)=> {
//     console.log(e)
//     formData['terms'] = e.target.checked
    
// })