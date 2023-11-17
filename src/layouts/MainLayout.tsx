import { Container } from '@mui/material';
import React, { ReactNode } from 'react';

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (

      <div style={{ background :"#EEEEEE", minHeight: "100vh" , height: "auto"}}>
        <Container maxWidth="lg" >
          {children}
        </Container>
      </div>
  );
};

export default MainLayout;