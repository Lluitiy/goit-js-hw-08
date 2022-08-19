const e=document.querySelector(".feedback-form");console.log("🚀 ~ formEl",e),e.addEventListener("submit",onLoginFormSubmit),e.addEventListener("input",(function(e){e.preventDefault(),localStorage.setItem("",form.elements.message.value),output.textContent=localStorage.getItem("")||"",form.reset()}));
//# sourceMappingURL=03-feedback.ed63f78a.js.map
