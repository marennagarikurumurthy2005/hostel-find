import React, { useContext } from "react";
import batteries from "./assets/batteries.png";
import household from "./assets/household.png";
import nearest from "./assets/recycle.png";
import recycle from "./assets/recycle2.png";
import "./Chat.css";
import { Context } from "./context/context";
import Loading from "./components/loading";
const Chat = () => {
  Loading;
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);
  return (
    <>
      <div className="main flex flex-1 flex-col w-full min-h-full align-middle justify-center relative">
        {!showResult ? (
          <>
            <div className="top hidden">
              <div className="headings w-full ml-14 text-[#c4c7c5] select-none">
                <p>
                  <span className="titleheading">Hi there! Welcome </span>
                </p>
                <p className="text-xl mt-1 text-[#333333] font-bold">
                  How can I help you with your waste disposal or recycling
                  questions?
                </p>
              </div>
              <div className="cards relative">
                <div className="card">
                  <p>What can I recycle in my area?</p>
                  <img src={recycle} alt="recycleimg" width={30} height={25} />
                </div>
                <div className="card">
                  <p>
                    How do I dispose of hazardous waste like batteries or paint?
                  </p>
                  <img
                    src={batteries}
                    alt="recycleimg"
                    width={35}
                    height={25}
                  />
                </div>
                <div className="card">
                  <p>What are some tips for reducing my household waste?</p>
                  <img
                    src={household}
                    alt="recycleimg"
                    width={35}
                    height={25}
                  />
                </div>
                <div className="card">
                  <p>Where is my nearest recycling center?</p>
                  <img src={nearest} alt="recycleimg" width={35} height={25} />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="resultMain h-full p-28 ">
            <div className="resultChat">
              <div className="resultTitle flex flex-row gap-3">
                <img src={household} alt="recycleimg" className="w-13 h-13 " />
                <p className="text-lg">{recentPrompt}</p>
              </div>
              {loading ? (
                <>
                  <Loading />
                </>
              ) : (
                <div
                  className="resultData flex flex-row gap-3
              mt-8 "
                >
                  <img src={nearest} alt="recycleimg" className="w-13 h-13" />
                  <p
                    dangerouslySetInnerHTML={{ __html: resultData }}
                    className="text-lg"
                  ></p>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="bottomchat  flex items-center justify-between ">
          <input
            type="text"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            value={input}
            placeholder="ask wastey"
            className="input w-full p-4 pr-5 mb-5.5 rounded-4xl relative flex-1"
          />
          <div
            className="send absolute right-8 top-5 cursor-pointer"
            onClick={() => {
              onSent();
              setInput("");
            }}
          >
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAA5klEQVR4nO3ULUvEQRCA8Z8oeiBoMAkWtVgsVo1XLWe/aDVajdbDDyAYrX4FMV04o+WCyeQLWETOE2EWtnj8xV003AMTlp2ZB2ZfmPID+uhiTiXGEUMcY7mWIMULelgrLejgOlu/4RzbpQSJHVzgPdv7Eu9jpoQgsY5TPGU5dzhCq4QgsRRN77PcB5xgRQNS0RYWJuTNx3UeZDWvOMNmE0GKx3gblzGiQ7SxkdXs4QofUTOKdfs3gtUGgt0/HVH1Q/7umj5nObcxsta/fGid2l/FuPZnN4zDXCzVOHGDA8yWbjzFJD4B3pVyKx3i0DkAAAAASUVORK5CYII="
              alt="sent"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chat;
