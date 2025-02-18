//variable declaration
let count = 0;
function countClicks() {
  count++;
  document.getElementById('clickCountDisplay').textContent = count;
  //if statement
  if(count >= 100)
      alert(`Please stop clicking me! \n You have already clicked me ${count} times.`);
  checkMultiple(count);
}

function resetCount(){
  count = 0;
  document.getElementById('clickCountDisplay').textContent = count;
}

const checkMultiple = (count) => {
  //switch statement
  switch (true) {
    case count % 20 === 0:
      alert(`You have clicked the button ${count} times!`);
      break;
    default:
      break;
  };
}