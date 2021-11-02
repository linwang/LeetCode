function buttonClick()
{
  const values = input.value.split(';');
  let s = values[0];
  let words = values[1].split(',').map(x=>new SearchWord(x));
  let found = searchWordsInString(s, words);
  output.textContent = `${words} are ${found?'found':'not found'} in ${s}.`;
}

function SearchWord(word = '', index = -1)
{
  this.word = word;
  this.index = index;
}

SearchWord.prototype.toString = function()
{
  return `{word: ${this.word}, index: ${this.index}}`;
}

function searchWordsInString(s, words)
{
  if(!s || !words || words.length === 0) return;
  const wordL = words[0].word.length;
  const groups = (s.length/wordL)-words.length + 1;
  for(let iG = 0; iG < groups; iG++)
  {
    if(findAllWordsIn(s,iG*wordL, (iG+words.length)*wordL, words))
      return true;
  }
  return false;
}
function findAllWordsIn(s, begIndex, endIndex, words)
{
  const wordL = words[0].word.length;
  //reset found index for all words and set found count to 0 O(m)
  words.resetFoundStatus = function ()
  {
    for(let iW = 0; iW < this.length; iW++)
    {
      this[iW].index = -1;
    }
  }
  //find s in unfound words, set index if found, return found O(m)
  words.find = function(s, index)
  {
      let word = s.substr(index, wordL);
      for(let iW = 0; iW < this.length; iW++)
      {
        if((this[iW].index < 0) && (this[iW].word === word))
        {
          this[iW].index = index;
          return true;
        }
      }
      return false;
  }
  words.resetFoundStatus();
  for(let i = begIndex; i < endIndex; i+=wordL)
  {
    if(!words.find(s, i)) return false;
  }
  return true;
}
