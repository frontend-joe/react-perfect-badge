import styled, { css } from "styled-components";
import ThePerfectBadge from "./ThePerfectBadge";
import avatar from "./dan.png";

const StyledBadgeWrapper = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAvatarWrapper = styled.div`
  position: relative;
`;

const StyledAvatar = styled.img`
  width: 56px;
  height: 56px;
`;

function App() {
  return (
    <>
      <StyledBadgeWrapper>
        <ThePerfectBadge size="24px" background="#00E0FF" />
      </StyledBadgeWrapper>
      <StyledBadgeWrapper>
        <ThePerfectBadge
          size="32px"
          background="linear-gradient(45deg, #8F44FD, #D444EC)"
        />
      </StyledBadgeWrapper>
      <StyledBadgeWrapper>
        <ThePerfectBadge
          size="40px"
          textColor="white"
          background="#0075FF"
          icon="bitcoin-alt"
        />
      </StyledBadgeWrapper>
      <StyledBadgeWrapper>
        <ThePerfectBadge
          size="48px"
          textColor="white"
          border="3px solid #9B2727"
          background="#DA5050"
          icon="exclamation-octagon"
        />
      </StyledBadgeWrapper>

      <StyledBadgeWrapper>
        <StyledAvatarWrapper>
          <StyledAvatar src={avatar} />
          <ThePerfectBadge
            position="absolute"
            right="-6px"
            top="-10px"
            size="24px"
            textColor="white"
            border="3px solid #262526"
            background="#ff07eb"
            textColor="white"
          >
            4
          </ThePerfectBadge>
        </StyledAvatarWrapper>
      </StyledBadgeWrapper>
    </>
  );
}

export default App;
