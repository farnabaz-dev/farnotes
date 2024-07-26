interface Note {
  body: string
  parsed?: object
}

export default eventHandler(async (event) => {
  const { slug } = event.context.params || {}
  if (!slug) {
    throw createError({ statusCode: 400, message: 'Missing slug' })
  }
try {
  let note = await hubKV().get<Note>(slug).catch((e) => {
console.log(e)
return null
})

  if (!note) {
    note = { body: '# Hello' }
    note.parsed = await parseMarkdown(note.body)
  }

  return { slug, ...note }

}catch(e) {
console.log("e", e)
return "dsd"
}
})
