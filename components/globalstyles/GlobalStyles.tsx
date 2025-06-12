'use client';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --Background: #191919;
    --white: #FAF9F6;
    --light-gray: #dcdcdc;
    --link-color: #bdbdbd;
    --green: #2b892e;
    --emerald: #48d64c;
    
    /* Barbershop theme colors */
    --primary: #d4af37; /* Gold */
    --secondary: #191919; /* Dark */
    --text: #FAF9F6;
    --text-light: #777;
  }
    /* Praise and Sorts Mill Goudyfont variable from next/font */
    --font-praise: 'Praise', cursive;

    --font-sortsMillGoudy: 'Sorts Mill Goudy', serif;


  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    font-family: 'SF Pro Display', sans-serif;
    background-color: var(--Background);
    color: var(--white);
    /* scroll-snap-type: y mandatory; */
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
      width: 0.5rem;
      border-radius: 0.5rem;
      &-thumb {
        background: var(--link-color);
        border-radius: 0.5rem;
      }

      &-track {
        background: var(--Background);
      }
    }
  }

  /* Barbershop specific styles */
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Playfair Display', serif;
    margin: 0;
  }

  p {
    font-family: 'Poppins', sans-serif;
  }

  section {
    /* padding: 5rem 2rem; */
    scroll-snap-align: start;
    
    @media (max-width: 768px) {
      /* padding: 3rem 1rem; */
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }

  button {
    cursor: pointer;
    transition: all 0.3s ease;
  }

  /* Utility classes */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  .text-center {
    text-align: center;
  }
`;

// 'use client';

// import { createGlobalStyle } from 'styled-components';

// const styled = { createGlobalStyle };

// export const GlobalStyles = styled.createGlobalStyle`
//   :root {
//     --Background: #161616;

//     --white: #fff;
//     --light-gray: #dcdcdc;
//     --link-color: #bdbdbd;
//     --green: #2b892e;
//     --emerald: #48d64c;
//   }

//   * {
//     box-sizing: border-box;
//     padding: 0;
//     margin: 0;
//     -webkit-font-smoothing: antialiased;
//   }

//   html,
//   body {
//     max-width: 100vw;
//     overflow-x: hidden;
//     font-family: 'SF Pro Display', sans-serif;
//     background-color: var(--Background);
//     color: var(--white);
//     scroll-snap-type: y mandatory;

//     &::-webkit-scrollbar {
//       width: 0.5rem;
//       border-radius: 0.5rem;
//       &-thumb {
//         background: var(--link-color);
//         border-radius: 0.5rem;
//       }

//       &-track {
//         background: var(--Background);
//       }
//     }
//   }

//   a {
//     color: inherit;
//     text-decoration: none;
//   }

//   .parallax {
//     overflow: hidden;
//     margin: 0;
//     white-space: nowrap;
//     display: flex;
//     flex-wrap: nowrap;
//   }

//   .parallax .scroller {
//     display: flex;
//     white-space: nowrap;
//     display: flex;
//     flex-wrap: nowrap;
//   }

//   .scroller span {
//     display: block;
//     margin-right: 5rem;
//   }

//   .not_complete {
//     display: none;
//   }

//   .complete {
//   }
// `;
