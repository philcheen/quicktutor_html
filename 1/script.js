function onShowSideBar(){
    let btn = document.getElementById("iconToggle");
    let sideBar=document.getElementById("sidemenu_webview");
    sideBar.style.display=btn.checked?"block":"none";
}