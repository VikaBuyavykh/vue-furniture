export function checkFormValidity(e) {
  const form = e.target.form
  const errors = Array.from(form.querySelectorAll('span'))
  const inputs = Array.from(form.querySelectorAll('input'))
  const button = form.querySelector('button[type="submit"]')

  const hasAnError = errors.some((error) => error.textContent !== '')
  const hasAnEmptyInput = inputs.some((input) => input.value === '')

  if (!hasAnError && !hasAnEmptyInput) {
    button.removeAttribute('disabled')
  } else {
    button.setAttribute('disabled', true)
  }
}
