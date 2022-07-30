function addNewWE()
{
    console.log("Check addnew")
   let newnode=document.createElement("textarea")
   newnode.classList.add('form-control')
   newnode.classList.add('weFieldadd')
   newnode.classList.add('mt-2')
   newnode.setAttribute("rows",3)
   newnode.setAttribute("placeHolder","Enter Here")
   let weform=document.getElementById("weformfield")
   let weaddbt=document.getElementById("weaddbtn")
   weform.insertBefore(newnode,weaddbt)
}
function addNewED()
{
    console.log("Check addnew")
   let newnode=document.createElement("textarea")
   newnode.classList.add('form-control')
   newnode.classList.add('edFieldadd')
   newnode.classList.add('mt-2')
   newnode.setAttribute("rows",3)
   newnode.setAttribute("placeHolder","Enter Here")
   let edform=document.getElementById("edformfield")
   let edaddbt=document.getElementById("edaddbtn")
   edform.insertBefore(newnode,edaddbt)
}
function generatecv(){
    console.log("cv generating ")
    let name=document.getElementById("nameField").value;
    let namet=document.getElementById("nametemplate")
    namet.innerHTML=name
    let namet2=document.getElementById("bignametemplate")
    namet2.innerHTML=name
    let contact=document.getElementById("contactField").value;
    let contactt=document.getElementById("contacttemplate")
    contactt.innerHTML=contact
    let address=document.getElementById("addressField").value;
    let addresst=document.getElementById("addresstemplate")
    addresst.innerHTML=address
    let Linkedinurl=document.getElementById("LinkedinField").value;
    let linkedinurlt=document.getElementById("linkedintemplate")
    linkedinurlt.setAttribute("href",Linkedinurl)
     linkedinurlt.innerHTML=Linkedinurl
     let GithubFields=document.getElementById("GithubField").value;
    let githubtemlpates=document.getElementById("githubtemplate")
    githubtemlpates.setAttribute("href",GithubFields)
    githubtemlpates.innerHTML=GithubFields
    let Obj=document.getElementById("objectiveField").value;
    let Objt=document.getElementById("objectivetemplate")
    Objt.innerHTML=Obj
    let purl=document.getElementById("photofield").value;
    let purlt=document.getElementById("phototemplate")
    purlt.setAttribute("src",purl)
    



    let wes=document.getElementsByClassName('weFieldadd')
    let str=""
    for(let e of wes)
    {
        str=str+`<li> ${e.value}</li>`
    }
    document.getElementById('wetemplate').innerHTML=str
    let eds=document.getElementsByClassName('edFieldadd')
    let str1=""
    for(let e of eds)
    {
        str1=str1+`<li> ${e.value}</li>`
    }
    document.getElementById('edtemplate').innerHTML=str1
    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}
function printresume()
{
    document.getElementById('printbtn').style.display='none'
    window.print()
}

