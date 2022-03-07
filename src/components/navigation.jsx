export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            React Landing Page
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#president' className='page-scroll'>
                President
              </a>
            </li>
            <li>
              <a href='#vp' className='page-scroll'>
                Vice President
              </a>
            </li>
            <li>
              <a href='#sec' className='page-scroll'>
                Secretary
              </a>
            </li>
            <li>
              <a href='#depsec' className='page-scroll'>
               Deputy Secretary
              </a>
            </li>
            <li>
              <a href='#spokes' className='page-scroll'>
               SpokesPerson
              </a>
            </li>
            <li>
              <a href='#treasurer' className='page-scroll'>
                Treasure
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
