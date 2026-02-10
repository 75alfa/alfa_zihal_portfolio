import React from "react";

const BALSAMIQ_CSS = `
    .balsamiq-font {
      font-family: 'Architects Daughter', 'Comic Sans MS', 'Comic Sans', cursive;
    }

    .sketch-border {
      border: 2px solid #000;
      border-radius: 4px;
      box-shadow: 2px 2px 0px 0px #000;
    }

    .sketch-border-thick {
      border: 3px solid #000;
      border-radius: 4px;
      box-shadow: 3px 3px 0px 0px #000;
    }

    .sketch-card {
      border: 2px solid #000;
    }

    .enterprise-stack {
      position: relative;
    }

    .enterprise-stack::after {
      content: '';
      position: absolute;
      top: 4px;
      left: 4px;
      right: -4px;
      bottom: -4px;
      border: 2px solid #000;
      background: white;
      z-index: -1;
      border-radius: 4px;
    }

    .tape-effect {
      position: relative;
    }

    .tape-effect::before {
      content: '';
      position: absolute;
      top: -12px;
      left: 50%;
      transform: translateX(-50%) rotate(-2deg);
      width: 80px;
      height: 25px;
      background: rgba(255, 255, 200, 0.6);
      border: 1px solid rgba(0,0,0,0.1);
      z-index: 20;
    }

    .graph-paper {
      background-color: #ffffff;
      background-image: 
        linear-gradient(#e5e5e5 1px, transparent 1px),
        linear-gradient(90deg, #e5e5e5 1px, transparent 1px);
      background-size: 20px 20px;
    }

    .sketch-button {
      background: #fff;
      border: 2px solid #000;
      padding: 4px 12px;
      border-radius: 4px;
      transition: box-shadow 0.1s, transform 0.1s;
      box-shadow: 2px 2px 0px 0px #000;
    }

    .sketch-button:active {
      transform: translate(1px, 1px);
      box-shadow: 1px 1px 0px 0px #000;
    }

    .sketch-input {
      border: 2px solid #000;
      padding: 8px 12px;
      border-radius: 4px;
      background: #fff;
      outline: none;
      font-family: inherit;
    }

    .hand-drawn-line {
      height: 2px;
      background: #000;
      width: 100%;
      transform: rotate(-0.5deg);
    }

    .typing-cursor {
      display: inline-block;
      width: 3px;
      height: 1em;
      background-color: #000;
      margin-left: 4px;
      animation: blink 0.8s infinite;
      vertical-align: middle;
    }

    @keyframes blink {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
`;

export const BalsamiqStyles = React.memo(function BalsamiqStyles() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: BALSAMIQ_CSS }} />
    </>
  );
});
