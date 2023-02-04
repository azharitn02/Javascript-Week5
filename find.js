//method to get detail personal data based on id
function find(id){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    contactList.forEach(function (value){
        if(value.id == id){
           document.getElementById('id').value = value.id
           document.getElementById('nama').value = value.nama
           document.getElementById('umur').value = value.umur
           document.getElementById('uangSangu').value = value.uangSangu
        }
    })
}