import { useEffect } from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectUserName, selectUserPhoto, setUserLoginDetails, setSignOutState } from "../features/user/userSlice";

const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
          if (user) {
            setUser(user);
            history.push("/home");
          }
        });
      }, [userName]);

    const handleAuth = () => {
        if (!userName) {
        auth.signInWithPopup(provider).then((result) => {
            setUser(result.user);
            console.log(result);
        }).catch((error) => {
            alert(error.message);
        });
    }
    else if (userName) {
        auth
          .signOut()
          .then(() => {
            dispatch(setSignOutState());
            history.push("/");
          })
          .catch((err) => alert(err.message));
      }

    };

    const setUser = (user) => {
        dispatch(
          setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
          })
        );
      };
    return (
        <Nav>
            <Logo>
                <img src="/images/logo.svg" alt="" />
            </Logo>
            {
                !userName ? (<Signin onClick={handleAuth}>Signin</Signin>)
                    : (
                    <>
                        <Menu>
                            <a href="/home">
                                <img src='/images/home-icon.svg' alt="HOME" />
                                <span>HOME</span>
                            </a>
                            <a>
                                <img src='/images/search-icon.svg' alt="SEARCH" />
                                <span>SEARCH</span>
                            </a>
                            <a>
                                <img src='/images/watchlist-icon.svg' alt="WATCHLIST" />
                                <span>WATCHLIST</span>
                            </a>
                            <a>
                                <img src='/images/original-icon.svg' alt="ORIGINALS" />
                                <span>ORIGINALS</span>
                            </a>
                            <a>
                                <img src='/images/movie-icon.svg' alt="MOVIES" />
                                <span>MOVIES</span>
                            </a>
                            <a>
                                <img src='/images/series-icon.svg' alt="SERIES" />
                                <span>SERIES</span>
                            </a>
                        </Menu>
                        <SignOut>
                        <UserImg src={userPhoto} alt={userName} />
                        <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
                        </SignOut>
                    </>
                     ) }
        </Nav>
    );
};

const Nav = styled.nav`
Position:fixed
top: 0;
left:0;
height:70px;
backgroud-color: #090b13;
display:flex;
justify-content: space-between;
padding:0 36px;
align-items: center;
letter-spacing:16px;
z-index: 3;
`;

const Logo = styled.a`
padding:0;
width: 80px;
margin-top:3px;
max-height:80px;
font-size:0;
display:inline-block;
    img{
        display:block;
         width 125%;
       }
`;

const Menu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin:0px;
padding:0px;
position: relative;
margin-right: auto;
margin-left: 50px;

a{
    display:flex;
    align-items: center;
    padding:0 12px;

img{
    height:25px;
    min-width:25px;
    width :25px;
    z-index:auto;
}
span{
    colour:rgb(249,249,249);
    font-size: 15px;
    letter-spacing:1.5px;
    line-height:1.08;
    padding:2px 0px;
    white-space: nowrap;
    position:relative;

&:before{
    content:"";
    background-color: rgb(249,249,249);
    border-radius: 0px 0px 4px 4px;
    bottom: -6px;
    height:2px;
    opacity:0;
    position:absolute;
    right:0px;
    left:0px;
    transform-origin:left center;
    transform:scaleX(0);
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.4,0.3);
    visibility:hidden;
    width:auto;

    }
}
&:hover {
    span:before{
    transform:scaleX(1);
    visibility:visible;
    opacity:1;
    
            }   
    
        }

    }
}
`;

const Signin = styled.a`
background-color: rgba(0, 0, 0, 0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius:6px;
transition: all .2s ease 0s;

&:hover {
    background-color: #f9f9f9;
    colour: #000000;
    border-color: transparent;
}
`;

const UserImg = styled.img`
  height: 100%;
`;

const DropDown = styled.div`
  position: absolute;
  top: 48px;
  right: 0px;
  background: rgb(19, 19, 19);
  border: 1px solid rgba(151, 151, 151, 0.34);
  border-radius: 4px;
  box-shadow: rgb(0 0 0 / 50%) 0px 0px 18px 0px;
  padding: 10px;
  font-size: 14px;
  letter-spacing: 3px;
  width: 100px;
  opacity: 0;
`;

const SignOut = styled.div`
  position: relative;
  height: 48px;
  width: 48px;
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;

  ${UserImg} {
    border-radius: 50%;
    width: 100%;
    height: 100%;
  }

  &:hover {
    ${DropDown} {
      opacity: 1;
      transition-duration: 1s;
    }
  }
`;


export default Header;