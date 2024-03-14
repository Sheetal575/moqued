"use client";
import { useState } from "react";
import "./globals.css";
import Providers from "./providers";
import ThemeSwitcher from "./theme-switcher";

const panAnimatedSvg = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    width={25}
    fill="currentColor"
    id="cookIcon"
  >
    <g>
      <g>
        <path d="m495.4,206.3c-7.7-8.2-20.7-8.6-28.9-0.8l-131.4,124h-303.7c-11.3,0-20.4,9.1-20.4,20.4 0,83.3 67.8,151.1 151.2,151.1h50.6c80.4,0 146.3-63.1 150.9-142.4l130.9-123.5c8.2-7.7 8.6-20.6 0.8-28.8zm-282.6,253.9h-50.6c-53.9,0-98.9-38.8-108.5-89.9h267.5c-9.6,51.1-54.5,89.9-108.4,89.9z" />
        <path d="M97.6,254.9c11.3,0,20.4-9.1,20.4-20.4V114c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4v120.5    C77.2,245.8,86.3,254.9,97.6,254.9z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            dur="1s"
            keyTimes="0;0.5;1"
            repeatCount="indefinite"
          />
        </path>
        <path d="m271.1,254.9c11.3,0 20.4-9.1 20.4-20.4v-120.5c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v120.5c-2.84217e-14,11.3 9.1,20.4 20.4,20.4z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            dur="1s"
            keyTimes="0;0.5;1"
            begin="0.2s"
            repeatCount="indefinite"
          />
        </path>
        <path d="m184.3,173.9c11.3,0 20.4-9.1 20.4-20.4v-122c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v122c0,11.2 9.2,20.4 20.4,20.4z">
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0; 0 20; 0 0"
            dur="1s"
            keyTimes="0;0.5;1"
            begin="0.4s"
            repeatCount="indefinite"
          />
        </path>
      </g>
    </g>
  </svg>
);

const panSvg = (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 500 500"
    width={25}
    stroke="white"
    fill="currentColor"
    enable-background="new 0 0 512 512"
  >
    <g>
      <g>
        <path d="m495.4,206.3c-7.7-8.2-20.7-8.6-28.9-0.8l-131.4,124h-303.7c-11.3,0-20.4,9.1-20.4,20.4 0,83.3 67.8,151.1 151.2,151.1h50.6c80.4,0 146.3-63.1 150.9-142.4l130.9-123.5c8.2-7.7 8.6-20.6 0.8-28.8zm-282.6,253.9h-50.6c-53.9,0-98.9-38.8-108.5-89.9h267.5c-9.6,51.1-54.5,89.9-108.4,89.9z" />
        <path d="M97.6,254.9c11.3,0,20.4-9.1,20.4-20.4V114c0-11.3-9.1-20.4-20.4-20.4c-11.3,0-20.4,9.1-20.4,20.4v120.5    C77.2,245.8,86.3,254.9,97.6,254.9z" />
        <path d="m271.1,254.9c11.3,0 20.4-9.1 20.4-20.4v-120.5c0-11.3-9.1-20.4-20.4-20.4-11.3,0-20.4,9.1-20.4,20.4v120.5c-2.84217e-14,11.3 9.1,20.4 20.4,20.4z" />
        <path d="m184.3,173.9c11.3,0 20.4-9.1 20.4-20.4v-122c0-11.3-9.1-20.4-20.4-20.4s-20.4,9.1-20.4,20.4v122c0,11.2 9.2,20.4 20.4,20.4z" />
      </g>
    </g>
  </svg>
);

export default function RootLayout({ children }: any) {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    <html lang="en">
      <body>
        <div
          style={{ display: "flex", flexDirection: "column", height: "100%" }}
        >
          <Providers>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "16px",
                gap: "10px",
                boxShadow: "rgba(0, 0, 0, 0.04) 0px 3px 5px",
              }}
            >
              <div
                style={{ flex: "1" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {isHovered ? panAnimatedSvg : panSvg}
              </div>
              <ThemeSwitcher />
            </div>
            <div style={{ flex: "1" }}>{children}</div>
          </Providers>
        </div>
      </body>
    </html>
  );
}
