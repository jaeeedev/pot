const btn01 = document.querySelector(".imgInfo.info01");
const infoText = document.querySelector(".infoText");
const galImg = document.querySelector(".galleryImg");
const nav = document.querySelector(".nav");
const logo = document.querySelector("h1");
const slideText = document.querySelectorAll(".slideText");
const searchInput = document.querySelector(".gnbSearch");
const searchResultBox = document.querySelector(".searchResult");
const searchResult = document.querySelector(".searchResult ul");
const reco = document.querySelectorAll(".recommendImg");
const recoTitle = document.querySelectorAll(".recommendImg h4");
const recoInfo = document.querySelectorAll(".recoInfo");
const hideRecoTitle = document.querySelector(".hideRecommend h3");
const hideRecoDesc = document.querySelector(".hideRecommend p");

const dummy = [
  { name: "몬스테라" },
  { name: "스투키" },
  { name: "뱅갈고무나무" },
  { name: "아레카야자" },
  { name: "소철" },
  { name: "스킨답서스" },
  { name: "테이블야자" },
  { name: " 공작야자" },
  { name: "제라늄" },
  { name: "행운목" },
  { name: "협죽도" },
  { name: "칼랑코에" },
  { name: "칼라디움" },
  { name: "죽백나무" },
  { name: "튤립" },
  { name: "알로에" },
  { name: "산세베리아" },
  { name: "틸란드시아" },
  { name: "멜라니 고무나무" },
  { name: "로즈마리" },
];

//짭 서치...
const search = () => {
  [...searchResult.children].map((child) => {
    child.remove();
  });

  dummy.filter((el, i) => {
    if (searchInput.value !== "") {
      if (el.name.indexOf(searchInput.value) > -1) {
        let newEl = document.createElement("li");

        newEl.textContent = `${el.name}`;
        searchResult.append(newEl);
      }
    }
  });
};

searchInput.addEventListener("keyup", search);

btn01.addEventListener("mouseenter", (e) => {
  infoText.style.left = "30%";
  infoText.style.bottom = "55%";
  infoText.style.opacity = 1;
});
btn01.addEventListener("mouseleave", () => {
  infoText.style.opacity = 0;
});

nav.style.height = document.body.offsetHeight + "px";

searchInput.addEventListener("focus", () => {
  searchResultBox.style.display = "block";
});
searchInput.addEventListener("blur", () => {
  searchResultBox.style.display = "none";
});

//슬라이더 글자 마진잡아주기
slideText.forEach((text) => {
  window.addEventListener("load", () => {
    if (window.innerWidth > 768) {
      text.style.left = `${logo.getBoundingClientRect().left}px`;
    }
  });
  let timer;
  window.addEventListener("resize", () => {
    text.style.left = `${logo.getBoundingClientRect().left}px`;
  });
});

//초보자 위한 식물 정보띄우기
function openInfo() {
  document.querySelector(".hideRecommend").style.display = "block";
  hideRecoDesc.textContent = recoInfo[this.dataset.index].textContent;
  hideRecoTitle.textContent = recoTitle[this.dataset.index].textContent;
}

reco.forEach((item) => item.addEventListener("click", openInfo));

//이메일 서브밋되면 감사하다  메시지 띄우기
const subscribeForm = document.querySelector(".submitContent");
const emailInput = document.querySelector(".emailSubmit");
subscribeForm.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(".submitContent").style.display = "none";
  document.querySelector(".innerText").style.display = "none";
  document.querySelector(".afterSubmit").style.display = "flex";
});

//더보기 기능
const pickArr = [...document.querySelectorAll(".eachPick")];
const openPick = document.querySelector(".openContent");

const openPickHandler = () => {
  pickArr.map((con) => (con.style.display = "block"));

  openPick.textContent = "마지막 글입니다.";
  openPick.style.cursor = "default";
};

openPick.addEventListener("click", openPickHandler);

$(function () {
  $(".mainSlide").slick({
    arrows: false,
    autoplay: true,
  });

  $(".imgInfo.info02").on("mouseenter", function () {
    $(".infoText.info02")
      .css("opacity", 1)
      .css("bottom", "55%")
      .css("left", "30%");
  });
  $(".imgInfo.info02").on("mouseleave", function () {
    $(".infoText.info02").css("opacity", 0);
  });

  //화면 줄면 슬라이더 글씨 기본마진으로 돌리기

  $(window).on("resize", () => {
    if ($(".innerHeader").outerWidth() < 769) {
      $(".slideText").css("left", "20px");
    }
  });

  //탑버튼
  $(".topBtn").on("click", function (e) {
    e.preventDefault();
    $("html, body").stop().animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  //pc화면 lnb 리스트 내려오게
  $(".pcLnb li").hover(
    function () {
      const length = $(this).find(".hideLnb").children().length - 1;
      $(this)
        .find(".hideLnb")
        .css("height", `${45 * length}px`);
    },
    function () {
      $(this).find(".hideLnb").css("height", "0");
    }
  );

  //slick 슬릭슬라이더 옵션
  $(".webzineSlide").slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,

    responsive: [
      // 분기점 옵션
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 685,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  //내브 타이틀 클릭시 스르륵 토글
  $(".sideNav li").on("click", function () {
    $(this).find("ul").slideToggle(150);
  });
});
