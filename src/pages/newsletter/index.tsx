import React from "react";
import styled from "@emotion/styled";

export default function NewsletterSignUp() {
    return (
        <>
            <StyledWrapper>
                <iframe id="myframe"
                        width="100%"
                        src="https://6c25405f.sibforms.com/serve/MUIFACcvAwoDlFTYAcDD49deZAE3VePUj-RP36josJ8mTVRkpCpA4kzMmNUBsXUImF6plpQm9JzsC087SKYwgBZtIWGGdt_-IdHoyJ-MaD6r5tqy643LDWiw4QR9oy4vwUinoIqCL3Yy2K0KnWakZGbNM-kL9fgQauH8iV-R9STxzW694hnUI4151O0lIYx4zNNUEXuhxj31SGXS"
                        frameBorder={"0"}
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            maxWidth: '100%',
                            height: "90vh",
                            borderRadius: "3%"
                        }}>
                </iframe>
            </StyledWrapper>
        </>
    )
}

const StyledWrapper = styled.div`
  > .content {
    margin-bottom: 2.25rem;
    border-radius: 1rem;
    width: 100%;
    background-color: ${({theme}) =>
            theme.scheme === "light" ? "white" : theme.colors.gray4};
  }
`
