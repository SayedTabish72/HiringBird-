import React, { useContext } from "react";
import { InternshipContext } from "../../context/internship.context";
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
  const { setInternshipId } = useContext(InternshipContext);
  return (
    <ListCardWrap>
      {internships.map((data) => {
        return (
          <Wrapper key={data.id} onClick={() => setInternshipId(data.id)}>
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
                      {(() => {
                        if (data.compensation == true) {
                          return (
                            <>
                              <StipendRange>
                                {data.minStipen} - {data.maxStipen} INR
                              </StipendRange>
                            </>
                          );
                        } else if (data.compensation == false);
                        {
                          return (
                            <>
                              <StipendRange>Unpaid</StipendRange>
                            </>
                          );
                        }
                      })()}
                    </Stipend>
                    <Time>
                      <TimeIcon src="/calendar.svg" />
                      <TimeText>{data.internshipPeriod} Months</TimeText>
                    </Time>
                    <StartInternship>
                      <StartIcon src="/calendar.svg" />
                      <StartText>
                        {new Date(data.startDate).toLocaleDateString("en-GB")}
                      </StartText>
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
                  <Text>
                    {Math.ceil(
                      (new Date() - new Date(data.startDate)) /
                        (1000 * 60 * 60 * 24)
                    )}{" "}
                    Days ago
                  </Text>
                  <Text>{data.numberOfApplicants} Applicants</Text>
                </Applicants>
              </AboutInternship>
            </Data>
          </Wrapper>
        );
      })}
    </ListCardWrap>
  );
}
