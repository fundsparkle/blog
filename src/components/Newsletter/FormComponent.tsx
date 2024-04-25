import * as React from "react"
import {router} from "next/client";

function FormComponent() {
    const [isInvalid, setIsInvalid] = React.useState(false)
    const inputRef = React.createRef<HTMLInputElement>()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        const formElem = e.currentTarget as HTMLFormElement
        const [[, email]] = new FormData(formElem)

        // navigate("/newsletter-sign-up-main/success", {
        //     state: {
        //         email
        //     }
        // })
        // router.push("/newsletter/success")
    }

    const handleClick = () => {
        const inputElem = inputRef.current
        setIsInvalid(!inputElem?.checkValidity() as boolean) // flips the boolean value so that it is true
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">
                Email address

                {isInvalid && (
                    <span>Valid email required</span>
                )}
            </label>

            <input
                type="email"
                id="email"
                name="email"
                ref={inputRef}
                required
            />

            <button
                className="cta-btn"
                onClick={handleClick}
            >Subscribe to monthly newsletter</button>
        </form>
    )
}

export default FormComponent