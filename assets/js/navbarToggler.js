const sidebar = document.querySelector("#sidebar");
const btnHeader = document.querySelector("#btn-header");
const contentWrapper = document.querySelector(".content-wrapper");

const toggle = () => {
	sidebar.classList.toggle("sidebar-toggle");
	btnHeader.classList.toggle("btn-header-toggle");
	contentWrapper.classList.toggle("content-wrapper-toggle");
};
