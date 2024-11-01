function changeTheme(theme){
    document.getElementById('theme').href = 'src/' + theme + '.css';

    if(document.getElementById('theme').href=='src/styles.css'){
        document.getElementById('icon').href = 'src/images/CCS_logo.png';
    }

    else if (theme == "egoist") {
        document.getElementById('icon').href = 'src/images/egoistTheme/bluelock_logo.png';
    } 
        
    else if(theme == "space"){
        document.getElementById('icon').href = 'src/images/CCS_logo.png';

    }

    else if(theme == "beach"){
        document.getElementById('icon').href = 'src/images/CCS_logo.png';

    }

    else if(theme == "manga"){
        document.getElementById('icon').href = 'src/images/mangaTheme/CCS_logo.png';

    }

    else if(theme == "silliman"){
        document.getElementById('icon').href = 'src/images/SU_logo.png';
    }
    
    else {
        document.getElementById('icon').href = 'src/images/CCS_logo.png';
    }
}

function homeChangePic(theme){
    if(theme == "manga"){
        document.getElementById('lanyard').src = 'src/images/mangaTheme/lanyard_announcement.png';
        document.getElementById('tryout').src = 'src/images/mangaTheme/tryout_announcement.png';
        document.getElementById('teacher').src = 'src/images/mangaTheme/teachers_day.png';
        document.getElementById('logo').src = 'src/images/mangaTheme/CCS_Logo.png';
        document.getElementById('icon').href = 'src/images/mangaTheme/CCS_logo.png';
    }

    else if(theme == "egoist"){
        document.getElementById('logo').src = 'src/images/egoistTheme/bluelock_logo.png';
        document.getElementById('lanyard').src = 'src/images/lanyard_announcement.png';
        document.getElementById('tryout').src = 'src/images/tryout_announcement.png';
        document.getElementById('teacher').src = 'src/images/teachers_day.png';
        document.getElementById('icon').href = 'src/images/egoistTheme/bluelock_logo.png';
    }

    else if(theme == "silliman"){
        document.getElementById('logo').src = 'src/images/SU_logo.png';
        document.getElementById('icon').href = 'src/images/SU_logo.png';
        document.getElementById('lanyard').src = 'src/images/lanyard_announcement.png';
        document.getElementById('tryout').src = 'src/images/tryout_announcement.png';
        document.getElementById('teacher').src = 'src/images/teachers_day.png';
    }

    else{
        document.getElementById('logo').src = 'src/images/CCS_Logo.png';
        document.getElementById('icon').href = 'src/images/CCS_logo.png';
        document.getElementById('lanyard').src = 'src/images/lanyard_announcement.png';
        document.getElementById('tryout').src = 'src/images/tryout_announcement.png';
        document.getElementById('teacher').src = 'src/images/teachers_day.png';
        
    }
}

function changeMyFace(theme){
    if (theme == "egoist") {
        document.getElementById('myface').src = 'src/images/egoistTheme/playercard.png';
    } 
        
    else if(theme == "space"){
        document.getElementById('myface').src = 'src/images/spaceTheme/myface.png';

    }

    else if(theme == "beach"){
        document.getElementById('myface').src = 'src/images/beachTheme/myface.png';

    }

    else if(theme == "manga"){
        document.getElementById('myface').src = 'src/images/mangaTheme/myface.png';

    }

    else if(theme == "silliman"){
        document.getElementById('myface').src = 'src/images/myface.png';
    }
    
    else {
        document.getElementById('myface').src = 'src/images/myface.png';
    }
}

function homeTheme(theme){
    changeTheme(theme);
    homeChangePic(theme);
}

function devTheme(theme){
    changeTheme(theme);
    changeMyFace(theme);
}

function appear(){
    document.getElementById('button-dev').style.display="block";
    document.getElementById('span-dev').style.display="inline";
    document.getElementById('button-dev2').style.display="none";
}









