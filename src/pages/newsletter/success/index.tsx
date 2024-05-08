import styled from "@emotion/styled";

export default function SuccessMessage() {
    return (
        <StyledWrapper>
            <div>
                <div>Witaj na pokładzie! 👋 Właśnie dołączyłeś do listy mailingowej.<br/> Wyczekuj pierwszego maila od dywidendowo.pl 💸
                </div>
            </div>
        </StyledWrapper>
    )
}
const StyledWrapper = styled.div`
  padding: 2rem 1.5rem;
  border-radius: 1.5rem;
  max-width: 56rem;
  text-align: center;
  vertical-align: middle;
  background-color: ${({theme}) =>
          theme.scheme === "light" ? "white" : theme.colors.gray4};
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
  0 2px 4px -1px rgba(0, 0, 0, 0.06);
  margin: 2.5rem auto 0;
`