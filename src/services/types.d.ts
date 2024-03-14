export type Case = {
  icon: string
  name: string
  plays: number

}

export type Drop = {
  name: string
  percentage: number
  price: number
  case: Case
}