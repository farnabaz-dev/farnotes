export default cachedEventHandler(() => {
  return new Date()
}, {
  maxAge: 10
})
