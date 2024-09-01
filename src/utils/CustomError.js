export class CustomError extends Error {
  constructor(...params) {
    super(...params)

    this.name = 'custom'
  }
}
