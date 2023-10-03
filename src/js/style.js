
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

function getCurrentMonthName()
{
  const current_month = getCurrentMonth();
  const months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie",
                  "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"
                  ];
  let month = months[current_month];
  return month;
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
