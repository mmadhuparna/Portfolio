var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
            //Reading the JSON file
            var pro = JSON.parse(this.responseText);
            //Creating the data for the respective id's
            document.querySelector("#name").innerHTML = pro.name;
            document.querySelector("#designation").innerHTML = pro.designation;
            document.querySelector("#profile").innerHTML = pro.profile;
            document.querySelector("#personality").innerHTML = pro.persona1 + "<br>" + pro.persona2 + "<br>"+pro.persona3 +"<br>"+ pro.persona4;
            document.querySelector("#address").innerHTML = pro.address + "<br>"+ pro.city +"<br>"+ pro.country;
            document.querySelector("#phone").innerHTML = pro.phone;
            document.querySelector("#email").innerHTML = pro.email;
            document.querySelector("#objective").innerHTML = pro.objective;
            document.querySelector("#education1").innerHTML = pro.education1 + "<br>" +pro.university1 + "<br>" + pro.class1;
            document.querySelector("#education2").innerHTML = pro.education2 + "<br>" +pro.university2 + "<br>" + pro.class2;
            document.querySelector("#education3").innerHTML = pro.education3 + "<br>" +pro.university3 + "<br>" + pro.class3;
            document.querySelector("#job1").innerHTML = pro.job1;
            document.querySelector("#designation1").innerHTML = pro.designation1 +"<br>"+ pro.duration1;
            document.querySelector("#jobdesc1").innerHTML = pro.job1desc1;
            document.querySelector("#jobdesc2").innerHTML = pro.job1desc2;
            document.querySelector("#jobdesc3").innerHTML = pro.job1desc3;
            document.querySelector("#jobdesc4").innerHTML = pro.job1desc4;
            document.querySelector("#job2").innerHTML = pro.job2;
            document.querySelector("#designation2").innerHTML = pro.designation2 +"<br>"+ pro.duration2;
            document.querySelector("#jobdesc5").innerHTML = pro.job2desc1;
            document.querySelector("#jobdesc6").innerHTML = pro.job2desc2;
            document.querySelector("#jobdesc7").innerHTML = pro.job2desc3;
            document.querySelector("#jobdesc8").innerHTML = pro.job2desc4;
         }
    };
    //fetching the data.jason file
    xmlhttp.open("GET", "data.json", true);
    xmlhttp.send();
