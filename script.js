const text = document.querySelector(".inputbox input");
const button = document.querySelector(".inputbox button");

button.addEventListener("click", () => {
//   if (text.value.length == 0) {
  if (text.value== 0) {
    alert("No value!");
  } else {
    document.querySelector("#main_content").innerHTML += `
         <div id="maincontent">
         <div   class="content_box">
         <span class="line_through">${text.value}</span>
          <button class="delet_button ">DELET</button>

         </div>
         </div>
         `;

    const delet = document.querySelectorAll(".delet_button");
    const main = document.querySelectorAll("#maincontent");
    const line_th = document.querySelectorAll(".line_through");

    delet.forEach((button, index) => {
      button.addEventListener("click", () => {
      //   console.log(button, index);
        main[index].classList.add("remove_content");

      });  
      
      line_th[index].addEventListener("click", () => {
      //   console.log(content, index);
        line_th[index].classList.toggle("line_add");
        
      });
    });
  }
  document.querySelector(".inputbox input").value = "   ";
});
