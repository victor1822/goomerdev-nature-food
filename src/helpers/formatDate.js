export function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-BR', { timeZone: 'UTC' })
}

export function unMaskDate(date) {
  return new Date(
    date.split('/')[2],
    date.split('/')[1] - 1,
    date.split('/')[0]
  ).toISOString()
}

export function formatTime(date) {
  return (
    ('00' + date?.getHours())?.slice(-2) +
    ':' +
    ('00' + date?.getMinutes())?.slice(-2)
  )
}

