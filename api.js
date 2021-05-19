let status;
fetch('https://api.stackexchange.com/2.0/questions?page=1&pagesize=30&key=VVq3kJHSjQ*7qgpiRaVoLA%28%28&site=stackoverflow')
        .then((res) => {


            return res.json()
        })
        .then((jsonData) => {
            console.log(jsonData.items);
            var newData = jsonData.items;
            newData.forEach(function (entry) {

                userid = entry.owner.user_id;
                reputation = entry.owner.reputation;
                profile_image = entry.owner.profile_image;
                display_name = entry.owner.display_name;
                var display_data = 'userid:='+userid+', '+'Reputation :'+reputation+', '+'profile_image  :'+profile_image +', '+'display_name :'+display_name  + '<br/><br/>';
            console.log(display_data);
           $('#stack').append(display_data);
            });
        })
        .catch((err) => {
            // handle error
            console.error(err);
        });