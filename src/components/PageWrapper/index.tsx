import React from 'react';
import { Container } from './styles';

const PageWrapper: React.FC = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    )
};

export default PageWrapper;
