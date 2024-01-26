export const extractTextFromHTML = (html: string): string => {
  if (globalThis.DOMParser) {
    const parser = new globalThis.DOMParser()
    const doc = parser.parseFromString(html, 'text/html')
    const text = doc.body.textContent || ''
    return text
  }
  return ''
}
