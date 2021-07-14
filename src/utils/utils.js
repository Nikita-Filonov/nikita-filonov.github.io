export const parseHashUrl = (url) => {
  const pattern = /\/([a-z])\w+/;
  return url.match(pattern)
}
