import styled from "@emotion/styled"
import React from "react"
import {AiFillTwitterCircle, AiOutlineMail,} from "react-icons/ai"
import {CONFIG} from "site.config"
import {Emoji} from "src/components/Emoji"

const ContactCard: React.FC = () => {
    return (
        <>
            <StyledTitle>
                <Emoji>💬</Emoji> Kontakt
            </StyledTitle>
            <StyledWrapper>
                {CONFIG.profile.email && (
                    <a
                        href={`mailto:${CONFIG.profile.email}`}
                        rel="noreferrer"
                        target="_top"
                        css={{overflow: "hidden"}}
                    >
                        <AiOutlineMail className="icon"/>
                        <div className="name">email</div>
                    </a>
                )}

                <a
                    href="https://twitter.com/dywidendowopl"
                    rel="noreferrer"
                    target="_top"
                    css={{overflow: "hidden"}}
                >
                    <AiFillTwitterCircle className="icon"/>
                    <div className="name">Follow @dywidendowopl</div>
                </a>
            </StyledWrapper>
        </>
    )
}

export default ContactCard

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({theme}) =>
          theme.scheme === "light" ? "white" : theme.colors.gray4};

  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({theme}) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({theme}) => theme.colors.gray12};
      background-color: ${({theme}) => theme.colors.gray5};
    }

    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }

    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
