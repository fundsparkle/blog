import IllustrationMobileURL from '../../../public/illustration-sign-up-mobile.svg'
import IllustrationDesktopURL from '../../../public//illustration-sign-up-desktop.svg'

function IllustrationImage() {
    return (
        <div className="illustration-container">
            <img
                src={window.innerWidth >= 768 ? IllustrationDesktopURL : IllustrationMobileURL}
                alt='illustration image of statistics'
            />
        </div>
    )
}

export default IllustrationImage