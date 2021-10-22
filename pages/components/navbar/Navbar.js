import React, { useState } from "react";
import {
  Container,
  Links,
  StyledLink,
  Button,
  Image,
  ImageContainer,
  LinkContainer,
  Menu,
  Avatar,
} from "./styles/Navbar.styled";
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import Link from "next/link";

function Navbar() {
  const { data: session, status } = useSession();
  console.log({ session, status });
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <Container>
      <ImageContainer>
        <Image src="/logo.svg" />
      </ImageContainer>
      <LinkContainer>
        <Menu src="./menu.svg" onClick={handleClick}></Menu>

        <Links onClick={handleClick} click={click}>
          <StyledLink>Post an Internship</StyledLink>
          <StyledLink>Find Internships</StyledLink>
          {session?.user ? (
            <Avatar
              onClick={() => signOut()}
              src={session?.user?.image}
              alt=""
            />
          ) : (
            <>
              <Link href="/signin">
                <StyledLink>Sign In</StyledLink>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </>
          )}
        </Links>
      </LinkContainer>
    </Container>
  );
}

export default Navbar;
