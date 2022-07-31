function validAndSave(){
    var street = document.getElementById("street").value;
    var landmark = document.getElementById("landmark").value;
    var city = document.getElementById("city").value;
    var pincode = document.getElementById("pincode").value;

                if(street.length == 0){
                    alert("Street is mandatary...");
                }

                if(city.length == 0){
                    alert("City is mandatary...");
                }

                if(pincode.length == 0){
                    alert("Pincode is mandatary...");
                }

                var regex = /^[0-9]{6}$/
                if(pincode.length != 6 || !regex.test(pincode)){
                    console.log("Invalid PineCode...");
                }

                var addressObj = {
                    "street" : street,
                    "landmark" : landmark,
                    "city" : city,
                    "pincode" : pincode
                }

                console.log(addressObj);

                var addressList = [];

                addressList = JSON.parse(localStorage.getItem("addresslist"));

                console.log(addressList);

                if(addressList == null){
                    addressList = [];
                }
                
                addressList.push(addressObj)
               
                localStorage.setItem("addresslist", JSON.stringify(addressList));
            }

            function insertNewRow(){
                var table = document.getElementById("listOfHomeAddress");
                
                var addressList = [];

                addressList = JSON.parse(localStorage.getItem("addresslist"));

                console.log(addressList);

                addressList.forEach(element => {
                    var row = table.insertRow(1);
                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    cell1.innerHTML = element.street;
                    cell2.innerHTML = element.landmark;
                    cell3.innerHTML = element.city;
                    cell4.innerHTML = element.pincode;
                    cell5.innerHTML = '<input type="button" value="Edit">';
                    cell6.innerHTML = '<input type="button" value="Delete">';
                });
                
            }