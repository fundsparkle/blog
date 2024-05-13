import React from "react";
import styled from "@emotion/styled";

export default function NewsletterSignUp() {
    return (
        <>
            <StyledWrapper>
                <iframe id="myframe"
                        width="100%"
                        src="https://6c25405f.sibforms.com/serve/MUIFAKGJTNzqKtpyvV6iIaZebnb-RMsfBSfBtRTPi9hYRNMqihpSDzzeNb0RjVt0Vhrn1s2zR14MbjeDl6LBKB640vQhAgghXor8tgN7LYXMeQc1PJoiAmoyxkPltqVIdmftRQk4-DwoLI9KlW2znkJpY4WBD8jHD2IKpckP6qd0GIUEZyfqcPC122-QPr1sYsO7tPX4nERZ8jfR"
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
