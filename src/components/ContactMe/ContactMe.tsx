import Telegram from "./Telegram";
import Email from "./Email";
import Discord from "./Discord";

function ContactMe() {
  return (
    <section className="flex flex-col gap-8 justify-center items-center w-[60vw] container">
      <h1 className="text-6xl font-display normal-case whitespace-nowrap">Contact me!</h1>
      <div className="flex flex-col lg:flex-row space-x-8 items-center justify-center">
        <Telegram />
        {/* <Discord /> */}
        <Email />
      </div>
    </section>
  );
}

export default ContactMe;
