function generate_trashTalk(job) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    founder: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  const phraseIndex = Math.floor(Math.random() * phrase.length)
  const taskIndex = Math.floor(Math.random() * task[job].length)
  let trashTalk = ''

  trashTalk += `身為一個${job}${task[job][taskIndex]}，${phrase[phraseIndex]}吧！`
  return trashTalk
}

function select_character(job) {
  const characters = {
    engineer: false,
    designer: false,
    founder: false,
  }
  characters[job] = true
  return characters
}

module.exports = { generate_trashTalk, select_character }
