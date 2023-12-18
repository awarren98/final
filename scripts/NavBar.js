class NavBar extends HTMLElement {
  render() {
    this.innerHTML = `
        <h1 class="title">Momentum College Counseling</h1>
        <nav>
          <div class="nav-list">
            <a href="index.html" id="link-1">
              Home
            </a>
            <a href="about.html" id="link-2">
              About
            </a>
            <a href="services.html" id="link-3">
              Services
            </a>
            <a href="resources.html" id="link-4">
              Resources
            </a>

            <a href="contact.html" id="link-5">
              Contact
            </a>
          </div>
        </nav>
      `;
  }
  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
}
customElements.define("header-nav", NavBar);
