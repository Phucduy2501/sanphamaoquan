let headerEle = document.getElementById("header");

let quanNamEle = document.querySelector(".header__qn");

let loaiQuan = document.querySelector(".dropdown_content");

loaiQuan.style.display = "none";

quanNamEle.onmouseenter = function () {
  loaiQuan.style.display = "block";
};

loaiQuan.onmouseleave = function () {
  loaiQuan.style.display = "none";
};

headerEle.onmouseenter = function () {
  loaiQuan.style.display = "none";
};

// -------------------
let aoNamEle = document.querySelector(".header__an");

let loaiAo = document.querySelector(".item__aonam");

loaiAo.style.display = "none";

aoNamEle.onmouseenter = function () {
  loaiAo.style.display = "block";
};

loaiAo.onmouseleave = function () {
  loaiAo.style.display = "none";
};

headerEle.onmouseleave = function () {
  loaiAo.style.display = "none";
};

// -------------------

let phuKienEle = document.querySelector(".header__pk");

let loaiPK = document.querySelector(".item__pkien");

loaiPK.style.display = "none";

phuKienEle.onmouseenter = function () {
  loaiPK.style.display = "block";
};

loaiPK.onmouseleave = function () {
  loaiPK.style.display = "none";
};

headerEle.onmouseleave = function () {
  loaiPK.style.display = "none";
};
//  -----------------

let depEle = document.querySelector(".header__dep");

let loaiGD = document.querySelector(".item__dep");

loaiGD.style.display = "none";

depEle.onmouseenter = function () {
  loaiGD.style.display = "block";
};

loaiGD.onmouseleave = function () {
  loaiGD.style.display = "none";
};

headerEle.onmouseleave = function () {
  loaiGD.style.display = "none";
};

// ------------------
function thayDoiAnh() {
  document.getElementById("myImage").src =
    "./public/img/domoi/ao1/ao-thun-in-trame-graphic-tennis-form-regular-at153_2_small-18803.jpg";
}

function quayLaiAnhMacDinh() {
  document.getElementById("myImage").src =
    "./public/img/domoi/ao1/ao-thun-in-trame-graphic-tennis-form-regular-at153-18803.jpg";
}

//------------------------
function thayDoiAnh2() {
  document.getElementById("myImage2").src =
    "./public/img/domoi/ao1/ao-polo-vai-soc-ngang-theu-4m-o-lai-form-regular-po142_2_small-18798.jpg";
}

function quayLaiAnhMacDinh2() {
  document.getElementById("myImage2").src =
    "./public/img/domoi/ao1/ao-polo-vai-soc-ngang-theu-4m-o-lai-form-regular-po142-18798.jpg";
  alt = "áo sơ mi";
}

// ------------------------

function thayDoiAnh3() {
  document.getElementById("myImage3").src =
    "./public/img/domoi/ao1/ao-so-mi-tay-ngan-2-tui-theu-4m-form-regular-sm164_2_small-18794.jpg";
}

function quayLaiAnhMacDinh3() {
  document.getElementById("myImage3").src =
    "./public/img/domoi/ao1/ao-so-mi-tay-ngan-2-tui-theu-4m-form-regular-sm164-18794.jpg";
}

// ------------------------

function thayDoiAnh4() {
  document.getElementById("myImage4").src =
    "./public/img/domoi/ao1/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163_2_small-18793.jpg";
}

function quayLaiAnhMacDinh4() {
  document.getElementById("myImage4").src =
    "./public/img/domoi/ao1/ao-so-mi-theu-3-soc-o-nguc-form-slimfit-sm163-18793.jpg";
}

//---------------------------------

function thayDoiAnh5() {
  document.getElementById("myImage5").src =
    "./public/img/banchay/matsau/ao-so-mi-vai-bamboo-theu-gentlemen-o-mang-sec-form-slimfit-sm155_2_small-18676.jpg";
}

function quayLaiAnhMacDinh5() {
  document.getElementById("myImage5").src =
    "./public/img/banchay/chay1/ao-so-mi-vai-bamboo-theu-gentlemen-o-mang-sec-form-slimfit-sm155-18676.jpg";
}

//---------------------------------

function thayDoiAnh6() {
  document.getElementById("myImage6").src =
    "./public/img/banchay/matsau/quan-short-lung-thun-cai-nut-theu-4tc-form-straight-qs058-mau-trang_2_small-18651.jpg";
}

function quayLaiAnhMacDinh6() {
  document.getElementById("myImage6").src =
    "./public/img/banchay/chay1/quan-short-lung-thun-cai-nut-theu-4tc-form-straight-qs058-mau-trang-18651.jpg";
}

// ------------------

function thayDoiAnh7() {
  document.getElementById("myImage7").src =
    "./public/img/banchay/matsau/ao-thun-soc-ngang-nautical-theu-hinh-o-nguc-form-regular-at149_2_small-18594.jpg";
}

function quayLaiAnhMacDinh7() {
  document.getElementById("myImage7").src =
    "./public/img/banchay/chay1/ao-thun-soc-ngang-nautical-theu-hinh-o-nguc-form-regular-at149-18594.jpg";
}

//----------------------------------

function thayDoiAnh8() {
  document.getElementById("myImage8").src =
    "./public/img/banchay/matsau/ao-so-mi-tay-dai-oxford-soc-4men-form-regular-sm152_2_small-18580.jpg";
}

function quayLaiAnhMacDinh8() {
  document.getElementById("myImage8").src =
    "./public/img/banchay/chay1/ao-so-mi-tay-dai-oxford-soc-4men-form-regular-sm152-18580.jpg";
}

//----------------------------------

function thayDoiAnh9() {
  document.getElementById("myImage9").src =
    "./public/img/carousel/quan-tay-lung-thun-form-regular-qt060_2_small-18668 (1).jpg";
}

function quayLaiAnhMacDinh9() {
  document.getElementById("myImage9").src =
    "./public/img/quantay/quan-tay-lung-thun-form-regular-qt060-18668.jpg";
}

//----------------------------------

function thayDoiAnh10() {
  document.getElementById("myImage10").src =
    "./public/img/carousel/ao-so-mi-regular-mr-friendly-asm092_2_small-16907.png";
}

function quayLaiAnhMacDinh10() {
  document.getElementById("myImage10").src =
    "./public/img/ao/ao-so-mi-regular-mr-friendly-asm092-16907.png";
  alt = "áo sơ mi";
}

// ------------------

function thayDoiAnh11() {
  document.getElementById("myImage11").src =
    "./public/img/carousel/ao-so-mi-tron-tay-dai-form-regular-sm088_2_small-16897.jpg";
}

function quayLaiAnhMacDinh11() {
  document.getElementById("myImage11").src =
    "./public/img/ao/ao-so-mi-tron-tay-dai-form-regular-sm088-16897.jpg";
  alt = "quần";
}

// ------------------
function thayDoiAnh12() {
  document.getElementById("myImage12").src =
    "./public/img/carousel/quan-kaki-co-nap-tui-sau-qk003_2-17766.jpg";
}

function quayLaiAnhMacDinh12() {
  document.getElementById("myImage12").src =
    "./public/img/quan/quan-kaki-co-nap-tui-sau-qk003-17766.jpg";
  alt = "quần";
}
