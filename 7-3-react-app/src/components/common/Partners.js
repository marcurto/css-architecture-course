import styled from "styled-components";
import { Lead } from "../ui/atoms/Lead";
import { Container } from "../ui/objects/Container";
import { UiList } from "../ui/objects/UiList";

const PartnersContainer = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  padding-top: ${(props) => props.spacingL};
  padding-bottom: ${(props) => props.spacingL};

  color: gray;
`;

const PartnersList = styled(UiList)`
  gap: 3.25rem;
  img {
    display: block;
    max-height: 1.6rem;
  }
`;

export function Partners() {
  return (
    <PartnersContainer as="section">
      <Lead>
        Cursos facilitados por: <br />
      </Lead>

      <PartnersList horizontal>
        <img
          alt="Coding Stones"
          src="https://codely.tv/pro/img/partners/coding-stones.png"
          class="partners__logo"
        />
        <img
          alt="Habla Computing"
          src="https://codely.tv/pro/img/partners/habla-computing.png"
          class="partners__logo"
        />
        <img
          alt="Karumi"
          src="https://codely.tv/pro/img/partners/karumi.png"
          class="partners__logo"
        />
        <img
          alt="SmokingBrains"
          src="https://codely.tv/pro/img/partners/smoking-brains.png"
          class="partners__logo"
        />
        <img
          alt="CodelyTV"
          src="https://codely.tv/pro/img/partners/codelytv.png"
          class="partners__logo"
        />
      </PartnersList>
    </PartnersContainer>
  );
}
