function scrapeIndeed() {
  return
    [...document.querySelectorAll('.atw-AppCard')]
    .map(j => {
      const x = {}
      x.company = j.querySelector('.atw-JobInfo-companyLocation > span:first-child').innerText
      x.location = j.querySelector('.atw-JobInfo-companyLocation > span:last-child').innerText
      x.date = j.querySelector('.atw-Disposition-timestamp').innerText
      x.link = j.querySelector('.atw-JobInfo-jobTitle').href
      x.title = j.querySelector('.atw-JobInfo-jobTitle').childNodes[0].nodeValue
      x.notes = 'Got Job via indeed'
      return x
  })
}
