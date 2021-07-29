const new_window_button = document.getElementById("new-window");
const first_window = window;

new_window_button.addEventListener('click',function (e) {
    var myWindow = window.open("window.html","MsgWindow", "top=100,left=250,width=800,height=500");
    const button = myWindow.document.getElementById("button");
    console.log(button);
    button.addEventListener('click',function(e){
        this.alert(
            "Button Clicked!"
        )
        this.window.close();
        location.href="redirected.html";
        first_window.location.href="redirected.html";
        myWindow.close();
    })
});