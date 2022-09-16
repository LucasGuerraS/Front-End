import styled from "styled-components";

interface Props {
    className?: string;
    children?: string;
    href?: string;
}

// ProfileHeader

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 20%
  padding-top: 0.8rem;
  padding: 0 10rem;
  background-color: #1A2946;
  color: #e5e5e5;
`;

export const StyledLogo = styled.img`
  width: 6em;
  border: 1px solid;
  padding: 0.2em 0.1em;
  cursor: pointer;
  &:hover {
    border: 1px solid white;
    border-radius: 0.2em;
  }
`;

export const StyledList = styled.li`
  display: flex;
  justify-content: space-between;
  width: 20%;
  cursor: pointer;
  @media (orientation: landscape) and (max-width: 1300px) {
    width: 40%;
    margin-right: -5rem;
  }
`;

const Link: React.FC<Props> = ({ className, children, href }) => {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
};

// export const StyledLink = styled(Link)`
//   color: #151515;
//   font-size: 1.2em;
//   text-decoration: none;
//   margin: 0 10rem;
// `;

// RecContent

export const StyledMain = styled.main`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 65%;
`
export const StyledH1 = styled.h1`
  margin-top: -8rem;
  font-size: max(2.8vw, 1.2em);
  line-height: 3.8rem;
  color: ${(props) => (props.color ? props.color : "#151515")};
  text-align: center; 
`

export const StyledSpan = styled.span`
font-size: max(1.4em, 2.7vw);
  color: ${(props) => (props.color ? props.color : "#1056e1")};
`

// RecContent / CandContent

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  @media (max-width: 1300px) and (orientation: landscape){
    padding: 5px 0;
  }
`

export const StyledTemplate = styled.img`
  width: max(30px, 16vw);
  height: max(30px, 25vw);
  border-radius: 15em;
  margin-bottom: max(2vw, 5px);
  border: .7rem solid #151515;
`

export const StyledBlackBox = styled.div`
  width: max(21vw, 400px);
  height: max(21vw, 200px);
  background-color: #151515;
  border-radius: 2em 2em .2rem .2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 0;
  line-height: 4rem;
`

export const StyledBlackDiv = styled.div`
  color: #e5e5e5;
  font-size: max(1vw, .4rem);
  border-bottom: .1rem solid #000;
  border-top: .3rem solid #000;
  width: 100%;
  text-align: center;
`


// CandContent

export const StyledGrid = styled.div`
  max-height: inherit;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: .3fr 1fr 1fr;
  grid-template-areas:
  "h1One h1One"
  "sectionTwo sectionThree"
  "sectionFour sectionFive";
`

export const StyledGridItemOne = styled.h1`
  margin-top: -1rem;
  font-size: max(1.3em, 2.6vw);
  color: #151515;
  grid-area: h1One;
  justify-self: center;
`

export const StyledGridItemTwo = styled.section`
  border: 2px solid #1056e1;
  grid-area: sectionTwo;
  width: max(26vw, 2.1rem);
  height: max(30vh, 1.8rem);
`

export const StyledGridItemThree = styled.section`
  border: 2px solid #1056e1;
  grid-area: sectionThree;
  width: max(26vw, 2.1rem);
  height: max(30vh, 1.8rem);
`

export const StyledGridItemFour = styled.section`
  border: 2px solid #1056e1;
  grid-area: sectionFour;
  width: max(26vw, 2.1rem);
  height: max(30vh, 1.8rem);
`

export const StyledGridItemFive = styled.section`
  border: 2px solid #1056e1;
  grid-area: sectionFive;
  width: max(26vw, 2.1rem);
  height: max(30vh, 1.8rem);
`