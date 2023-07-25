import axios from 'axios';

const masterCookCard = document.querySelector('.first-cook');
const masterCookSecondCard = document.querySelector('.second-cook');
const masterCookThirdCard = document.querySelector('.third-cook');

const masterCookCenterCard = document.querySelector('.first-cook-center-card');
const masterCookSecondSlideCenterCard = document.querySelector(
  '.second-cook-center-card'
);
const masterCookThirdSlideCenterCard = document.querySelector(
  '.third-cook-center-card'
);

const masterCookLastCard = document.querySelector('.first-cook-last-card');
const masterCookSecondSlideLastCard = document.querySelector(
  '.second-cook-last-card'
);
const masterCookThirdSlideLastCard = document.querySelector(
  '.third-cook-last-card'
);

const EVENTS_URL = 'https://tasty-treats-backend.p.goit.global/api/events';

const events = async () => {
  try {
    const response = await axios.get(`${EVENTS_URL}`);
    const data = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};

events()
  .then(data => {
    const { cook: firstSlideCook, topic: firstSlideTopic } = data[0];

    const firstCookCard = ({ firstSlideCook }) => {
      return `<img src="${firstSlideCook.imgUrl}"
          srcset="${firstSlideCook.imgWebpUrl}" alt ="${firstSlideCook.name}"
          class="swiper-slide-img cook-card" />`;
    };

    const firstCookCenterCard = ({ firstSlideTopic }) => {
      return `<img src="${firstSlideTopic.previewUrl}" alt = "masterclass"
        class="swiper-slide-img food-center-card" />
      <p class="master-class">${firstSlideTopic.name}</p>
      <p class="master-class-coutry">${firstSlideTopic.area}</p>`;
    };

    const firstCookLastCard = ({ firstSlideTopic }) => {
      return `<img src="${firstSlideTopic.imgUrl}" alt = "tasty food"
      class="swiper-slide-img big-slide-salat-img" />`;
    };

    try {
      if (masterCookCard) {
        const firstCookCardMarkup = firstCookCard({ firstSlideCook });
        masterCookCard.innerHTML = firstCookCardMarkup;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (masterCookCenterCard) {
        const firstCenterCookCardMarkup = firstCookCenterCard({
          firstSlideTopic,
        });
        masterCookCenterCard.innerHTML = firstCenterCookCardMarkup;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (masterCookLastCard) {
        const firstCookLastCardMarkup = firstCookLastCard({ firstSlideTopic });
        masterCookLastCard.innerHTML = firstCookLastCardMarkup;
      }
    } catch (error) {
      console.error(error);
    }

    return data;
  })

  .then(data => {
    const { cook: secondSlideCook, topic: secondSlideTopic } = data[1];

    const secondCookCard = ({ secondSlideCook }) => {
      return `<img src="${secondSlideCook.imgUrl}"
           srcset="${secondSlideCook.imgWebpUrl}" alt ="${secondSlideCook.name}"
           class="swiper-slide-img cook-card" />`;
    };

    const secondCookCenterCard = ({ secondSlideTopic }) => {
      return `<img src="${secondSlideTopic.previewUrl}" alt = "masterclass"
    class="swiper-slide-img food-center-card" />
  <p class="master-class">${secondSlideTopic.name}</p>
  <p class="master-class-coutry">${secondSlideTopic.area}</p>`;
    };

    const secondCookLastCard = ({ secondSlideTopic }) => {
      return `<img src="${secondSlideTopic.imgUrl}" alt = "tasty food"
        class="big-slide-img" />`;
    };

    try {
      if (masterCookSecondCard) {
        const secondCookCardMarkup = secondCookCard({ secondSlideCook });
        masterCookSecondCard.innerHTML = secondCookCardMarkup;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (masterCookSecondSlideCenterCard) {
        const secondCenterCookCardMarkup = secondCookCenterCard({
          secondSlideTopic,
        });
        masterCookSecondSlideCenterCard.innerHTML = secondCenterCookCardMarkup;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (masterCookSecondSlideLastCard) {
        const secondLastCookCardMarkup = secondCookLastCard({
          secondSlideTopic,
        });
        masterCookSecondSlideLastCard.innerHTML = secondLastCookCardMarkup;
      }
    } catch (error) {
      console.error(error);
    }

    return data;
  })

  .then(data => {
    const { cook: thirdSlideCook, topic: thirdSlideTopic } = data[2];

    const thirdCookCard = ({ thirdSlideCook }) => {
      return `<img src="${thirdSlideCook.imgUrl}"
             srcset="${thirdSlideCook.imgWebpUrl}" alt ="${thirdSlideCook.name}"
            class="swiper-slide-img cook-card" />`;
    };

    const thirdCookCenterCard = ({ thirdSlideTopic }) => {
      return `<img src="${thirdSlideTopic.previewUrl}" alt = "masterclass"
    class="swiper-slide-img food-center-card" />
  <p class="master-class">${thirdSlideTopic.name}</p>
  <p class="master-class-coutry">${thirdSlideTopic.area}</p>`;
    };

    const thirdCookLastCard = ({ thirdSlideTopic }) => {
      return `<img
        src="${thirdSlideTopic.imgUrl}" alt = "tasty food"
        class="big-slide-img pancakes-img"
      />`;
    };

    try {
      if (masterCookThirdCard) {
        const thirdCookCardMarkup = thirdCookCard({ thirdSlideCook });
        masterCookThirdCard.innerHTML = thirdCookCardMarkup;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (masterCookThirdSlideCenterCard) {
        const thirdCenterCookCardMarkup = thirdCookCenterCard({
          thirdSlideTopic,
        });
        masterCookThirdSlideCenterCard.innerHTML = thirdCenterCookCardMarkup;
      }
    } catch (error) {
      console.error(error);
    }

    try {
      if (masterCookThirdSlideLastCard) {
        const thirdLastCookCardMarkup = thirdCookLastCard({ thirdSlideTopic });
        masterCookThirdSlideLastCard.innerHTML = thirdLastCookCardMarkup;
      }
    } catch (error) {
      console.error(error);
    }

    return data;
  })

  .catch(error => console.error(error));

window.addEventListener('load', events);
