document.addEventListener("DOMContentLoaded", function () {
  const scriptTag = document.querySelector('script[src$="project-popup.js"]');
  const assetBase = scriptTag
    ? scriptTag.getAttribute("src").replace("js/project-popup.js", "")
    : "assets/";
  const rootBase = scriptTag
    ? scriptTag.getAttribute("src").replace("assets/js/project-popup.js", "")
    : "";

  function initProjectPopup() {
    const captchaHTML = NovaCaptcha.getCaptchaHTML();
    const popupHTML = `
<section class="project-popup-main-sec">
  <div class="project-popup-overlay"></div>

  <div class="container">
    <div class="project-popup-inner">

      <div class="project-popup-close">
        <div class="project-popup-close-inner">
          <a href="javascript:;">
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>
          </a>
        </div>
      </div>

      <div class="project-popup-form-col">
        <div class="project-popup-form-col-inner">
          <div class="project-popup-title">
            <div class="project-popup-title-inner">
              <div class="project-popup-title-icon">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g opacity="0.5"> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 22H10C6.22876 22 4.34315 22 3.17157 20.8284C2 19.6569 2 17.7712 2 14V10C2 6.22876 2 4.34315 3.17157 3.17157C4.34315 2 6.23869 2 10.0298 2C10.6358 2 11.1214 2 11.53 2.01666C11.5166 2.09659 11.5095 2.17813 11.5092 2.26057L11.5 5.09497C11.4999 6.19207 11.4998 7.16164 11.6049 7.94316C11.7188 8.79028 11.9803 9.63726 12.6716 10.3285C13.3628 11.0198 14.2098 11.2813 15.0569 11.3952C15.8385 11.5003 16.808 11.5002 17.9051 11.5001L18 11.5001H21.9574C22 12.0344 22 12.6901 22 13.5629V14C22 17.7712 22 19.6569 20.8284 20.8284C19.6569 22 17.7712 22 14 22Z" fill="#ff6801"></path> </g> <path d="M6 13.75C5.58579 13.75 5.25 14.0858 5.25 14.5C5.25 14.9142 5.58579 15.25 6 15.25H14C14.4142 15.25 14.75 14.9142 14.75 14.5C14.75 14.0858 14.4142 13.75 14 13.75H6Z" fill="#ff6801"></path> <path d="M6 17.25C5.58579 17.25 5.25 17.5858 5.25 18C5.25 18.4142 5.58579 18.75 6 18.75H11.5C11.9142 18.75 12.25 18.4142 12.25 18C12.25 17.5858 11.9142 17.25 11.5 17.25H6Z" fill="#ff6801"></path> <path d="M11.5092 2.2601L11.5 5.0945C11.4999 6.1916 11.4998 7.16117 11.6049 7.94269C11.7188 8.78981 11.9803 9.6368 12.6716 10.3281C13.3629 11.0193 14.2098 11.2808 15.057 11.3947C15.8385 11.4998 16.808 11.4997 17.9051 11.4996L21.9574 11.4996C21.9698 11.6552 21.9786 11.821 21.9848 11.9995H22C22 11.732 22 11.5983 21.9901 11.4408C21.9335 10.5463 21.5617 9.52125 21.0315 8.79853C20.9382 8.6713 20.8743 8.59493 20.7467 8.44218C19.9542 7.49359 18.911 6.31193 18 5.49953C17.1892 4.77645 16.0787 3.98536 15.1101 3.3385C14.2781 2.78275 13.862 2.50487 13.2915 2.29834C13.1403 2.24359 12.9408 2.18311 12.7846 2.14466C12.4006 2.05013 12.0268 2.01725 11.5 2.00586L11.5092 2.2601Z" fill="#ff6801"></path> </g></svg>  
              </div>

              <div class="project-popup-title-description">
                <div class="project-popup-title-description-inner">
                  <h3>Replace Start a Project with Tell Us About Your Project</h3>
                  <p>Complete the form below, and we'll get back to you with the best approach for your requirements.</p>
                </div>
              </div>

            </div>
          </div>

          <div class="project-popup-form">
            <form id="projectForm">
              <input type="hidden" name="form_type" value="project">
              <div class="project-popup-form-inner">
                <div class="popup-form-field">
                  <div class="popup-form-field-inner">
                    <label>Full Name</label>
                    <input type="text" name="fullName" placeholder="Enter Full Name" required>
                  </div>
                </div>

                <div class="popup-form-field">
                  <div class="popup-form-field-inner">
                    <label>Email</label>
                    <input type="email" name="email" placeholder="Enter Email" required>
                  </div>
                </div>

                <div class="popup-form-field">
                  <div class="popup-form-field-inner">
                    <label>Project Name</label>
                    <input type="text" name="projectName" placeholder="Enter project name" required>
                  </div>
                </div>

                <div class="popup-form-field">
                  <div class="popup-form-field-inner">
                    <label>Category</label>
                    <select name="category" id="category" required>
                      <option value="AI Chatbots">AI Chatbots</option>
                      <option value="AI Voice Agents">AI Voice Agents</option>
                      <option value="Workflow Automation">Workflow Automation</option>
                      <option value="Custom AI Development">Custom AI Development</option>
                      <option value="Website Development">Website Development</option>
                      <option value="Mobile App Development">Mobile App Development</option>
                      <option value="AI Integration">AI Integration</option>
                      <option value="Data Analytics & BI">Data Analytics & BI</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div class="popup-form-field">
                  <div class="popup-form-field-inner">
                    <label>Description</label>
                    <textarea name="description" placeholder="Tell us about your project, business goals, target audience, required features, preferred technologies, timeline, and any existing systems you'd like us to integrate with." required></textarea>
                  </div>
                </div>

                <div class="popup-form-field">
                  <div class="popup-form-field-inner">
                    <label>Project Type</label>

                    <div class="popup-radio-wrapper">
                      <div class="popup-radio-box">
                        <div class="popup-radio-box-innner">
                          <input type="radio" id="projectTypeWeb" name="projectType" value="Web Project" checked>
                          <label for="projectTypeWeb">
                            <span><svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="style=stroke" clip-path="url(#clip0_1_1828)"> <g id="web"> <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M10.4425 2.44429C10.0752 3.64002 9.32073 6.25569 8.89915 8.83258C9.99331 9.00921 11.0621 9.12209 12 9.12209C12.9379 9.12209 14.0067 9.00921 15.1009 8.83258C14.6793 6.25569 13.9248 3.64002 13.5575 2.44429C13.0509 2.3624 12.5307 2.31977 12 2.31977C11.4693 2.31977 10.9491 2.3624 10.4425 2.44429ZM15.3337 2.90893C15.737 4.305 16.2958 6.42828 16.6448 8.54737C18.1513 8.23703 19.5727 7.85824 20.605 7.56109C19.4986 5.42102 17.6172 3.74662 15.3337 2.90893ZM21.2129 9.01933C20.1222 9.33683 18.5423 9.76328 16.8594 10.1057C16.9295 10.7564 16.9709 11.3958 16.9709 12C16.9709 12.8816 16.8827 13.8411 16.7445 14.8058C18.759 14.3858 20.6068 13.849 21.5557 13.5575C21.6376 13.0509 21.6802 12.5307 21.6802 12C21.6802 10.959 21.5162 9.95751 21.2129 9.01933ZM21.0911 15.3337C19.9166 15.6729 18.229 16.1219 16.4634 16.4634C16.1219 18.229 15.6729 19.9166 15.3337 21.0911C17.9978 20.1138 20.1138 17.9978 21.0911 15.3337ZM13.5576 21.5557C13.849 20.6068 14.3858 18.759 14.8058 16.7445C13.8411 16.8827 12.8816 16.9709 12 16.9709C11.1184 16.9709 10.1589 16.8827 9.19423 16.7445C9.61421 18.759 10.151 20.6068 10.4425 21.5557C10.9491 21.6376 11.4693 21.6802 12 21.6802C12.5307 21.6802 13.0509 21.6376 13.5576 21.5557ZM8.66629 21.0911C8.32707 19.9166 7.8781 18.229 7.53658 16.4634C5.77099 16.1219 4.08335 15.6729 2.90891 15.3337C3.88622 17.9978 6.00216 20.1138 8.66629 21.0911ZM2.44429 13.5575C3.39316 13.849 5.24101 14.3858 7.25548 14.8058C7.1173 13.8411 7.02907 12.8816 7.02907 12C7.02907 11.3958 7.07048 10.7564 7.14056 10.1057C5.45769 9.76328 3.87779 9.33683 2.78712 9.01933C2.48383 9.95751 2.31977 10.959 2.31977 12C2.31977 12.5307 2.3624 13.0509 2.44429 13.5575ZM3.39504 7.56109C4.42731 7.85824 5.84865 8.23703 7.35522 8.54737C7.70416 6.42827 8.26303 4.305 8.66626 2.90893C6.38282 3.74662 4.50139 5.42102 3.39504 7.56109ZM8.68924 10.3888C8.63137 10.9544 8.59884 11.4968 8.59884 12C8.59884 12.9399 8.71224 14.012 8.88985 15.1102C9.98798 15.2878 11.0601 15.4012 12 15.4012C12.9399 15.4012 14.012 15.2878 15.1102 15.1102C15.2878 14.012 15.4012 12.9399 15.4012 12C15.4012 11.4968 15.3686 10.9544 15.3108 10.3888C14.1776 10.5703 13.0348 10.6919 12 10.6919C10.9652 10.6919 9.82236 10.5703 8.68924 10.3888ZM9.67273 0.991173C10.4243 0.833026 11.2029 0.75 12 0.75C12.7971 0.75 13.5757 0.833026 14.3273 0.991174C18.0108 1.76627 21.0281 4.34097 22.42 7.75174C22.9554 9.06356 23.25 10.4983 23.25 12C23.25 12.7971 23.167 13.5757 23.0088 14.3273C22.0943 18.6736 18.6736 22.0943 14.3273 23.0088C13.5757 23.167 12.7971 23.25 12 23.25C11.2029 23.25 10.4243 23.167 9.67273 23.0088C5.32644 22.0943 1.90572 18.6736 0.991173 14.3273C0.833026 13.5757 0.75 12.7971 0.75 12C0.75 10.4972 1.04509 9.06132 1.58123 7.74866C2.97369 4.33943 5.99026 1.76604 9.67273 0.991173Z" fill="#000000"/> </g> </g> <defs> <clipPath id="clip0_1_1828"> <rect width="24" height="24" fill="white"/> </clipPath> </defs> </svg></span>Web Project</label>
                          </div>
                        </div>

                        <div class="popup-radio-box">
                          <div class="popup-radio-box-innner">
                            <input type="radio" id="projectTypeMobile" name="projectType" value="Mobile Project">
                            <label for="projectTypeMobile">
                              <span><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 383.3 583.3" style="enable-background:new 0 0 383.3 583.3;" xml:space="preserve"> <path d="M325,0H58.3C26.3,0,0,26.3,0,58.3V525c0,32,26.3,58.3,58.3,58.3H325c32,0,58.3-26.3,58.3-58.3V58.3C383.3,26.3,357,0,325,0z M333.3,525c0,4.7-3.7,8.3-8.3,8.3H58.3c-4.7,0-8.3-3.7-8.3-8.3V58.3c0-4.7,3.7-8.3,8.3-8.3H325c4.7,0,8.3,3.7,8.3,8.3V525z M225,425c0,18.3-15,33.3-33.3,33.3s-33.3-15-33.3-33.3s15-33.3,33.3-33.3S225,406.7,225,425z"/> </svg></span>Mobile Project</label>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
              </div>

                <div class="popup-form-field popup-form-field-full popup-project-captcha-field">
                  <div class="popup-form-field-inner">
                  ${captchaHTML}
                  </div>
                </div>

                <div id="projectFormMessage" style="text-align: left; width: 100%;"></div>

                <div class="popup-form-button-wrapper">
                  <input type="submit" id="projectSubmitBtn" value="Submit Project Request">
                </div>

            </form>
          </div>
        </div>
      </div>

      <div class="project-popup-image-col">
        <div class="project-popup-image-col-inner">
          <img src="${assetBase}images/start-project-img.png" alt="start-project-img">
        </div>
      </div>
        
    </div>

  </div>
</section>
    `;

    document.body.insertAdjacentHTML("beforeend", popupHTML);

    // Initialize logic
    const popup = document.querySelector(".project-popup-main-sec");
    const projectForm = document.getElementById("projectForm");

    if (projectForm && window.NovaCaptcha) {
      NovaCaptcha.initCaptchaInForm(projectForm, rootBase);
    }

    // Find all 'Start a Project' buttons
    const targetBtns = [];
    document.querySelectorAll(".actions-btn, .btn").forEach((btn) => {
      const text = btn.textContent.trim();

      if (["Start a Project", "Start Your AI Project"].some((label) => text.includes(label))) {
        targetBtns.push(btn);
      }
    });

    const closeBtn1 = document.querySelector(".project-popup-close-inner a");
    const closeBtn2 = document.querySelector(
      ".popup-form-button-wrapper input.cancel",
    );

    let scrollY = 0;

    targetBtns.forEach(function (openBtn) {
      openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        popup.classList.add("active");

        if (projectForm && window.NovaCaptcha) {
          NovaCaptcha.refreshCaptcha(projectForm, rootBase);
        }

        scrollY = window.scrollY;

        document.body.style.position = "fixed";
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = "0";
        document.body.style.right = "0";
        document.body.style.overflow = "hidden";
      });
    });

    function closePopup(e) {
      if (e) e.preventDefault();
      popup.classList.remove("active");

      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY);
    }

    if (closeBtn1) closeBtn1.addEventListener("click", closePopup);
    if (closeBtn2) closeBtn2.addEventListener("click", closePopup);
    if (popup.querySelector(".project-popup-overlay")) {
      popup
        .querySelector(".project-popup-overlay")
        .addEventListener("click", closePopup);
    }

    // Radio button UI logic
    const radioBoxes = popup.querySelectorAll(".popup-radio-box-innner");

    function updateProjectTypeSelection(selectedBox) {
      const radio = selectedBox.querySelector('input[type="radio"]');
      if (!radio) {
        return;
      }

      radio.checked = true;
      radioBoxes.forEach(function (box) {
        box.classList.remove("input-checked");
      });
      selectedBox.classList.add("input-checked");
    }

    radioBoxes.forEach(function (box) {
      const radio = box.querySelector('input[type="radio"]');
      if (!radio) {
        return;
      }

      box.addEventListener("click", function () {
        updateProjectTypeSelection(box);
      });

      radio.addEventListener("change", function () {
        if (this.checked) {
          updateProjectTypeSelection(box);
        }
      });

      if (radio.checked) {
        box.classList.add("input-checked");
      }
    });

    // Form submission logic
    if (projectForm) {
      projectForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const form = this;
        const submitBtn = document.getElementById("projectSubmitBtn");
        const messageDiv = document.getElementById("projectFormMessage");
        const originalBtnText = submitBtn.value;

        messageDiv.innerHTML = "";

        if (window.NovaCaptcha && !NovaCaptcha.validateClient(form)) {
          return;
        }

        const formData = new FormData(form);
        const searchParams = new URLSearchParams();
        for (const pair of formData) {
          searchParams.append(pair[0], pair[1]);
        }

        submitBtn.value = "Sending...";
        submitBtn.disabled = true;

        Array.from(form.elements).forEach((element) => {
          if (element.tagName !== "FIELDSET") element.disabled = true;
        });

        fetch(rootBase + "send_email.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: searchParams.toString(),
        })
          .then((response) => response.json())
          .then((data) => {
            submitBtn.value = originalBtnText;
            submitBtn.disabled = false;
            Array.from(form.elements).forEach((element) => {
              if (element.tagName !== "FIELDSET") element.disabled = false;
            });

            if (data.success) {
              messageDiv.innerHTML =
                '<span style="color: #28a745;">' + data.message + "</span>";
              form.reset();
              radioBoxes.forEach(function (box) {
                box.classList.remove("input-checked");
              });
              const defaultRadioBox = popup
                .querySelector("#projectTypeWeb")
                ?.closest(".popup-radio-box-innner");
              if (defaultRadioBox) {
                defaultRadioBox.classList.add("input-checked");
              }
              if (window.NovaCaptcha) {
                NovaCaptcha.refreshCaptcha(form, rootBase);
              }
              setTimeout(function () {
                messageDiv.innerHTML = "";
                closePopup(); // trigger close popup
              }, 3000);
            } else {
              if (window.NovaCaptcha) {
                NovaCaptcha.handleFormError(form, data, rootBase);
              }
              let errorHtml = '<span style="color: #dc3545;">';
              for (const key in data.errors) {
                errorHtml += data.errors[key] + "<br>";
              }
              errorHtml += "</span>";
              messageDiv.innerHTML = errorHtml;
            }
          })
          .catch((error) => {
            submitBtn.value = originalBtnText;
            submitBtn.disabled = false;
            Array.from(form.elements).forEach((element) => {
              if (element.tagName !== "FIELDSET") element.disabled = false;
            });
            messageDiv.innerHTML =
              '<span style="color: #dc3545;">An error occurred. Please try again.</span>';
          });
      });
    }
  }

  if (window.NovaCaptcha) {
    initProjectPopup();
  } else {
    const captchaScript = document.createElement("script");
    captchaScript.src = assetBase + "js/captcha.js";
    captchaScript.onload = initProjectPopup;
    document.head.appendChild(captchaScript);
  }
});
