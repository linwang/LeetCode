//a trie tree has a node containing: children:{nodes} and isEnd:boolean
//insert(string): traverse through the existing tree until the current character
//diverges from the existing tree. create a new branch and store the rest of the word
//find(string): only returns true if string is a whole word in the trie tree, meaning
// the last character has isStop === true
//startsWith(string): returns true if the string is a startsWith int the trie tree
class Trie {
  constructor()
  {
    this.root = new TrieNode();
  }
  insert(str)
  {
    console.log(`insert(${str})`);
    let cur = this.root;
    const iEnd = str.length - 1;
    for(let i = 0; i <= iEnd; i++)
    {
      if(cur.children[str[i]] == null)
      {
        cur.children[str[i]] = new TrieNode();
      }
      cur = cur.children[str[i]];
    }
    cur.isEnd = true;
  }
  find(str)
  {
    console.log(`find(${str})`);
    let cur = this.root;
    const iEnd = str.length - 1;
    for(let i = 0; i <= iEnd; i++)
    {
      if(cur.children[str[i]] == null) return false;
      if(i === iEnd && cur.children[str[i]].isEnd === false)
      {
        return false;
      }
      cur = cur.children[str[i]];
    }
    return true;
  }
  startsWith(str)
  {
    console.log(`startsWith(${str})`);
    let cur = this.root;
    for(let i = 0; i < str.length; i++)
    {
      if(cur.children[str[i]] == null) return false;
      cur = cur.children[str[i]];
    }
    return true;
  }
  toString()
  {
    //outputs all the words in the Trie
    let getWords = function(root)
    {
      let chars = Object.keys(root.children);
      if(chars.length === 0) return [];
      let wOfChar = [], wAll = [];
      for(let c of chars)
      {
        wOfChar = getWords(root.children[c]);
        wOfChar = wOfChar.map((item) => c.concat(item));
        if(root.children[c].isEnd)
        {
          wOfChar.unshift(c);
        }
        wAll.push(...wOfChar);
      }
      return wAll;
    }
    return getWords(this.root);
  }


}
class TrieNode
{
  constructor()
  {
    this.children = {};
    this.isEnd = false;
  }
}
let dictionary = new Trie();
dictionary.insert('hi');
dictionary.insert('lin');
dictionary.insert('high');
console.log(dictionary.toString());
console.log(dictionary.find('hi'));
console.log(dictionary.find('a'));
console.log(dictionary.find('h'));
console.log(dictionary.find('high'))
console.log(dictionary.startsWith('hi'));
console.log(dictionary.startsWith('a'));
console.log(dictionary.startsWith('h'));
console.log(dictionary.startsWith('high'))
