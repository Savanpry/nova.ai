(function (window) {
    'use strict';

    function getCaptchaUrl(formType, rootBase) {
        return rootBase + 'captcha.php?form=' + encodeURIComponent(formType) + '&t=' + Date.now();
    }

    function getCaptchaHTML() {
        return (
            '<div class="captcha-field">' +
                '<label>Security Verification <span class="required-mark">*</span></label>' +
                '<div class="captcha-image-row">' +
                    '<img src="" class="captcha-image" alt="Captcha verification code" width="200" height="55">' +
                    '<button type="button" class="captcha-refresh" title="Refresh captcha" aria-label="Refresh captcha">' +
                        '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">' +
                            '<path d="M21 12a9 9 0 1 1-2.64-6.36" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' +
                            '<path d="M21 3v6h-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
                        '</svg>' +
                    '</button>' +
                    '<input type="text" name="captcha" class="captcha-input" placeholder="Enter the characters shown" required autocomplete="off" spellcheck="false" maxlength="10">' +
                '</div>' +
                '<div class="captcha-error" aria-live="polite"></div>' +
            '</div>'
        );
    }

    function refreshCaptcha(form, rootBase) {
        var formType = form.querySelector('[name="form_type"]');
        var img = form.querySelector('.captcha-image');
        var input = form.querySelector('.captcha-input');
        var errorEl = form.querySelector('.captcha-error');

        if (!formType || !img) {
            return;
        }

        img.src = getCaptchaUrl(formType.value, rootBase || '');

        if (input) {
            input.value = '';
        }

        if (errorEl) {
            errorEl.textContent = '';
        }
    }

    function initCaptchaInForm(form, rootBase) {
        if (!form || form.dataset.captchaInit === 'true') {
            return;
        }

        var refreshBtn = form.querySelector('.captcha-refresh');

        refreshCaptcha(form, rootBase);

        if (refreshBtn) {
            refreshBtn.addEventListener('click', function () {
                refreshCaptcha(form, rootBase);
            });
        }

        form.dataset.captchaInit = 'true';
    }

    function validateClient(form) {
        var input = form.querySelector('.captcha-input');
        var errorEl = form.querySelector('.captcha-error');

        if (!input) {
            return true;
        }

        var value = input.value.trim();

        if (!value) {
            if (errorEl) {
                errorEl.textContent = 'Please enter the captcha code.';
            }
            input.focus();
            return false;
        }

        if (errorEl) {
            errorEl.textContent = '';
        }

        return true;
    }

    function handleFormError(form, data, rootBase) {
        if (!data || !data.errors) {
            return;
        }

        var hasCaptchaError = Object.prototype.hasOwnProperty.call(data.errors, 'captcha');
        var errorEl = form.querySelector('.captcha-error');

        if (hasCaptchaError && errorEl) {
            errorEl.textContent = data.errors.captcha;
        }

        if (hasCaptchaError || data.errors.general) {
            refreshCaptcha(form, rootBase);
        }
    }

    window.NovaCaptcha = {
        getCaptchaUrl: getCaptchaUrl,
        getCaptchaHTML: getCaptchaHTML,
        initCaptchaInForm: initCaptchaInForm,
        refreshCaptcha: refreshCaptcha,
        validateClient: validateClient,
        handleFormError: handleFormError
    };
})(window);
