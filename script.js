//kod zawiera pare dodatkow niewymienionych w poleceniu w celu przecwiczenia java-scripta.
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


//Cw2
const input = document.getElementById("ex2_text");
const output = document.getElementById("ex2_content");

input.addEventListener("input", (event) =>
{
  if(input.value.length != 9) output.textContent = "Długość numeru musi być równa 9";
  if(input.value.length == 0) output.textContent = "";
  if(input.value.length == 9) output.textContent = "Numer telefonu jest poprawny.";
  
  const a = input.value;
  if(/[A-Za-z]/.test(a)) output.textContent = "Numer nie może zawierać liter";
  if(/[^A-Za-z0-9]/.test(a)) output.textContent = "Numer nie może zawierać znaków specjalnych";
})


//Cw3
function dragstartHandler(ev)
{
  ev.dataTransfer.setData("text", ev.target.id)
}

function dragoverHandler(ev)
{
  ev.preventDefault();
}

function dropHandler(ev)
{
  ev.preventDefault();
  const data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}