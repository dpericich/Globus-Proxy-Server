export const sortPrice = prices => {
  return prices?.sort()[0]
}

export const reverseDate = date => {
  let dateSplit = date.split('-')
  return `${dateSplit[1]}-${dateSplit[2]}-${dateSplit[0]}`
}
