const API_KEY = "0519d61e-d820-47a7-88aa-2a18adae6117";

const bandsiteApi = new BandsiteAPI(API_KEY);

const showsList = document.querySelector(".shows");

const renderShows = async () => {
  let shows = [];
  try {
    shows = await bandsiteApi.getShows();
  } catch (error) {
    console.error("Error fetching shows", error);
  }

  for (let i = 0; i < shows.length; i++) {
    const showArticle = document.createElement("article");
    showArticle.classList.add("show__article");

    const showDateLabel = document.createElement("p");
    showDateLabel.classList.add("show__date-label");
    showDateLabel.innerHTML = "Date";

    const showDate = document.createElement("p");
    showDate.classList.add("show__date");
    showDate.innerHTML = shows[i].date;
    showDate.innerHTML = new Date(shows[i].date).toLocaleDateString("en-US");

    const showVenueLabel = document.createElement("p");
    showVenueLabel.classList.add("show__venue-label");
    showVenueLabel.innerHTML = "Venue";

    const showVenue = document.createElement("p");
    showVenue.classList.add("show__venue");
    showVenue.innerHTML = shows[i].place;

    const showLocalLabel = document.createElement("p");
    showLocalLabel.classList.add("show__local-label");
    showLocalLabel.innerHTML = "Location";

    const showLocal = document.createElement("p");
    showLocal.classList.add("show__local");
    showLocal.innerHTML = shows[i].location;

    const showBtn = document.createElement("button");
    showBtn.classList.add("show__btn");
    showBtn.innerHTML = "BUY TICKETS";

    showsList.appendChild(showArticle);
    showArticle.appendChild(showDateLabel);
    showArticle.appendChild(showDate);
    showArticle.appendChild(showVenueLabel);
    showArticle.appendChild(showVenue);
    showArticle.appendChild(showLocalLabel);
    showArticle.appendChild(showLocal);
    showArticle.appendChild(showBtn);
  }
};

renderShows();
