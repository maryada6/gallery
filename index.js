setTimeout(()=>{
    document.querySelector(".progress").style.display="none";
  },2000)

  document.querySelectorAll("nav>ul>a").forEach(item=>{
    item.addEventListener("click",()=>{
      document.querySelector(".progress").style.display="block";
      setTimeout(()=>{
    document.querySelector(".progress").style.display="none";
     },1000)

    })
  })