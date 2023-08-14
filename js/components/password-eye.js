class PasswordEye {
  passwordInput;
  passwordEye;

  constructor(target) {
    this.passwordInput = typeof target === 'string' ? document.querySelector(target) : target;
    if (!this.passwordInput) return;

    this.wrapField();
    this.passwordEye = this.createEye();
    this.passwordEye.addEventListener('click', this.togglePassword.bind(this));
    this.passwordInput.insertAdjacentElement('afterend', this.passwordEye);
  }

  wrapField() {
    const wrapper = document.createElement('div');
    wrapper.classList.add('password-eye-wrapper');
    this.passwordInput.parentNode.insertBefore(wrapper, this.passwordInput);
    wrapper.appendChild(this.passwordInput);
  }

  createEye() {
    const eye = document.createElement('div');
    eye.classList.add('password-eye', 'password-eye--hide');
    return eye;
  }

  togglePassword() {
    if (this.passwordInput.type === 'password') {
      this.passwordInput.type = 'text';
      this.passwordEye.classList.remove('password-eye--hide');
    } else {
      this.passwordInput.type = 'password';
      this.passwordEye.classList.add('password-eye--hide');
    }
  }
}