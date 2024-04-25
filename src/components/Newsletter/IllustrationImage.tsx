import IllustrationMobileURL from '../../../public/illustration-sign-up-mobile.svg'
import IllustrationDesktopURL from '../../../public/illustration-sign-up-desktop.svg'
import Image from "next/image";

function IllustrationImage() {
    // if (typeof window !== undefined){
    //     return (
    //         <div className="illustration-container">
    //             <Image
    //                 src={window.innerWidth >= 768 ? IllustrationDesktopURL : IllustrationMobileURL}
    //                 alt='illustration image of statistics'
    //             />
    //         </div>
    //     )
    // } else
        return (
        <div className="illustration-container">
            <Image
                src={IllustrationDesktopURL}
                alt='illustration image of statistics'
            />
        </div>
    )
}

export default IllustrationImage