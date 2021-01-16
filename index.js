
async function createCards(cards) {
  const appliedColumn = document.querySelectorAll('.project-column')[2]
  const addNoteButton = appliedColumn.querySelector('[aria-label="Add a note to this column"]')
  const properties = new Set(["company", "location", "date", "link", "title", "notes"])
  async function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time))
  }
  async function addCard(card) {
    await delay(1500)
    if(!Object.keys(card).every(prop => properties.has(prop))) return console.log('Invalid object')
    const note = `### ${card.company}\n\n#### ${card.title}\n#### ${card.date}\n#### ${card.location}\n[Link to Job Posting](${card.link})\n\n#### Notes\n${card.notes}`
    addNoteButton.click()
    await delay(500)
    const textArea = appliedColumn.querySelector('[name="note"]')
    textArea.value = note
    const changeE = new Event('change')
    textArea.dispatchEvent(changeE)
    appliedColumn.querySelector('[data-disable-invalid]').click()
    await delay(1500)
  }
  for(let i = 0; i < cards.length; i++) {
    await addCard(cards[i])
  }
}
