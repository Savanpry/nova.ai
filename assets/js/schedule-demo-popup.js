document.addEventListener("DOMContentLoaded", function () {
    const scriptTag = document.querySelector('script[src$="schedule-demo-popup.js"]');
    const assetBase = scriptTag ? scriptTag.getAttribute('src').replace('js/schedule-demo-popup.js', '') : 'assets/';
    const rootBase = scriptTag ? scriptTag.getAttribute('src').replace('assets/js/schedule-demo-popup.js', '') : '';

    function initScheduleDemoPopup() {
    const captchaHTML = NovaCaptcha.getCaptchaHTML();
    const popupHTML = `
<section class="schedule-demo-popup-main">
  <div class="schedule-demo-popup-overlay"></div>
  <div class="container">
    <div class="schedule-demo-popup-inner">

      <div class="schedule-demo-popup-close">
        <div class="schedule-demo-popup-close-inner">
          <a href="javascript:;">
            <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </svg>
          </a>
        </div>
      </div>

      <div class="schedule-demo-popup-header">
        <div class="schedule-demo-popup-icon">
          <svg fill="#ff6801" width="800px" height="800px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M960 95.888l-256.224.001V32.113c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76h-256v-63.76c0-17.68-14.32-32-32-32s-32 14.32-32 32v63.76H64c-35.344 0-64 28.656-64 64v800c0 35.343 28.656 64 64 64h896c35.344 0 64-28.657 64-64v-800c0-35.329-28.656-63.985-64-63.985zm0 863.985H64v-800h255.776v32.24c0 17.679 14.32 32 32 32s32-14.321 32-32v-32.224h256v32.24c0 17.68 14.32 32 32 32s32-14.32 32-32v-32.24H960v799.984zM736 511.888h64c17.664 0 32-14.336 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32zm0 255.984h64c17.664 0 32-14.32 32-32v-64c0-17.664-14.336-32-32-32h-64c-17.664 0-32 14.336-32 32v64c0 17.696 14.336 32 32 32zm-192-128h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32zm0-255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm-256 0h-64c-17.664 0-32 14.336-32 32v64c0 17.664 14.336 32 32 32h64c17.664 0 32-14.336 32-32v-64c0-17.68-14.336-32-32-32zm0 255.984h-64c-17.664 0-32 14.336-32 32v64c0 17.68 14.336 32 32 32h64c17.664 0 32-14.32 32-32v-64c0-17.648-14.336-32-32-32z"/></svg>
        </div>
        <div class="schedule-demo-popup-title">
          <h3>Schedule A <span>Demo</span></h3>
          <p>See how Nova AI can transform your business with intelligent voice solutions.</p>
        </div>
      </div>
      <div class="schedule-demo-popup-header-body">
        <div class="schedule-demo-form">
          <form id="scheduleDemoForm">
              <input type="hidden" name="form_type" value="schedule_demo">
              <div class="schedule-demo-form-inner">
                <div class="demo-form-form-field">
                  <div class="demo-form-field-inner">
                    <label>Full Name <span>*</span></label>
                    <input type="text" name="fullName" placeholder="Enter your full name" required>
                    <div class="demo-form-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M240 192C240 147.8 275.8 112 320 112C364.2 112 400 147.8 400 192C400 236.2 364.2 272 320 272C275.8 272 240 236.2 240 192zM448 192C448 121.3 390.7 64 320 64C249.3 64 192 121.3 192 192C192 262.7 249.3 320 320 320C390.7 320 448 262.7 448 192zM144 544C144 473.3 201.3 416 272 416L368 416C438.7 416 496 473.3 496 544L496 552C496 565.3 506.7 576 520 576C533.3 576 544 565.3 544 552L544 544C544 446.8 465.2 368 368 368L272 368C174.8 368 96 446.8 96 544L96 552C96 565.3 106.7 576 120 576C133.3 576 144 565.3 144 552L144 544z"/></svg>
                    </div>
                  </div>
                </div>

                <div class="demo-form-form-field">
                  <div class="demo-form-field-inner">
                    <label>Work Email <span>*</span></label>
                    <input type="email" name="workEmail" placeholder="Enter your work email" required>
                    <div class="demo-form-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/></svg>
                    </div>
                  </div>
                </div>

                <div class="demo-form-form-field full-width">
                  <div class="demo-form-field-inner">
                    <label>Phone Number <span>*</span></label>
                    <input type="number" name="phone" placeholder="Enter your phone number" maxlength="15" required>
                    <div class="demo-form-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z"/></svg>
                    </div>
                  </div>
                </div>

                <div class="demo-form-form-field full-width">
                  <div class="demo-form-field-inner">
                    <label>Company Name <span>*</span></label>
                    <input type="text" name="companyName" placeholder="Enter your company name" required>
                    <div class="demo-form-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M192 112C183.2 112 176 119.2 176 128L176 512C176 520.8 183.2 528 192 528L272 528L272 448C272 430.3 286.3 416 304 416L336 416C353.7 416 368 430.3 368 448L368 528L448 528C456.8 528 464 520.8 464 512L464 128C464 119.2 456.8 112 448 112L192 112zM128 128C128 92.7 156.7 64 192 64L448 64C483.3 64 512 92.7 512 128L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 128zM224 176C224 167.2 231.2 160 240 160L272 160C280.8 160 288 167.2 288 176L288 208C288 216.8 280.8 224 272 224L240 224C231.2 224 224 216.8 224 208L224 176zM368 160L400 160C408.8 160 416 167.2 416 176L416 208C416 216.8 408.8 224 400 224L368 224C359.2 224 352 216.8 352 208L352 176C352 167.2 359.2 160 368 160zM224 304C224 295.2 231.2 288 240 288L272 288C280.8 288 288 295.2 288 304L288 336C288 344.8 280.8 352 272 352L240 352C231.2 352 224 344.8 224 336L224 304zM368 288L400 288C408.8 288 416 295.2 416 304L416 336C416 344.8 408.8 352 400 352L368 352C359.2 352 352 344.8 352 336L352 304C352 295.2 359.2 288 368 288z"/></svg>
                    </div>
                  </div>
                </div>

                <div class="demo-form-form-field full-width">
                  <div class="demo-form-field-inner">
                    <label>How can we help you? <span>*</span></label>
                    <textarea name="requirements" placeholder="Tell us about your requirements..." required></textarea>
                    <div class="demo-form-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M264 112L376 112C380.4 112 384 115.6 384 120L384 160L256 160L256 120C256 115.6 259.6 112 264 112zM208 120L208 160L128 160C92.7 160 64 188.7 64 224L64 320L576 320L576 224C576 188.7 547.3 160 512 160L432 160L432 120C432 89.1 406.9 64 376 64L264 64C233.1 64 208 89.1 208 120zM576 368L384 368L384 384C384 401.7 369.7 416 352 416L288 416C270.3 416 256 401.7 256 384L256 368L64 368L64 480C64 515.3 92.7 544 128 544L512 544C547.3 544 576 515.3 576 480L576 368z"/></svg>
                    </div>
                  </div>
                </div>

                <div class="demo-form-form-field full-width">
                  <div class="demo-form-field-inner">
                  ${captchaHTML}
                  </div>
                </div>

              </div>

              <div id="scheduleDemoMessage" style="margin-bottom: 15px; text-align: left; width: 100%;"></div>

              <div class="schedule-demo-form-button">
                <input type="submit" id="scheduleDemoSubmitBtn" value="Schedule My Demo">
              </div>
            </form>
          </div>

        </div>

      </div>
    </div>
</section>
    `;

    document.body.insertAdjacentHTML('beforeend', popupHTML);

    // Initialize logic
    const popup = document.querySelector(".schedule-demo-popup-main");
    const scheduleDemoForm = document.getElementById('scheduleDemoForm');

    if (scheduleDemoForm && window.NovaCaptcha) {
        NovaCaptcha.initCaptchaInForm(scheduleDemoForm, rootBase);
    }

    // type="number" ignores the maxlength attribute, so enforce it manually.
    const phoneInput = scheduleDemoForm ? scheduleDemoForm.querySelector('input[name="phone"]') : null;
    if (phoneInput) {
        phoneInput.addEventListener('input', function () {
            if (this.value.length > 15) {
                this.value = this.value.slice(0, 15);
            }
        });
    }

    // Find 'Schedule A Demo' buttons. Based on the previous script, they are found by targeting specific classes
    // or by text content. 
    const targetBtns = [];
    document.querySelectorAll('.actions-btn, .btn, a').forEach(btn => {
        if (btn.textContent.toLowerCase().includes('schedule a demo') || btn.textContent.toLowerCase().includes('schedule demo')) {
            targetBtns.push(btn);
        }
    });

    const closeBtn1 = document.querySelector(".schedule-demo-popup-close-inner a");
    const closeBtn2 = document.querySelector(".schedule-demo-popup-overlay");

    let scrollY = 0;

    targetBtns.forEach(function (openBtn) {
      openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        popup.classList.add("active");

        if (scheduleDemoForm && window.NovaCaptcha) {
            NovaCaptcha.refreshCaptcha(scheduleDemoForm, rootBase);
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

    // Form submission logic
    if (scheduleDemoForm) {
        scheduleDemoForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = this;
            const submitBtn = document.getElementById('scheduleDemoSubmitBtn');
            const messageDiv = document.getElementById('scheduleDemoMessage');
            const originalBtnText = submitBtn.value;
            
            messageDiv.innerHTML = '';

            if (window.NovaCaptcha && !NovaCaptcha.validateClient(form)) {
                return;
            }

            const formData = new FormData(form);
            const searchParams = new URLSearchParams();
            for (const pair of formData) {
                searchParams.append(pair[0], pair[1]);
            }

            submitBtn.value = 'Sending...';
            submitBtn.disabled = true;
            
            Array.from(form.elements).forEach(element => {
                if (element.tagName !== 'FIELDSET') element.disabled = true;
            });

            fetch(rootBase + 'send_email.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: searchParams.toString()
            })
            .then(response => response.json())
            .then(data => {
                submitBtn.value = originalBtnText;
                submitBtn.disabled = false;
                Array.from(form.elements).forEach(element => {
                    if (element.tagName !== 'FIELDSET') element.disabled = false;
                });

                if (data.success) {
                    messageDiv.innerHTML = '<span style="color: #28a745;">' + data.message + '</span>';
                    form.reset();
                    if (window.NovaCaptcha) {
                        NovaCaptcha.refreshCaptcha(form, rootBase);
                    }
                    setTimeout(function() {
                        messageDiv.innerHTML = '';
                        closePopup();
                    }, 3000);
                } else {
                    if (window.NovaCaptcha) {
                        NovaCaptcha.handleFormError(form, data, rootBase);
                    }
                    let errorHtml = '<span style="color: #dc3545;">';
                    for (const key in data.errors) {
                        errorHtml += data.errors[key] + '<br>';
                    }
                    errorHtml += '</span>';
                    messageDiv.innerHTML = errorHtml;
                }
            })
            .catch(error => {
                submitBtn.value = originalBtnText;
                submitBtn.disabled = false;
                Array.from(form.elements).forEach(element => {
                    if (element.tagName !== 'FIELDSET') element.disabled = false;
                });
                messageDiv.innerHTML = '<span style="color: #dc3545;">An error occurred. Please try again.</span>';
            });
        });
    }
    }

    if (window.NovaCaptcha) {
        initScheduleDemoPopup();
    } else {
        const captchaScript = document.createElement('script');
        captchaScript.src = assetBase + 'js/captcha.js';
        captchaScript.onload = initScheduleDemoPopup;
        document.head.appendChild(captchaScript);
    }
});
