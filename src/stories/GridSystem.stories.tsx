import React from 'react'
import { Box } from "@chakra-ui/react"

import { Meta } from '@storybook/react';

export default {
  title: 'Global Styling/Grid Layout',
} as Meta;

const columns = 12
const arr = Array.from(Array(columns).keys()).slice(1)

export const Grid: React.VFC<unknown> = () => (
  <Box className="grid">
    {arr.map(val => (
      <>
        <Box className={`gcol-${val}`} bgColor="gray.200">Col {val}</Box>
        <Box className={`gcol-${columns - val}`} bgColor="gray.200">Col {columns - val}</Box>
      </>
    ))}
  </Box>);


export const Center: React.VFC<unknown> = () => (
  <Box className="grid">
    {arr.reduce((acc,cur) => {
      if (cur % 2 === 0) {
        return [...acc, (
          <>
            <Box className={`gcol-${cur} center`} bgColor="gray.200">Col {cur} Center</Box>
          </>
        )]
      }
      return acc
    }, [])}
  </Box>);


export const Breakpoints: React.VFC<unknown> = () => (
  <Box className="grid">
    <Box className="gcol-sm-8 gcol-lg-6 center" bgColor="gray.200">
      gcol-sm-8 gcol-lg-6 center
    </Box>
    <Box className="gcol-sm-12 gcol-md-8 gcol-lg-6 " bgColor="gray.200">
      gcol-sm-12 gcol-md-8 gcol-lg-6 
    </Box>
    <Box className="gcol-sm-6 gcol-md-4 gcol-xl-3" bgColor="gray.200">
      gcol-sm-6 gcol-md-4 gcol-xl-3
    </Box>
    <Box className="gcol-sm-6 gcol-md-4 gcol-xl-3" bgColor="gray.200">
      gcol-sm-6 gcol-md-4 gcol-xl-3
    </Box>
    <Box className="gcol-sm-6 gcol-md-4 gcol-xl-3" bgColor="gray.200">
      gcol-sm-6 gcol-md-4 gcol-xl-3
    </Box>
    <Box className="gcol-sm-6 gcol-md-4 gcol-xl-3" bgColor="gray.200">
      gcol-sm-6 gcol-md-4 gcol-xl-3
    </Box>
    <Box className="gcol-sm-6 gcol-md-4 gcol-xl-3" bgColor="gray.200">
      gcol-sm-6 gcol-md-4 gcol-xl-3
    </Box>
  </Box>);