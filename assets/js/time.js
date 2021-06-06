window.onload = function() {
    setInterval(getTime, 1000);
};

function getTime(){
  
	let date = new Date();

	let hours    = date.getHours();
	let seconds  = date.getSeconds();
	let minutes  = date.getMinutes();
	
	let dateString = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds;

	document.querySelector('#time').innerHTML = dateString;
			
};

function dayToday(){
    let date = new Date ();


    
    var week = new Array();
    week[0] = "Domingo";
    week[1] = "Lunes";
    week[2] = "Martes";
    week[3] = "Miércoles";
    week[4] = "Jueves";
    week[5] = "Viernes";
    week[6] = "Sábado";
    var returnDate = week[date.getDay()];


    var month = new Array();
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";
    var returnMonth = month[date.getMonth()];

    var returnDay = date.getDate();


    let todayString = 'Hoy es ' + returnDate + ' ' + returnDay + ' de ' + returnMonth;
    document.querySelector('#today').innerHTML = todayString;

};

dayToday()


function bgChange(){
let date = new Date;
let hour = date.getHours();

if (hour >= 20 || hour <= 5) {
    document.querySelector('#bg').innerHTML = '<img src="assets/gif/nightime.gif" alt=""></img>';
} else if (hour >= 6 && hour <= 14) {
    document.querySelector('#bg').innerHTML = '<img src="assets/gif/daytime.gif" alt=""></img>';
} else if (hour >= 15 && hour <= 19) {
    document.querySelector('#bg').innerHTML = '<img src="assets/gif/evening.gif" alt=""></img>';
};


};

bgChange()



