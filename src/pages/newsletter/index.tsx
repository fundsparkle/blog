import React from "react";
import styled from "@emotion/styled";

export default function NewsletterSignUp() {
    return (
        <>
            <StyledWrapper>
                <iframe id="myframe"
                        width="100%"
                        src="https://6c25405f.sibforms.com/serve/MUIFAFxsDZkA8CONdjKE2kK0OHon-VRoreTtne0nb4jyaNW9-eBPJwBl1R0FUuYfmdcP9Ysl0yWdsCiqJ0wbBauo2V-_FDyw3fabjLsHoazDHxUOspykZeU6TlShuHOI2KQiOddxH-C9C4AKNcEMZHUx4tfb_c-v_QDI-qYSmScethjX8az8IEcjwQ5JzVX3UMd7qKKkacyBwkb_"
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
