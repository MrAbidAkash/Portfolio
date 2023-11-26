import Link from "next/link";
import { FiMail } from "react-icons/fi";
import { TbMapSearch } from "react-icons/tb";


const Contact = () => {
    return (
      <div className="space-y-14 ">
        <div className="space-y-2">
          <h2 className="text-xl font-bold neel">CONTACT</h2>
          <h2 className="text-2xl font-bold ">
            Don&apos;t be shy! Hit me up! <span className="animate-bounce">👇</span>
          </h2>
        </div>
        <div className="flex gap-10 flex-wrap">
          <div className="flex items-center space-x-5">
            <span className="text-3xl neel p-3 rounded-full shadow-md">
              <TbMapSearch />
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-xl">Location</span>
              <Link href="https://maps.app.goo.gl/3afwtSifREtMywHY9">
                Dhaka, Bangladesh
              </Link>
            </div>
          </div>
          <div className="flex  items-center space-x-5">
            <span className="text-3xl  neel p-3 rounded-full shadow-md">
              <FiMail />
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-xl">Mail</span>
              <Link href="mailto:MrAbidAkash@gmail.com">
                MrAbidAkash@gmail.com
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Contact;