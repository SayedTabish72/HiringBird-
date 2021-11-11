import React from "react";
import {
  ListCardWrap,
  Wrapper,
  LogoContainer,
  Data,
  Info,
  Icons,
  Icon,
  InternshipData,
  InternshipDataHeading,
  InternshipDataSubheading,
  WrapData,
  InternshipDataId,
  IconText,
  Stipend,
  StipendRange,
  StipendIcon,
  Time,
  TimeIcon,
  TimeText,
  StartInternship,
  StartIcon,
  StartText,
  SkillsRequired,
  AboutInternship,
  WorkFrom,
  HomeOffice,
  HomeOfficeText,
  Text,
  Applicants,
  Logo,
} from "./styles/ListCard.styled";

export default function ListCard({ internships }) {
  return (
    <ListCardWrap>
      {internships.map((data) => {
        return (
          <Wrapper key={data.id}>
            <LogoContainer>
              <Logo src="/skilzen-logo.png" />
            </LogoContainer>
            <Data>
              <Info>
                <Icons>
                  <Icon src="/whatsapp.svg" />
                  <Icon src="/share.svg" />
                  <Icon src="/heart.svg" />
                </Icons>
                <InternshipData>
                  <InternshipDataHeading>{data.jobName}</InternshipDataHeading>
                  <WrapData>
                    <InternshipDataSubheading>
                      {data.companyName}
                    </InternshipDataSubheading>
                    <InternshipDataId>HB4321</InternshipDataId>
                  </WrapData>
                  <IconText>
                    <Stipend>
                      <StipendIcon src="/stipend.svg" />
                      <StipendRange>
                        {data.minStipen}-{data.maxStipen}
                      </StipendRange>
                    </Stipend>
                    <Time>
                      <TimeIcon src="/calendar.svg" />
                      <TimeText>{data.internshipPeriod} Months</TimeText>
                    </Time>
                    <StartInternship>
                      <StartIcon src="/calendar.svg" />
                      <StartText>{data.startDate}</StartText>
                    </StartInternship>
                  </IconText>
                  <SkillsRequired>
                    {data.skills.map((skill, index) => {
                      return <p key={index}>{skill}</p>;
                    })}
                  </SkillsRequired>
                </InternshipData>
              </Info>
              <AboutInternship>
                <WorkFrom>
                  <HomeOffice src="/wfhome.svg" />
                  <HomeOfficeText>{data.internshipType}</HomeOfficeText>
                </WorkFrom>
                <Applicants>
                  <Text>20 Days ago</Text>
                  <Text>150 Applicants</Text>
                </Applicants>
              </AboutInternship>
            </Data>
          </Wrapper>
        );
      })}
    </ListCardWrap>
  );
}
