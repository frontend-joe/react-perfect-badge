import styled, { css } from "styled-components";

const StyledBadge = styled.span`
  position: ${(p) => p.position};
  top: ${(p) => p.top};
  bottom: ${(p) => p.bottom};
  left: ${(p) => p.left};
  right: ${(p) => p.right};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${(p) => p.size};
  height: ${(p) => p.size};
  font-size: ${(p) => p.size};
  border-radius: 50%;
  border: ${(p) => p.border};
  background: ${(p) => p.background};
  color: ${(p) => p.textColor};
`;

const iconStyles = css`
  font-size: ${(p) => (p.hasBorder ? "60%" : "70%")};
`;

const textStyles = css`
  font-size: ${(p) => (p.hasBorder ? "50%" : "50%")};
`;

const StyledContent = styled.span`
  line-height: 1;

  ${(p) => (p.isIcon ? iconStyles : textStyles)};
`;

const Wrapper = ({
  children,
  size,
  background,
  textColor,
  icon,
  border,
  position,
  left,
  right,
  bottom,
  top,
}) => {
  return (
    <StyledBadge
      size={size}
      background={background}
      textColor={textColor}
      border={border}
      position={position}
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      <StyledContent
        hasBorder={border}
        isIcon={icon}
        className={icon && `uil uil-${icon}`}
      >
        {children || null}
      </StyledContent>
    </StyledBadge>
  );
};

export default Wrapper;
