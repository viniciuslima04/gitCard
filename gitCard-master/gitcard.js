const getGitHubInfo = function (username) {
    var username = document.getElementById("usuario-github").value;
    var url = 'https://api.github.com/users/' + username;

    var ajax = new XMLHttpRequest();

    ajax.onreadystatechange = function () {
        if(this.readyState == 4 && this.status == 200){
            let ajax = JSON.parse(this.responseText);
            const avatar = ajax.avatar_url;
            document.getElementById("avatar").src = avatar;
            document.getElementById("nome").innerHTML= username;
        }
    };

    ajax.open('GET', url, true);
    ajax.send();
};
