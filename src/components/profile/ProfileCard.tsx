import Image from "next/image";
import { FaDiscord, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import profile from "../../assets/profile.webp";
import { socials } from "../../resources/socials";
import { ProfileButton } from "./ProfileButton";

export default function ProfileCard() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Image
        src={profile}
        className="w-44 rounded-full border-[2px] border-gray-300"
        alt="Profile picture"
        draggable={false}
      />
      <div className="flex gap-3 items-center justify-center text-4xl max-[500px]:hidden">
        <Image
          src="https://flagcdn.com/w80/ve.png"
          className="rounded-sm"
          alt="Venezuela"
          draggable={false}
          width={40}
          height={27}
        />
        <div>•</div>
        <div>justcarlux</div>
        <div>•</div>
        <div className="text-2xl relative top-[1px]">he/they</div>
      </div>
      <div className="flex flex-col items-center justify-center text-4xl min-[500px]:hidden">
        <div className="flex flex-row items-center justify-center gap-4">
          <Image
            src="https://flagcdn.com/w80/ve.png"
            className="rounded-sm"
            alt="Venezuela"
            draggable={false}
            width={40}
            height={27}
          />
          <div>justcarlux</div>
        </div>
        <div className="text-2xl relative top-[1px]">he/they</div>
      </div>
      <div className="mx-5 text-center">
        <div className="text-lg">
          Full Stack Developer / Discord Bot Developer / Minecraft Plugin & Mod Developer
        </div>
        <div className="text-lg">This website is a work in progress!</div>
      </div>
      <ProfileButton
        label="GitHub"
        icon={<FaGithub size={24} />}
        action={{ type: "link", value: socials.github }}
      />
      <ProfileButton
        label="Twitter"
        icon={<FaXTwitter size={24} />}
        action={{ type: "link", value: socials.twitter }}
      />
      <ProfileButton
        label="Discord"
        icon={<FaDiscord size={24} />}
        action={{ type: "copy", value: socials.discord }}
      />
    </div>
  );
}
