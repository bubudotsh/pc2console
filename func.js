function read_data_json() {

    try{ 
        var request = new XMLHttpRequest();
        request.open("GET", "./games.json", false);
        request.send(null)
        var my_JSON_object = JSON.parse(request.responseText);
        document.write(my_JSON_object.g2);   
    }catch(e){
        document.write("data error");
    }
}

read_data_json();