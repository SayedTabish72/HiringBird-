import React from "react";
import Header from "../../../common/user/components/Header";
import styled from "styled-components";
import dynamic from "next/dynamic";

const FileViewer = dynamic(() => import("react-file-viewer"), {
  ssr: false,
});

const Body = () => {
  return (
    <div>
      <Header />
      <CardHeader>
        <ul>
          <li>
            <a href="#">
              Resume.pdf{" "}
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.999739 16H13.0003C13.2536 16.0001 13.4975 16.0963 13.6827 16.2693C13.8678 16.4423 13.9804 16.6791 13.9977 16.9318C14.0149 17.1846 13.9356 17.4345 13.7757 17.6311C13.6158 17.8276 13.3873 17.9561 13.1363 17.9907L13.0003 18H0.999739C0.746363 17.9999 0.502462 17.9037 0.31732 17.7307C0.132178 17.5577 0.0195974 17.3209 0.00232728 17.0682C-0.0149428 16.8154 0.0643848 16.5655 0.224281 16.3689C0.384178 16.1724 0.612722 16.0439 0.863733 16.0093L0.999739 16H13.0003H0.999739ZM6.86399 0.00933329L7 0C7.24166 1.01905e-05 7.47514 0.0875237 7.65727 0.246356C7.8394 0.405189 7.95784 0.624595 7.99071 0.864L8.00004 1V11.2507L11.0068 8.24533C11.1764 8.07583 11.4012 7.97288 11.6404 7.95526C11.8795 7.93764 12.117 8.00651 12.3096 8.14933L12.4216 8.24533C12.5911 8.4149 12.694 8.63972 12.7117 8.87883C12.7293 9.11794 12.6604 9.35542 12.5176 9.548L12.4216 9.66L7.7067 14.3733C7.53737 14.5427 7.31289 14.6457 7.07407 14.6635C6.83525 14.6814 6.59794 14.613 6.40531 14.4707L6.2933 14.3733L1.57843 9.66C1.3995 9.48157 1.29476 9.24201 1.28526 8.9895C1.27576 8.73699 1.36222 8.49024 1.52724 8.29888C1.69227 8.10751 1.92363 7.98571 2.1748 7.95797C2.42597 7.93023 2.67834 7.9986 2.88115 8.14933L2.99316 8.24533L5.99996 11.2533V1C5.99997 0.75835 6.08748 0.524877 6.24632 0.342759C6.40516 0.160641 6.62458 0.0421977 6.86399 0.00933329L7 0L6.86399 0.00933329Z"
                  fill="#F26A7E"
                />
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              Change Resume{" "}
              <svg
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 11.5V14.8333C16 15.2754 15.8244 15.6993 15.5118 16.0118C15.1993 16.3244 14.7754 16.5 14.3333 16.5H2.66667C2.22464 16.5 1.80072 16.3244 1.48816 16.0118C1.17559 15.6993 1 15.2754 1 14.8333V11.5"
                  stroke="#F26A7E"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12.6667 5.66667L8.50004 1.5L4.33337 5.66667"
                  stroke="#F26A7E"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.5 1.5V11.5"
                  stroke="#F26A7E"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </li>
        </ul>
      </CardHeader>

      <PdfContainer>
        <FileViewer fileType="pdf" filePath="/resume.pdf" />
      </PdfContainer>
    </div>
  );
};

export default Body;

const CardHeader = styled.div`
  margin-top: 4rem;
  margin-bottom: 2rem;
  ul {
    display: flex;
    list-style: none;
    gap: 1.5rem;
    li {
      a {
        color: #f26a7e;
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }
    }
  }
`;

const PdfContainer = styled.div`
  .pg-viewer-wrapper {
    overflow-y: scroll;
    ::-webkit-scrollbar {
      display: none;
    }
    height: 74vh;
  }
  canvas {
    max-width: 100%;
    max-height: 100%;
  }
`;
