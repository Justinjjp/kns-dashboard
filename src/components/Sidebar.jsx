import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { BsFillChatTextFill } from "react-icons/bs";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu, GiWingedShield } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";




export default function Sidebar() {
    const [currentLink, setCurrentLink] = useState(1);
    const [navbarState, setNavbarState] = useState(false);
  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });

    sr.reveal(
      `
          .brand,
          .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);
    return (
    <>
        <Section>
         <div className='top'>
            <div className='brand'>
                <GiWingedShield />
                <span>Nobel Knight</span>
            </div>
              <div className='toggle'>
              </div>
                 <div className='links'>
                 <ul>
                       <li className={currentLink === 1 ?'active': 'none'}
                       onClick={() => setCurrentLink(1)}
                       >
                       <a href='#'>
                            <MdSpaceDashboard />
                            <span> Dashboard</span>
                            </a>
                        </li>

                        <li className={currentLink === 2 ?'active': 'none'}
                        onClick={() => setCurrentLink(2)}
                        >
                        <a href='#'>
                            <RiDashboard2Fill />
                            <span> Securities</span>
                            </a>
                        </li>

                        <li className={currentLink === 3 ?'active': 'none'}
                        onClick={()  => setCurrentLink(3)}
                        >
                        <a href='#'>
                            <FaAddressCard />
                            <span> Payment Details</span>
                            </a>
                        </li>

                        <li className={currentLink === 4 ?'active': 'none'}
                        onClick={()  => setCurrentLink(4) }
                        >
                            <a href='#'>
                            <GiTwirlCenter />
                            <span> Map </span>
                            </a>
                        </li>

                        <li className={currentLink === 5?'active': 'none'}
                        onClick={() => setCurrentLink(5) }
                        >
                        <a href='#'>
                            <BsFillChatTextFill />
                            <span> Secuirties Training</span>
                            </a>
                        </li>

                        <li className={currentLink === 6 ?'active': 'none'}
                        onClick={() => setCurrentLink(6)}
                        >
                        <a href='#'>
                            <IoSettings />
                            <span> Settings</span>
                            </a>
                        </li>
                  </ul>
                 </div>
         </div>
         <div className='logout'>
            <a href='#'><FiLogOut />
            <span className='logout'>Logout</span>
            </a>
         </div>
        </Section>
     </>
     );
    }

    const Section = styled.section`
      position: fixed;
     left: 0;  
      background-color: #212121;
      height: 100vh;
      width: 18vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 2rem 0;
      gap: 2rem;
    .top {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            width: 100%;
            .toggle{
                display: none;          
            }
        .brand{
            width: 100%;
            display: flex;
            justify-content: center;
            align-item: center;
            gap: 2rem;
            svg{
                color:#ffc107;
                font-size: 2rem;
            }
            span {
                font-size: 2rem;
                color:#ffc107;
            }
        }
   .links {
       display: flex;
       justify-content: center;
       ul{
           list-style-type: none;
           display: flex;
           flex-direction: column;
           gap: 1rem;
           li{
               padding: 0.6rem 1rem;
               broder-radius: 0.6rem;
               &:hover {
                   background-color: #ffc107;
                   a {
                       color: black;
                   }
               }
               a {
                   text-decoration: none;
                   display: flex;
                   gap: 1rem;
                   color: #fff;
               }
           }
           .active {
            background-color: #ffc107;
            a{
                color:#000;
            }
           }
        }
       }
   }

   .logout {
    padding: 0.3rem 1rem;
    border-radius: 0.6rem;
    &:hover {
      background-color: #da0037;
    }
    a {
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      color: white;
    }
  }
    
    `;
