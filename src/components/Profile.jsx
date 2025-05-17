import { Link } from 'react-router-dom'
import { FaCalendar, FaUser, FaHome } from 'react-icons/fa'
import { AiOutlineSchedule } from 'react-icons/ai'

import {
    Body,
    Main,
    PageContainer,
    Footer,
    TabNavigation,
    StyledLink,
} from '../styles'

function Profile() {
    return (
        <Body>
            <Main>
                <PageContainer>
                    <Footer>
                        <TabNavigation>
                            <StyledLink to="/">
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

                            <StyledLink
                                active
                                to="/perfil"
                            >
                                <FaUser className="Icon" />
                                Perfil
                            </StyledLink>
                        </TabNavigation>
                    </Footer>
                </PageContainer>
            </Main>
        </Body>
    )
}

export default Profile
