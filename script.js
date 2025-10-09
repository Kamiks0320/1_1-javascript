//Cw1
function sleep(ms)
{
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countToNine()
{
  document.getElementById("ex1_content").textContent = "";
  document.getElementById("ex1_content").style.color = 'black';

  for(var i = 0; i < 10; i++)
  {
    await sleep(1000);

    if(i == 9) 
      {
        document.getElementById("ex1_content").textContent += `${i}`;
        document.getElementById("ex1_content").style.color = 'green';
      }
    else document.getElementById("ex1_content").textContent += `${i}, `;
  }
}