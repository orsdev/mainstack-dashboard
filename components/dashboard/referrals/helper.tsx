import { GoogleIcon, InstagramIcon, LinkedInIcon } from "./icons";
import { IReferrals } from "./types";
import FacebookIcon from "remixicon-react/FacebookFillIcon";
// import GoogleIcon from "remixicon-react/GoogleFillIcon";
// import InstagramIcon from "remixicon-react/InstagramFillIcon";
// import LinkedInIcon from "remixicon-react/LinkedInFillIcon";

export const addColorsAndIconToData = (referrals: IReferrals[]) => {
  return referrals?.reduce((accumulator, item, index) => {
    switch (item.source?.toLowerCase()) {
      case "google":
        accumulator[index] = {
          ...item,
          icon: <GoogleIcon />,
          color: "#599EEA",
        };
        break;
      case "instagram":
        accumulator[index] = {
          ...item,
          icon: <InstagramIcon />,
          color: "#844FF6",
        };
        break;
      case "facebook":
        accumulator[index] = {
          ...item,
          icon: (
            <FacebookIcon
              size={18}
              style={{
                color: "#1877F2",
              }}
            />
          ),
          color: "#FAB70A",
        };
        break;
      case "linkedin":
        accumulator[index] = {
          ...item,
          icon: <LinkedInIcon />,
          color: "#0FB77A",
        };
        break;
      default:
        accumulator[index] = {
          ...item,
          icon: "",
          color: "#599EEA",
        };
        break;
    }
    return accumulator;
  }, [] as any);
};

export const colorArray = (referrals: IReferrals[]) => {
  if (!referrals || referrals?.length === 0) return ["#F09468"];
  return referrals?.reduce((accumulator, item) => {
    switch (item.source?.toLowerCase()) {
      case "google":
        accumulator = accumulator.concat("#599EEA");
        break;
      case "instagram":
        accumulator = accumulator.concat("#844FF6");
        break;
      case "facebook":
        accumulator = accumulator.concat("#FAB70A");
        break;
      case "linkedin":
        accumulator = accumulator.concat("#0FB77A");
        break;
      default:
        accumulator = [...accumulator];
        break;
    }
    return accumulator;
  }, [] as string[]);
};
