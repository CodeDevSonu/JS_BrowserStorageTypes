$(document).ready(function () {
    head = 0;
    $.fn.colorRows = function () {
        let cookieArray = document.cookie.split(";");
        let dataObj = [];
        for (let elem of cookieArray) {
            let [key, value] = elem.split("=");
            dataObj.push([key, value]);
        }
       

        if (document.cookie=="") {
           
            $(".needs-validation").css("background-color","");
        }
        else {
             (dataObj[dataObj.length - 1][1])
            $("form").css("background-color", dataObj[dataObj.length - 1][1]);
            
        }
        for (let elem of dataObj) {
            $("#" + elem[0].trim()).css("background-color", `${elem[1]}`);
        }
       

    };
    $.fn.tableSort = function () {

        var table, rows, switching, i, x, y, shouldSwitch;
        table = document.getElementById("dvTable");
        switching = true;
        while (switching) {
            switching = false;
            rows = table.rows;
            for (i = 1; i < (rows.length - 1); i++) {
                shouldSwitch = false;
                x = rows[i].getElementsByTagName("TH")[0];
                y = rows[i + 1].getElementsByTagName("TH")[0];
                if (Number(x.innerHTML) > Number(y.innerHTML)) {

                    shouldSwitch = true;
                    break;
                }
            }
            if (shouldSwitch) {
                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                switching = true;
            }
        }
    }
    $.fn.displayTable = function () {
        keys = Object.keys(localStorage)
        if (keys.length == 0 && head == 1) {
            $("#headrow").remove();          
            head = 0;
        }
        if ((keys.length != 0) && (head == 0)) {
            head = 1;
            $('#dvTable thead').append(` <tr id="headrow" }">
                    <th class="row-index border p-1 text-center">
                No
                 </th>
                 <th class="row-index border p-1 text-center">
                name
                 </th>
                  <th class="row-index border p-1 text-center">
               Mobile
                 </th>
  <th class="row-index border p-1 text-center">
               email
                 </th>
       <th class="row-index border p-1 text-center">
               Collname
                 </th>
       <th class="row-index border p-1 text-center">
                branchName
                 </th>
       <th class="row-index border p-1 text-center">
                CGPA
                 </th>
       <th class="row-index border p-1 text-center">
               state
                 </th>
       <th class="row-index border p-1 text-center">
               city
                 </th>
       <th class="row-index border p-1 text-center">
               zip
                 </th>
       <th class="row-index border p-1 text-center">
              date
                 </th>
        <th class="row-index border p-1 text-center">
              Remove
                 </th>
         <th class="row-index border p-1 text-center">
              Edit
                 </th>

                  </tr>`);
        }
        var keyName = [
            "id", "name", 'mobile', 'email', 'collname', 'branchName', 'CGPA', 'state', 'city', 'zip', 'date'
        ];
        for (let keyval of keys) {
             (keyval)
            var objval = JSON.parse(localStorage.getItem(keyval));
            var row = document.createElement("tr");
            row.id = keyval;
            for (var j = 0; j < keyName.length; j++) {
                if (j == 0) {
                    var cell = document.createElement("th");
                    cell.className = "border p-1";
                    var cellText = document.createTextNode(keyval);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
                else {
                    var cell = document.createElement("td");
                    cell.className = "border p-1";
                    var cellText = document.createTextNode(objval[keyName[j]]);
                    cell.appendChild(cellText);
                    row.appendChild(cell);
                }
            }
            var cell = document.createElement("td");

            var button = document.createElement('button');
            button.type = 'button';
            button.innerHTML = 'Delete';
            button.className = 'btn btn-danger remove';


            cell.appendChild(button);
            row.appendChild(cell);

            var cell = document.createElement("td");

            var button = document.createElement('button');
            button.type = 'button';
            button.innerHTML = 'Edit';
            button.className = 'btn btn-warning edit';


            cell.appendChild(button);
            row.appendChild(cell);
            tbody.appendChild(row);



        }
        $.fn.colorRows();
        $.fn.tableSort();
    }
    $.fn.displayTable();
    $.fn.tableSort();
   
    $.fn.colorRows();
    $.fn.formcolor = function () {

        var cookies = $.cookie();

        for (var cookie in cookies) {

        }
        (cookies)
        if (cookies.length == 0) {
            $('.needs-validation').css("background-color", "");
        }
        else {
            $('.needs-validation').css("background-color", $.cookie(cookie));
        }
    }
    $.fn.formcolor()
    // on state click function
    $('#state').change(function () {
        var selectedText = $(this).find("option:selected").text();
        var selectedValue = $(this).val();
        switch (selectedValue) {
            case 'Gujarat':
                names = ["Rajkot", "Ahmadabad", "Jamnagar", "Surat", "Morbi", "gondal", "Junagadh", "upleta"];
                vals = ["Rajkot", "Ahmadabad", "Jamnagar", "Surat", "Morbi", "gondal", "Junagadh", "upleta"];
                AddtoCityDrop(names, vals);
                break;
            case 'Mp':
                names = ["Indore", "Jabalpur", "Sagar", "Mulund", "katni", "vidisha", "Ujjain", "Sehore"];
                vals = ["Indore", "Jabalpur", "Sagar", "Mulund", "katni", "vidisha", "Ujjain", "Sehore"];
                AddtoCityDrop(names, vals);
                break;
            case 'UP':
                names = ["Lucknow", "kanpur", "Noida", "varanasi", "Firozabad", "rampur", "Agra", "sultanpur"];
                vals = ["Lucknow", "kanpur", "Noida", "varanasi", "Firozabad", "rampur", "Agra", "sultanpur"];
                AddtoCityDrop(names, vals);
                break;

            case 'Bihar':

                names = ["Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Arrah", "Danapur", "Siwan", "Patna"];
                vals = ["Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Arrah", "Danapur", "Siwan", "Patna"];
                AddtoCityDrop(names, vals);
                break;
            default:
                names = [];
                vals = [];
                AddtoCityDrop(names, vals);
                break;
        }
    });

    // add data in city dropdown
    function AddtoCityDrop(cityName, cityValue) {

        add_city = "<option selected value='' > Select City ...</option>";
        for (let i = 0; i < cityName.length; i++) {

            add_city = add_city + "<option value='" + cityValue[i] + "'>" + cityName[i] + "</option>";

        }


        $('#city').html(add_city);

    }

    $('#state').select2();
    $('#city').select2();

    //Export file
    $("#printbtn2").click(function () {
        $("#dvTable").table2excel({
            name: "Worksheet Name",
            filename: "XlFile", 
            fileext: ".xls" 
        });
    });

    //date range picker
    $(function () {
        $('input[name="datefilter"]').daterangepicker({
            autoUpdateInput: false,
            locale: {
                cancelLabel: 'Clear'
            }
        });

        $('input[name="datefilter"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
        });

        $('input[name="datefilter"]').on('cancel.daterangepicker', function (ev, picker) {
            $(this).val('');
        });
    });

    var storegeIndex = 0;
    var rowIdx = 0;


    editCall = 0;
    varEditrow = 0;

    // bootstrap validation 
    (function () {
        'use strict';
        window.addEventListener('load', function () {

            var forms = document.getElementsByClassName('needs-validation');
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function (form) {
                form.addEventListener('submit', function (event) {
                    if (form.checkValidity() === false) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');
                    if (form.checkValidity()) {
                        event.preventDefault();
                        event.stopPropagation();
                        $.fn.StorelocalStorage();
                        $.fn.tableSort();
                      /*  $.fn.addCookie();*/
                        $.fn.colorRows();
                        $('#btnExport').attr("disabled", false)

                    }
                }, false);
            });
        }, false);
    })();



    $.fn.StorelocalStorage = function () {
        keys = Object.keys(localStorage)
        i = keys.length;


        var name = $('#name').val()
        var mobile = $('#mobile').val()
        var Collname = $('#Collname').val()
        var email = $('#email').val()
        var branchName = $('#branchName').val()
        var CGPA = $('#CGPA').val()
        var state = $('#state').val()
        var city = $('#city').val()
        var zip = $('#zip').val()
        var date = $('#date').val()
        var color = $('#colorName').val()

        var valueObject = {
            name: name,
            mobile: mobile,
            collname: Collname,
            email: email,
            branchName: branchName,
            CGPA: CGPA,
            state: state,
            city: city,
            zip: zip,
            date: date
        };
        (valueObject.name)



        if ($("#dvTable tr").length > 1) {
            $("#dvTable tbody").empty();
        }



        if (keys.length != 0) {
            i = Math.max(...keys);
        }
        if (editCall != 0) {
            $(`#${varEditrow}`).remove();
            localStorage.setItem(varEditrow, JSON.stringify(valueObject));
            document.cookie = varEditrow + "=" + color;
            
            editCall = 0;
            $("#btnGenerate").html("Add Row");
        }
        else {
            localStorage.setItem(++i, JSON.stringify(valueObject));
            document.cookie = i + "=" + color;
            editCall = 0;
            $("#btnGenerate").html("Add Row");
        }

        $.fn.displayTable();
        storegeIndex++
    }

    //$.fn.addCookie = function () {
    //    var value = $('#colorName').val()
    //    $.cookie(rowIdx - 1, value);
    //    var CookieValue = $.cookie(`${rowIdx - 1}`)
    //    $('.needs-validation').css("background-color", CookieValue);
    //    //(`${rowIdx}`);
    //    //var CookieValue = $.cookie(`${varEditrow}`)
    //    //($(`#${rowIdx} tr`))
    //    //$(`#${rowIdx} tr`).css("background-color", CookieValue)
    //    /* $(`${rowIdx}`).css("background-color", CookieValue);*/
    //}

    $('#btnReset').click(function () {
       
        var cookies = $.cookie();
       
        for (var cookie in cookies) {

            $.removeCookie(cookie);
        }

        $('.needs-validation').css("background-color", "");
        if ($("#dvTable tr").length > 1) {
            $("#dvTable tbody").empty();
        }
        $.fn.displayTable();
        $.fn.tableSort();

    });

    $('#dvTable').on('click', '.remove', function () {
        const id = $(this).parents("tr").attr("id");
        var cookies = $.cookie();
        
        for (var cookie in cookies) {
            if (cookie == id) {
               
                $.removeCookie(cookie);
            }
           
          
        }
       
       

       
        localStorage.removeItem($(this).parents("tr").attr("id"));
        $(`#${id}`).remove();
      
        


        if ($("#dvTable tr").length > 1) {
            $("#dvTable tbody").empty();
        }
        $.fn.displayTable();
        $.fn.tableSort();
        $.fn.formcolor();
        $.fn.colorRows();
    });


    $("#dvTable").on("click", ".edit", function () {
        editCall = 1;

        const id = $(this).parents("tr").attr("id");
        varEditrow = id;
        editCall = id;

        let Arrayval = [];
        $("form input, select").each(function (index, el) {
            Arrayval.push($(this).attr("id"));
        });




        let aIndex = 0;

        $(`#${id} td`).each(function (index, el) {

            if (aIndex == 6) {
                var st = $(this).text();
                $('#state').val(st).change();
                $(`#${Arrayval[aIndex]} selected option`).attr("value", ($(this).text()));
                $(`#select2-state-container`).attr("title", $(this).text());
                $("#select2-state-container").text(st);
                aIndex++;
            }
            else if (aIndex == 7) {

                var ct = $(this).text();
                $('#city').val(ct)
                $(`#${Arrayval[aIndex]} selected option`).attr("value", ($(this).text()));
                $(`#select2-city-container`).attr("title", $(this).text());
                $("#select2-city-container").text($(this).text());
                aIndex++;
            }
            else {
                $(`#${Arrayval[aIndex]}`).val($(this).text());
                aIndex++;
            }


            $("#btnGenerate").html("Save Row");

        });
    });
});

