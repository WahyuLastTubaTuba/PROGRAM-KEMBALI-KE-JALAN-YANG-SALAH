function num (i){
    document.form.view.value = document.form.view.value + i;
}
function num clear(){
    const i = document.form.view.value;
    if (i == ""){
        alert("sok isian");
    }
}