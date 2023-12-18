class Footer extends HTMLElement {
  render() {
    this.innerHTML = `
      <div class="website-info">
        <h2 class="title">Momentum College Counseling</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div class="contact-info">
          <p>Email@email.com</p>
          <p>(555)555-5555</p>
        </div>
      </div>
      <!--contact form-->
      <div class="contact-form" id="contact">
        <form name="footer">
          <label hidden for="fname">Name</label>
          <input type="text" id="fname" name="fname" placeholder="Name" />
          <div class="user-contact">
            <label hidden for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
            <label hidden for="tel">Phone</label>
            <input
              type="tel"
              id="tel"
              name="phone"
              placeholder="Phone Number"
            />
          </div>
          <textarea placeholder="Type your message here..."> </textarea>
          <div class="submit-button">
            <button type="button" class="submit">Submit</button>
          </div>
        </form>
      </div>
        `;
  }
  connectedCallback() {
    if (!this.rendered) {
      this.render();
      this.rendered = true;
    }
  }
}
customElements.define("footer-large", Footer);
