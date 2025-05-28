import { faker } from '@faker-js/faker'

export function gerarUsuarioFaker() {
    const firstName = faker.person.firstName()
    const lastName = faker.person.lastName()
    const userName = faker.internet.userName({ firstName, lastName }) + faker.number.int({ max: 9999 })
    const password = faker.internet.password({ length: 10, memorable: true }) + "@1"

    return {
        firstName,
        lastName,
        userName,
        password,
        confirmPassword: password
    }
}