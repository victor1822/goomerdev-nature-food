export const formatDay = day => {
  switch (day) {
    case 1: 
      return 'Domingo'
    case 2: 
      return 'Segunda'
    case 3:
      return 'Terça'
    case 4:
      return 'Quarta'
    case 5:
      return 'Quinta'
    case 6:
      return 'Sexta'
    default:
      return 'Sábado'
  }
}