//input: string path, an absolute path (starting with a '/'); path is in english
//output: the simplified canonical path
// . = current directory
// .. = directy up a level
// ... = treated as file or directory name
// // = consective slashes are treated as a single slash '/'
// ending /= removed
//level: starts at 0, can go down and up
    //a/b or ./, goes down a level; a/b/.., goes up a evel;
// paths not needed to reach final directory is removed. i.e. /a/../b;
   //level 0->1->0->1 becomes /b
// canonical path = starts with '/', any two directories are separated with '/',
//  path does no end with a trailing '/', only contains the directories on the
//  path from the root directory to the target file or directory
function getCanonicalPath(absolute)
{
  //go through each substr in absolute, divided by '/', simplify substring and add
  //to canonical
  //level starts at 0, wheneven level hits 0, reset existing canonical
  let directories = absolute.split('/');
  console.log(`path: ${directories}`);
  let canonical = [];
  for(let i = 0; i < directories.length; i++)
  {
    if((directories[i].length > 0) && (directories[i] !== '.'))
    {
      if(directories[i] === '..')
      {
        canonical.pop();
      }
      else
      {
        canonical.push(directories[i]);
      }

      console.log(`canonical at iteration ${i} is ${canonical}`);
    }
  }

  return `/${canonical.join('/')}`;
}

console.log(getCanonicalPath('/a/./b/../../c/'))
