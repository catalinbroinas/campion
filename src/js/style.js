
function getCurrentFullDate()
{
  const current_date = new Date();
  return current_date;
}

function getCurrentYear()
{
  const current_date = getCurrentFullDate();
  const current_year = current_date.getFullYear();
  return current_year;
}

function getCurrentMonth()
{
  const current_date = getCurrentFullDate();
  const current_month = current_date.getMonth();
  return current_month;
}

function getCurrentDate()
{
  const current_date = getCurrentFullDate();
  const current_day = current_date.getDate();
  return current_day;
}

function thisMonth()
{
  const current_date = getCurrentFullDate();
  const month = current_date.getMonth();

  let current_month;

  switch(month)
  {
    case 0:
      current_month = "Ianuarie";
      break;
    case 1:
      current_month = "Februarie";
      break;
    case 2:
      current_month = "Martie";
      break;
    case 3:
      current_month = "Aprilie";
      break;
    case 4:
      current_month = "Mai";
      break;
    case 5:
      current_month = "Iunie";
      break;
    case 6:
      current_month = "Iulie";
      break;
    case 7:
      current_month = "August";
      break;
    case 8:
      current_month = "Septembrie";
      break;
    case 9:
      current_month = "Octombrie";
      break;
    case 10:
      current_month = "Noiembrie";
      break;
    case 11:
      current_month = "Decembrie";
  }

  return current_month;
}

function navbarScroll()
{
  const navbar = document.getElementById("main-navbar");

  window.addEventListener('scroll', function () {
      if (window.pageYOffset > 0) {
        navbar.classList.add("navbar-after-scroll")
      } else {
        navbar.classList.remove("navbar-after-scroll")
      }
    })
}

function myDate()
{
  const current_date = getCurrentFullDate();
  const current_month = thisMonth(); 
  const current_year = getCurrentYear();

  document.getElementById("intro-title").innerHTML = "Azi, "
   + current_date.getDate() + " " + current_month
   + " " + current_year;
}

navbarScroll();
myDate();
