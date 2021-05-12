let a = document.getElementById('name');
a.addEventListener('click', () => {
  if(a.checked){
    console.log('checked');
  }else if(!a.checked){
    console.log('unchecked');
  }  
})
