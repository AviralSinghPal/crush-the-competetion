function Navbar() {
    return (<>
<section aria-label="navbar">
        <nav class="navbar-container">
          <div>
            <img src="./assets/Logo.png" alt="brand-logo" />
          </div>
          <div class="grow-list">
            <ul class="list">
              <li class="list-item">Home</li>
              <li class="list-item">About</li>
              <li class="list-item">Services</li>
              <li class="list-item">Portfolio</li>
              <li class="list-item">Pricing</li>
            </ul>
          </div>
          <div class="button-group">
            <button class="nav-button">Contact Us</button>
          </div>
          <div class="burger"><i class="fa-solid fa-bars"></i></div>
         
        </nav>
      </section>
      </>
    )
}

export default Navbar