import { CiBellOn } from "react-icons/ci";
import { FaSquareCheck } from "react-icons/fa6";
import { IoStatsChartOutline } from "react-icons/io5";
import { CiStopwatch } from "react-icons/ci";

export const RectCardData = [
     {
          title: "Jack F",
          subTitle: "Ex Blackrock PM",
          description:
               "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
     },
     {
          title: "Yash P",
          subTitle: "Research, 3poch Crypto Hedge Fund",
          description:
               "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
     },
     {
          title: "Shiv S",
          subTitle: "Co-Founder Magik Labs",
          description:
               "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
     },
];
export const squData = [
     {
          icon: <CiBellOn />,
          icon2: "save",
          isInput: true,
          isDrop: false,
          isQuotes: false,
          dropText: "",
          quotes: "",

          description: "We’ll be sending notifications to you here",
     },
     {
          icon: <IoStatsChartOutline />,
          icon2: <FaSquareCheck />,
          isInput: false,
          isDrop: true,
          isQuotes: false,
          dropText: "$1,000.00 ",
          quotes: "",

          description: "Notify me when any walletsmove more than",
     },
     {
          icon: <CiStopwatch />,
          icon2: <FaSquareCheck />,
          isInput: false,
          isDrop: true,
          isQuotes: true,
          quotes: "become active",
          dropText: "> 30 days ",
          description: "Notify me when any wallet dormant for",
     },
];
