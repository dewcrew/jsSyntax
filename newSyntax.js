function generateRandomNumber(num) {
    // Gets # from 0 -> num - 1
    return Math.floor(Math.random() * num)
  }
  
  const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }
  
  // Store the 'wisdom' in an array
  let personalWisdom = []
  
  // Iterate over the object
  for(let prop in collectiveWisdom) {
    let optionIdx = generateRandomNumber(collectiveWisdom[prop].length)
  
    // use the object's properties to customize the message being added to personalWisdom  
    switch(prop) {
      case 'signInfo':
        personalWisdom.push()
        break
      case 'fortuneOutput':
        personalWisdom.push()
        break
      case 'advice':
        personalWisdom.push()
        break
      default:
        personalWisdom.push('There is not enough info.')
    }
  }
  
  function formatWisdom(wisdom) {
    // Add some ASCII here?
    // Add in more symbols to the array? like emojies or what not?
    const formatted = personalWisdom.join('
')
    console.log(formatted)
  }
  
  formatWisdom(personalWisdom);
