import React from "react";
import styled from "@emotion/styled";

export default function NewsletterSignUp() {
    return (
        <>
            <StyledWrapper>
                <iframe id="myframe"
                        width="100%"
                        src="https://6c25405f.sibforms.com/serve/MUIFAARNMHMZMG2wkbkFemz6skDxi_EVAbGqRxSpXiYgXh_7guMI0vNPomi0OT5_sefKFTmzqDrrXeYQrzkoYCoeW7yaszXjTWW6ApmH8lMXPVw51t6UM4Rwnmp815vWTpiE-AmcMxRR5wbxb69zVl4eMnX53rA3MObJ7DkNABg_2Gm8C8sqFNTwG5y02X3XJnMz-7MtlpEXNWMz"
                        frameBorder={"0"}
                        style={{
                            display: 'block',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            maxWidth: '100%',
                            height: "90vh",
                            borderRadius: "2%"
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
