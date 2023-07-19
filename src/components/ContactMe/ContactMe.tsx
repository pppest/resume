import Email from "./Email";
import Telegram from "./Telegram";
import Telephone from "./Telephone";

function ContactMe() {
  return (
    <section className="flex flex-col gap-1 justify-center items-center w-[80vw] container">
      <h1 className="text-4xl font-display normal-case whitespace-nowrap">Contact me!</h1>
      <div className="flex flex-row space-x-4 mt-2 items-center justify-center">
        <Telegram />
        {/* <Email /> */}
        {/* <Telephone /> */}
      </div>
    </section>
  );
}

export default ContactMe;
