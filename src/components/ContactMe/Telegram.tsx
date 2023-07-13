import Link from "next/link";

function Telegram() {
  const telegramLink = "https://t.me/pppest";
  return (
    <Link href={telegramLink} target={"_blank"}>
      <div className="flex flex-row h-8 font-primaryFont text-4xl gap-4 normal-case whitespace-nowrap justify-center items-center">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" className="h-full w-full">
          <path
            d="M66.964 134.874s-32.08-10.062-51.344-16.002c-17.542-6.693-1.57-14.928 6.015-17.59 7.585-2.66 186.38-71.948 194.94-75.233 8.94-4.147 19.884-.35 14.767 18.656-4.416 20.407-30.166 142.874-33.827 158.812-3.66 15.937-18.447 6.844-18.447 6.844l-83.21-61.442z"
            fill="none"
            stroke="#000"
            strokeWidth="10"
          />
          <path d="M92.412 201.62s4.295.56 8.83-3.702c4.536-4.26 26.303-25.603 26.303-25.603" fill="none" stroke="#000" strokeWidth="10" />
          <path
            d="M66.985 134.887l28.922 14.082-3.488 52.65s-4.928.843-6.25-3.613c-1.323-4.455-19.185-63.12-19.185-63.12z"
            fillRule="evenodd"
            stroke="#000"
            strokeWidth="10"
            strokeLinejoin="bevel"
          />
          <path
            d="M66.985 134.887s127.637-77.45 120.09-71.138c-7.55 6.312-91.168 85.22-91.168 85.22z"
            fillRule="evenodd"
            stroke="#000"
            strokeWidth="9.67"
            strokeLinejoin="bevel"
          />
        </svg>
        <span className="text-xl">{telegramLink}</span>
      </div>
    </Link>
  );
}

export default Telegram;
