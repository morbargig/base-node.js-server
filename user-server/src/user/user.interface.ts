export interface User {
  id?: number,
  firstName: String,
  lastName: String,
  email: string,
  password: string,
  rule?: UserType[],
  date?: Date,
}

export interface UserType {
  admin: 'ADMIN',
  regular: 'REGULAR'
}