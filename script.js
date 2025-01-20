let button = document.getElementById("button");
let all1 = document.getElementById("all1");
let solar = document.getElementById("solar");
let solar_year = document.getElementById("solar1-2");
let solar_month = document.getElementById("solar2-2");
let solar_dtae = document.getElementById("solar3-2");
let solar_day = document.getElementById("solar4-2");
let year = document.getElementById("box1-2");
let month = document.getElementById("box2-2");
let date = document.getElementById("box3-2");
let day = document.getElementById("box4-2");
let h21 = document.getElementById("solary");
let h22 = document.getElementById("AD");
let hours = document.getElementById("hours");
let showHoues = document.getElementById("showHours");
let time = new Date();



function showDate()
{
    all1.style.display = "flex";
    solar.style.display = "flex";
    h21.style.display = "inline";
    h22.style.display = "inline";
    hours.style.display = "flex";
    showHoues.style.display = "flex";


    year.innerHTML = time.getFullYear();
    switch (time.getMonth())
{
    case 0 :
            month.innerHTML = "January";
            break ;
    case 1 :
            month.innerHTML = "February";
            break ;
    case 2 :
            month.innerHTML = "March";
            break ;
    case 3 :
            month.innerHTML = "April";
            break ;
    case 4 :
            month.innerHTML = "May";
            break ;
    case 5 :
            month.innerHTML = "June";
            break ;
    case 6 :
            month.innerHTML = "July";
            break ;
    case 7 :
            month.innerHTML = "August";
            break ;
    case 8 :
            month.innerHTML = "September";
            break ;
    case 9 :
            month.innerHTML = "October";
            break ;
    case 10 :
            month.innerHTML = "November";
            break ;
    case 11 :
            month.innerHTML = "December";
            break ;
}

switch (time.getDay())
{
    case 0 :
        day.innerHTML = "Sunday";
        break;
    case 1 :
        day.innerHTML = "Monday";
        break;
    case 2 :
        day.innerHTML = "Tuesday";
        break;
    case 3 :
        day.innerHTML = "Wednesday";
        break;
    case 4 :
        day.innerHTML = "Thursday";
        break;
    case 5 :
        day.innerHTML = "Friday";
        break;
    case 6 :
        day.innerHTML = "Saturday";
        break;
}
    date.innerHTML = time.getDate();

    solar_year.innerHTML = time.getFullYear()-622;

        if(time.getMonth() == 0)
        {
                if(time.getDate() +11 <= 30 )
                {
                        solar_month.innerHTML = "دی";
                        solar_dtae.innerHTML = time.getDate()+11 ;
                }
                else if (time.getDate() +11 > 30)
                {
                        solar_month.innerHTML = "بهمن";
                        solar_dtae.innerHTML = (time.getDate() + 11) - 30 ;
                }
        } 

        if(time.getMonth() == 1)
        {
                if(time.getDate() + 12 <= 30)
                {
                        solar_month.innerHTML = "بهمن";
                        solar_dtae.innerHTML = time.getDate() + 12 ;
                } 
                else if(time.getDate() + 12 > 30)
                {
                        solar_month.innerHTML = "اسفند" ;
                        solar_dtae.innerHTML = (time.getDate() + 12) -30
                }
        }

        if(time.getMonth() == 2)
        {
                if(time.getDate() + 10 <= 30)
                {
                        solar_month.innerHTML = "اسفند";
                        solar_dtae.innerHTML = time.getDate() + 10 ;
                }
                else if(time.getDate() +10 > 30)
                {
                        solar_month.innerHTML = "فروردین";
                        solar_dtae.innerHTML = (time.getDate() +10) - 30 ;
                }
        }

        if(time.getMonth() == 3)
        {
                if(time.getDate() + 11 <= 31)
                {
                        solar_month.innerHTML = "فروردین";
                        solar_dtae.innerHTML = time.getDate() + 11 ;
                }
                else if(time.getDate() + 11 > 31)
                {
                        solar_month.innerHTML = "اردیبهشت";
                        solar_dtae.innerHTML = (time.getDate() + 11) - 31 ;
                }
        }

        if(time.getMonth() == 4)
        {
                if(time.getDate() + 11 <= 31)
                {
                        solar_month.innerHTML = "اردیبهشت" ;
                        solar_dtae.innerHTML = time.getDate() + 11 ;
                }
                else if(time.getDate() + 11 > 31)
                {
                        solar_month.innerHTML = "خرداد";
                        solar_dtae.innerHTML = (time.getDate() + 11 ) - 31 ;
                }
        }

        if(time.getMonth() == 5)
        {
                if(time.getDate() + 10 <= 31)
                {
                        solar_month.innerHTML = "خرداد" ;
                        solar_dtae.innerHTML = time.getDate() + 10 ;
                }
                else if(time.getDate() + 10 > 31)
                {
                        solar_month.innerHTML = "تیر" ;
                        solar_dtae.innerHTML = (time.getDate() +10) - 31 ;
                }
        }

        if(time.getMonth() == 6)
        {
                if(time.getDate() + 9 <= 31)
                {
                        solar_month.innerHTML = "تیر" ;
                        solar_dtae.innerHTML = time.getDate() + 9 ;
                }
                else if(time.getDate() + 9 > 31)
                {
                        solar_month.innerHTML = "مرداد";
                        solar_dtae.innerHTML = (time.getDate() +9) -31 ;
                }
        }

        if(time.getMonth() == 7)
        {
                if(time.getDate() + 9 <= 31)
                {
                        solar_month.innerHTML = "مرداد";
                        solar_dtae.innerHTML = time.getDate() + 9 ;
                }
                else if(time.getDate() + 9 > 31)
                {
                        solar_month.innerHTML = "شهریور";
                        solar_dtae.innerHTML = (time.getDate() + 9) -31 ;
                }
        }

        if(time.getMonth() == 8)
        {
                if(time.getDate() + 9 <=31)
                {
                        solar_month.innerHTML = "شهریور";
                        solar_dtae.innerHTML = time.getDate() +9 ;
                }
                else if(time.getDate() + 9 > 31)
                {
                        solar_month.innerHTML = "مهر";
                        solar_dtae.innerHTML = (time.getDate() + 9) - 31 ;
                }
        }

        if(time.getMonth() == 9)
        {
                if(time.getDate() + 8 <= 30)
                {
                        solar_month.innerHTML = "مهر" ;
                        solar_dtae.innerHTML = time.getDate() +8 ;
                }
                else if(time.getDate() + 8 < 30)
                {
                        solar_month.innerHTML = "ابان";
                        solar_dtae.innerHTML = (time.getDate() +8) - 30 ;
                }
        }

        if(time.getMonth() == 10)
        {
                if(time.getDate() + 9 <= 30)
                {
                        solar_month.innerHTML = "اذر";
                        solar_dtae.innerHTML = time.getDate() +9 ;
                }
                else if(time.getDate() +9 > 30)
                {
                        solar_month.innerHTML = "بهمن" ;
                        solar_dtae.innerHTML = (time.getDate() + 9) - 30 ;
                }
        }

        if(time.getMonth() == 11)
        {
                if(time.getDate() +9 <= 30)
                {
                        solar_month.innerHTML = "بهمن" ;
                        solar_dtae.innerHTML = time.getDate() +9 ;
                }
                else if(time.getDate() +9 > 31)
                {
                        solar_month.innerHTML = "دی";
                        solar_dtae.innerHTML = (time.getDate() + 9) - 30 ;
                }
        }


        switch (time.getDay())
{
    case 0 :
        solar_day.innerHTML = "یکشنبه";
        break;
    case 1 :
        solar_day.innerHTML = "دوشنبه";
        break;
    case 2 :
        solar_day.innerHTML = "سه شنبه";
        break;
    case 3 :
        solar_day.innerHTML = "چهارشنبه";
        break;
    case 4 :
        solar_day.innerHTML = "پنجشنبه";
        break;
    case 5 :
        solar_day.innerHTML = "جمعه";
        break;
    case 6 :
        solar_day.innerHTML = "شنبه";
        break;
}

        showHoues.innerHTML = time.getMinutes() + " : " + time.getHours();

}