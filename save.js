//method to save data into localstorage
function save(){
    //get data from localstorage and store to contaclist array
    //we must to use JSON.parse, because data as string, we need convert to array
    contactList = JSON.parse(localStorage.getItem('listItem')) ?? []

    //get last array to get last id
    //and store it into variable id
    var id
    contactList.length != 0 ? contactList.findLast((item) => id = item.id) : id = 0
    
    //alert karakter
    var textbox = document.getElementById("nama");
    if(textbox.value.length < 10){
        alert("Isikan Nama minimal 10 karakter")
        return false
    }

    //alert umur
    let x = document.getElementById("umur").value;
          if (x < 25) {
            alert("Umur minimal 25 tahun");
            return false;
          }
    
    //alert minimum maximum uang sangu
    let uang_sangu = document.getElementById("uangSangu").value;
    if(uang_sangu <100000){
        alert(`minimal uang sangu 100000 "Seratus Ribu"`)
        return false;
    }else if( uang_sangu >1000000){
        alert(`maksimal uang sangu 1000000 "Satu Juta"`)
        return false
    }
    
    
    if(document.getElementById('id').value){

        //edit contactlist array based on value
        contactList.forEach(value => {
            if(document.getElementById('id').value == value.id){
                value.nama        = document.getElementById('nama').value, 
                value.umur        = document.getElementById('umur').value, 
                value.uangSangu   = document.getElementById('uangSangu').value 
            }
            alert("Berhasil Mengubah Data")
        });

        //remove hidden input
        document.getElementById('id').value = ''

    }else{

        //save
        //get data from form
        var item = {
            id        : id + 1, 
            nama      : document.getElementById('nama').value, 
            umur       : document.getElementById('umur').value, 
            uangSangu   : document.getElementById('uangSangu').value, 
        }

        //add item data to array contactlist
        contactList.push(item)
    }
    // save array into localstorage
    localStorage.setItem('listItem', JSON.stringify(contactList))

    //update table list
    allData()

    //remove form data
    document.getElementById('form').reset()
}