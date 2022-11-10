import React, { ReactNode } from "react";
import styled from "styled-components";
import { AppBar, Container, Toolbar, Box, Typography } from "@mui/material";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Image from "next/image";
import imgLogo from "../Assets/Images/logo_top.png";

export function Header() {
  return (
    <StyledComponents>
      <BoxLogo01>
        <Image src={imgLogo} width={"100%"} height={"100%"} alt="" />
      </BoxLogo01>
      <BoxConnect01>
        <ConnectButton />
      </BoxConnect01>
      {/* <AppBar position='static'>
                <Container maxWidth={false}>
                    <Toolbar disableGutters>
                        <Box
                            sx={{ 
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' }
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white',
                                }}
                            >
                                <Link
                                    href='/'
                                    style={{
                                        marginRight: '1rem'
                                    }}
                                >
                                    Home
                                </Link>
                            </Typography>
                            {pages.map((page) => (
                                    <Typography
                                        key={page}
                                        sx={{
                                            color: 'white',
                                        }}
                                    >
                                        <Link
                                            href={'/'+page}
                                            style={{
                                                marginRight: '1rem'
                                            }}
                                        >
                                            {page}
                                        </Link>
                                    </Typography>
                            ))}
                        </Box>
                        <Box
                            sx={{ flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                flexDirection: 'row-reverse'
                            }}
                        >
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                            >
                                <Link
                                    href='/MyNfts'
                                    style={{
                                        marginRight: '1rem'
                                    }}
                                >
                                    My NFTs
                                </Link>
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                            >
                                <Link
                                    href='/MyPools'
                                    style={{
                                        marginRight: '1rem'
                                    }}
                                >
                                    My Pools
                                </Link>
                            </Typography>
                            <Typography
                                sx={{
                                    color: 'white'
                                }}
                            >
                                <Link
                                    href='/MyVaults'
                                    style={{
                                        marginRight: '1rem'
                                    }}
                                >
                                    My Vaults
                                </Link>
                            </Typography>
                        </Box>
                        <ConnectButton />
                    </Toolbar>
                </Container>
            </AppBar> */}
    </StyledComponents>
  );
}

const StyledComponents = styled(Box)`
  display: flex;
  width: 100%;
  height: 83px;
  min-height: 83px;
  background-color: rgba(141, 141, 141);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
  justify-content: space-between;
`;

const BoxLogo01 = styled(Box)`
  display: flex;
`;

const BoxConnect01 = styled(Box)`
  display: flex;
`;

export default Header;
