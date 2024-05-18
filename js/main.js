var nameSite=document.getElementById("name");
var urlSite=document.getElementById("url")
var urlList=[];
function validUrl() {
    var x=document.getElementById("test")
    var pattern = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/[a-zA-Z0-9#]*)*$/;
    

    if(!pattern.test(urlSite.value)) {
        if(urlSite.classList.contains("is-valid")){
            urlSite.classList.replace("is-valid","is-invalid")
        }
       else{
        urlSite.classList.add("is-invalid")
       }
         x.setAttribute("data-bs-target","#exampleModal")
              x.setAttribute("data-bs-toggle","modal")
          
    }
    
     else{
        urlSite.classList.replace("is-invalid","is-valid")
        
        if(nameSite.classList.contains("is-valid")){
                     x.removeAttribute("data-bs-target")
                     x.removeAttribute("data-bs-toggle")
               
        }
      
        
     }
     
    

  }

  function validName(){
    var x=document.getElementById("test")
    var pattern = /^[a-zA-Z]{3,}$/;
    console.log(pattern.test(nameSite.value));
    if(!pattern.test(nameSite.value)){
        if(nameSite.classList.contains("is-valid")){
            nameSite.classList.replace("is-valid","is-invalid")
        }
       else{
        nameSite.classList.add("is-invalid")
       }
        x.setAttribute("data-bs-target","#exampleModal")
             x.setAttribute("data-bs-toggle","modal")
             
       }
       else{
        nameSite.classList.replace("is-invalid","is-valid")
       console.log("yes");
        if(urlSite.classList.contains("is-valid")){
                     x.removeAttribute("data-bs-target")
                     x.removeAttribute("data-bs-toggle")
            
        }
       
       }
   

}

if (localStorage.getItem("Links")) {
    urlList = JSON.parse(localStorage.getItem("Links"))
     displayLink()
}

function addlink(){
    var linkcomp={
        namevalue:nameSite.value,
        urlvalue:urlSite.value
    }
   
    if(nameSite.classList.contains("is-valid")&&urlSite.classList.contains("is-valid")){
    
        urlList.push(linkcomp)
        localStorage.setItem("Links", JSON.stringify(urlList))
        displayLink()
    }
   
     
}


function displayLink(){
    var temp="";
    for(var start=0;start<urlList.length;start++){
        temp+=` <tr>
        <td>`+start+`</td>
        <td  >`+urlList[start].namevalue+`</td>
        <td>
     <a href="`+urlList[start].urlvalue+`" target="_blank">
      <button class="btn btn-green">
        <i class="fa-solid fa-eye pe-1"></i>
        Visit
      </button>
     </a>
        </td>
        <td><button onclick="deleteLink(`+start+`)" class="btn btn-danger">
          <i class="fa-solid fa-trash-can pe-1"></i>
          Delete</button></td>
    </tr> `
    }
    document.getElementById("myRow").innerHTML = temp
}
function deleteLink(inde){
    
    urlList.splice(inde,1)
    localStorage.setItem("Links", JSON.stringify(urlList))
    displayLink()
}