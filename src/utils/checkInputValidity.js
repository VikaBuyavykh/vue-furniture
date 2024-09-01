import { nameRegex, emailRegex } from '@/utils/regex.js'

export function checkInputValidity(e) {
  function isEmailValid(value) {
    return emailRegex.test(value)
  }

  function isNameValid(value) {
    return nameRegex.test(value)
  }

  const element = e.target
  const errorElement = document.querySelector(`#${element.id}-error`)

  errorElement.textContent = ''
  element.classList.remove('input-invalid')

  if (element.value.length > 1 && element.type === 'email') {
    if (!isEmailValid(element.value)) {
      errorElement.textContent = 'Email address is incorrect'
      element.classList.add('input-invalid')
    }
  } else if (element.value.length > 1 && element.id === 'name') {
    if (!isNameValid(element.value)) {
      errorElement.textContent = 'The name must consist of latin letters, a space or a hyphen'
      element.classList.add('input-invalid')
    }
  } else {
    if (!element.checkValidity()) {
      errorElement.textContent = element.validationMessage
      element.classList.add('input-invalid')
    }
  }
}
