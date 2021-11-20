//input: an instructions string
//output: true if and only if there exists a circle in the plane such that the
//robot never leaves the circle
//instructions:
//G: go straight for 1 block
//L: turn left 90
//R: turn right 90
//Robot starts @ position [0,0] direction 'north'
//Robot is on an infinite plane
//Robot repeats an order forever

//Thoughts:
//If just G, then robot will go in that direction indefinitely; false
//If just L or R, then robot will stay in the same spot and keep turning; true
//False if robot after executing the instructions repetitively, it keeps going and moving towards one direction
//True if the robot after several rounds of the instructions, return to the same location and direction?
//How many repetitions is enough to verify that? There are only four directions, so is four enough?
//After each iteration, the robot's direction and position should change.

function isRobotBounded(instructions)
{
  if(instructions == null || instructions.length === 0)
  {
    return true;
  }
  const directions = {north:"north", south:"south", east:"east", west:"west"};
  const begPos = [0,0], begDirection = directions.north;
  const forwards = {north:(pos)=>pos[1]++, east:(pos)=>pos[0]++,
    south:(pos)=>pos[1]--, west:(pos)=>pos[0]--};
  const lTurns = {north:"west", east:"north", south:"east", west:"south"};
  const rTurns = {north:"east", east:"south", south:"west", west:"north"};
  const processInstructions = {
  G:(pos,dir)=>{pos = forwards[dir](pos);return {pos: pos, dir:dir}},
  L:(pos, dir) => {return {pos:pos, dir:lTurns[dir]}},
  R:(pos, dir) => {return {pos:pos, dir:rTurns[dir]}}};

  let pos = begPos, dir = begDirection;
  for(let instruction of instructions)
  {
    const callBack = processInstructions[instruction];
    if(callBack == null)
    {
      console.log(`unknown instruction = ${instruction}`);
      return null;
    }
    ({pos, dir} = callBack(pos, dir));


  }
  if(pos === begPos)
  {
    return true;
  }
  if(dir !== begDirection)
  {
    return true;
  }
  return false;
}

console.log(isRobotBounded("G"));
console.log(isRobotBounded("L"));
console.log(isRobotBounded("R"));

console.log(isRobotBounded("GT"));
console.log(isRobotBounded(""));
console.log(isRobotBounded(null));

console.log(isRobotBounded("GLGR"));
console.log(isRobotBounded("GLLG"));
console.log(isRobotBounded("GRRRG"));
