
/* Importing the logo image from the assets folder. */
import LogoEmpowermentLabs from '../../assets/logo/logo-empowerment-labs.webp'

/* Importing the CSS file for the Header component. */
import './Header.css'

/**
 * It returns a header element with an image element inside of it
 * @returns A header with an image of the logo.
 */
const Header = () => {
    return (
        /* Creating a header element with an image element inside of it. */
        <header className="header">
            <img className='lite-thinking-logo' src={LogoEmpowermentLabs} alt="lite-thinking-logo" />
            <div className='title-empowerment-labs'>
                Empowerment Labs
            </div>
        </header>
    )
}

/* Exporting the Header component so that it can be used in other files. */
export default Header;