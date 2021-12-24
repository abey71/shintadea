$('#login-button').click(function (event) {
	var userName=document.getElementById("userName").value.toLowerCase();
		//check
    if(userName=="shinta" || userName=="Shinta"){
			event.preventDefault();
			$('form').fadeOut(500);
			$('.wrapper').addClass('form-success');
			setTimeout(function(){location.href="BirthdayCake.html";},2000);
	}else{
		alert("Nama yang dimasukinnya salah ya cantik :)");
	}
});
