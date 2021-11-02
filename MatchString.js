function buttonClick()
{
  const values = input.value.split(',');
  const bMatch = matchStringPattern(values[0], values[1]);
  output.textContent = `${values[1]} ${bMatch? 'matches':'does not match'} ${values[0]}`;
}
class RegExState
{
  constructor(pattern, symbol, matchIndex, matchRange)
  {
    this.name = pattern;
    this.symbol = symbol;
    this.index = matchIndex;
    this.range = matchRange
  }
  toString()
  {
    return `{name:${this.name}, symbol:${this.symbol}, index:${this.index}, range:${this.range}}; `;
  }
}

function matchStringPattern(s, p)
{
  const patterns = {matchAny:'.*', matchAnyOne:'.', matchPreceding:'*', matchChar:'',
                    parsePattern: function(p)
                    {
    let pArr = new Array(0);
    let curState;
    for(let i = 0; i < p.length; i++)
    {
      if(p.substr(i, 2) === patterns.matchAny)
      {
        curState = new RegExState(patterns.matchAny, patterns.matchAny);
        i++;
      }
      else if(p[i + 1] === patterns.matchPreceding)
      {
        curState = new RegExState(patterns.matchPreceding, p.substr(i,2));
        i++;
      }
      else if (p[i] === patterns.matchAnyOne)
      {
        curState = new RegExState(patterns.matchAnyOne, patterns.matchAnyOne);
      }
      else
      {
        curState = new RegExState(patterns.matchChar, p[i]);
      }
        pArr.push(curState);
    }
    return pArr;
  },
                    evaluateState: function(s, state)
                    {
    let range = 0;
    switch(state.name)
    {
      case patterns.matchChar:
        if(s[state.index] !== state.symbol) return false;
      case patterns.matchAnyOne:
        range = 1;
        if(range <= state.range)
        {
          state.range = range;
          return true;
        }
        return false;
        break;
      case patterns.matchAny:
        if(state.range >= 0) return true;
        return false;
        break;
      case patterns.matchPreceding:
        for(range = 0; range < state.range; range++)
        {
          if(s[state.index + range] !== state.symbol[0]) break;
        }
        if(range <= state.range)
        {
          state.range = range;
          return true;
        }
        return false;
        break;
      default:
        return true;
    }
  }};
  if(!p || !s) return false;
  const pArr = patterns.parsePattern(p);
  if(!pArr) return false;

  let pass = false;
  let iP = 0;
  pArr[iP].index = 0;
  pArr[iP].range = s.length;
  while(iP < pArr.length && iP >= 0)
  {
    pass = patterns.evaluateState(s, pArr[iP]);

    if(pass)
    {
      console.log(`${s.substr(pArr[iP].index, pArr[iP].range)} matches pattern ${pArr[iP].symbol}`);
      iP++;
      if(pArr[iP])
      {
        pArr[iP].index = pArr[iP - 1].index + pArr[iP - 1].range;
        pArr[iP].range = s.length - pArr[iP].index;
      }
    }
    else //re-evaluate the previous state with a shorter range
    {
        iP--;
        if(pArr[iP])
          pArr[iP].range--; //reduce previous allowable range
    }
  }

  console.log(pArr);

  if(iP < 0) return false;
  if((pArr[pArr.length - 1].index + pArr[pArr.length - 1].range) !== s.length) return false;

  return true;
}
