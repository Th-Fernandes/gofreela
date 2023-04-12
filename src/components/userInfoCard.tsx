import { At, EnvelopeSimple, GenderMale, MapPin, Phone, UserCircle } from "@phosphor-icons/react";

export function UserInfoCard() {
  return (
    <li className="bg-slate-300 rounded-2xl p-4 flex gap-4 hover:bg-slate-400 transition ease-out">
      <UserCircle size={64} />

      <div>
        <div className="flex gap-1 items-center text-xl">
          <h2>John Doe</h2>
          <GenderMale />
        </div>

        <ul>
          <li className="flex gap-1 items-center">
            <EnvelopeSimple weight="fill"/>
            <span>example@gmail.com</span>
          </li>
          <li className="flex gap-1 items-center">
            <Phone weight="fill"/>
            <span>063-4063-312 / 24-2639-535</span>
          </li>
          <li className="flex gap-1 items-center">
            <MapPin weight="fill"/>
            <span>Moravica, Rača - Serbia</span>
          </li>
          <li className="flex gap-1 items-center">
            <At weight="fill" />
            <span>silverpeacock290</span>
          </li>
        </ul>
      </div>
    </li>
  )
}