function capitalize(str) {
  const capitalizedFirstLetter = str.charAt(0).toUpperCase()
  const capitalizedString = capitalizedFirstLetter + str.slice(1)
  return capitalizedString
}

module.exports = capitalize