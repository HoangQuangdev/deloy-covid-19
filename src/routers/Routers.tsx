/* eslint-disable react-refresh/only-export-components */
import * as React from 'react';
import MainLayout from '../layouts/MainLayout';
import { R_Home } from './PathRouter';
import { Box } from '@mui/material';

const PageHome = React.lazy(() => import('../pages/PageHome'));

interface Route {
  path: string;
  name: string;
  element: React.ReactElement;
  elementPageLogin: React.ReactElement;
  isPrivate: boolean;
}

export const routes: Route[] = [
  {
    path: R_Home.path,
    name: R_Home.name,
    element: (
      <MainLayout>
        <PageHome />
      </MainLayout>
    ),
    elementPageLogin: <Box />,
    isPrivate: false,
  },
  {
    path: "*",
    name: R_Home.name,
    element: (
      <MainLayout>
        <Box>Notound</Box>
      </MainLayout>
    ),
    elementPageLogin: <Box />,
    isPrivate: false,
  },
];
