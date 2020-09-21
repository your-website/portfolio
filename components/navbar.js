import Link from 'next/link';

const Navbar = () => {

  let closeNavbar = null;

  const handleCloseNavbar = () => {
    const element = document.querySelector('.navbar-toggler');

    if (!element.classList.contains('collapsed')) {
      closeNavbar.click();
    }
  };

  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <Link href="/">
            <a className="navbar-brand">Movies For Everyone</a>
          </Link>
          <button ref={element => closeNavbar = element } className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                  aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link href="/">
                  <a className="nav-link" onClick={ handleCloseNavbar }>Home
                    <span className="sr-only">(current)</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link  href="/about">
                  <a className="nav-link" onClick={ handleCloseNavbar }>About</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link  href="/services">
                  <a className="nav-link" onClick={ handleCloseNavbar }>Services</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link  href="/contact">
                  <a className="nav-link" onClick={ handleCloseNavbar }>Contact</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
};

export default Navbar;
