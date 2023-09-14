import { trans } from "@mongez/localization";
import { MdOutlineDeliveryDining } from "react-icons/md";
export default function HeaderContact() {
  return (
    <div className="hidden xl:flex flex-row items-center n">
      <MdOutlineDeliveryDining className="text-[48px] text-[#079447]" />
      <div>
        <span className="text-light text-[13px] font-medium">
          {trans("Call and Order in")}
        </span>
        <p className="text-primary text-[24px] font-bold leading-[1em]">
          {trans("+1 718-904-4450")}
        </p>
      </div>
    </div>
  );
}
