import { Link } from 'react-router-dom'
import { FaCalendar, FaUser, FaHome } from 'react-icons/fa'
import { AiOutlineSchedule } from 'react-icons/ai'
import LogoHangar from '../../public/LogoHangar.svg'

import {
    Body,
    Main,
    PageContainer,
    LogoCard,
    Logo,
    TextHome,
    TitleTextHome,
    SubtitleTextHome,
    CardButtonSchedule,
    ButtonSchedule,
    Footer,
    TabNavigation,
    StyledLink,
} from '../styles'

function Home() {
    return (
        <Body>
            <Main>
                <PageContainer>
                    <LogoCard>
                        <Logo
                            src={LogoHangar}
                            alt="Logo Hangar"
                        />
                    </LogoCard>

                    <TextHome>
                        <TitleTextHome>
                            Quadra profissional à sua disposição
                        </TitleTextHome>
                        <SubtitleTextHome>
                            Agende seu horário e aproveite o melhor do tênis
                        </SubtitleTextHome>
                    </TextHome>

                    <CardButtonSchedule>
                        <ButtonSchedule>Agendar agora</ButtonSchedule>
                    </CardButtonSchedule>
                </PageContainer>

                <Footer>
                    <div></div>
                    <TabNavigation>
                        <StyledLink
                            active
                            to="/"
                            
                        >
                            <FaHome className="Icon" />
                            Home
                        </StyledLink>
                        <StyledLink to="/agendar">
                            <FaCalendar className="Icon" />
                            Agendar
                        </StyledLink>
                        <StyledLink to="/reservas">
                            <AiOutlineSchedule className="Icon" /> Reservas
                        </StyledLink>

                        <StyledLink to="/perfil">
                            <FaUser className="Icon" />
                            Perfil
                        </StyledLink>
                    </TabNavigation>
                </Footer>
            </Main>
        </Body>
    )
}

export default Home
