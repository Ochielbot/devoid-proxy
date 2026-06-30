const hazel = require('./index')

const {
  INTERVAL: interval,
  ACCOUNT: account,
  REPOSITORY: repository,
  PRE: pre,
  TOKEN: token,
  URL: PRIVATE_BASE_URL,
  VERCEL_URL
} = process.env

const normalizeUrl = value => {
  if (!value) return undefined
  if (value.startsWith('http://') || value.startsWith('https://')) return value
  return `https://${value}`
}

const url = normalizeUrl(PRIVATE_BASE_URL) || normalizeUrl(VERCEL_URL)

module.exports = hazel({
  interval,
  account,
  repository,
  pre,
  token,
  url
})
