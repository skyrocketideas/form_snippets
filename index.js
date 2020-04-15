"use strict";

document.querySelectorAll("pre code").forEach((el) => {
	el.textContent = el.innerHTML;
});
