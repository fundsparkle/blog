import React from "react";
import styled from "@emotion/styled";

export default function NewsletterSignUp() {
    return (
        <>
            <StyledWrapper>
                <iframe id="myframe"
                        width="100%"
                        src="https://6c25405f.sibforms.com/serve/MUIFAPKy3cgHacG6vAzBGltQB3UfruhcXXeOcXlYwD0-cVO7FrJzolokDYG3UALnfH2d5NfYzpKerYg6DDgv1eIZQlZhFJJEAbL7JPqOuHnpvGieH-YLIqtAt6w8nxMAIVTVd8_9SOR9mcnyrnueH1F8n4V1wKPG9189VaFRDPALB4L1Oca90aSy7LYXR7qqVHg_y3muzQfb9zUV"
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
