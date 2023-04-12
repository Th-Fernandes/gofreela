import { At, EnvelopeSimple, GenderFemale, GenderMale, MapPin, Phone, UserCircle } from "@phosphor-icons/react";
import { users } from "../types/users";


export function UserInfoCard({
  picture,
  name,
  gender,
  email,
  cell,
  phone,
  location,
  login
}:users) {
  return (
    <li className="bg-slate-300 rounded-2xl p-4 flex gap-4 hover:bg-slate-400 transition ease-out">
      <img src={picture.thumbnail} alt={`foto de ${name.first}`} className="w-16 h-16 rounded-[50%]" />

      <div>
        <div className="flex gap-1 items-center text-xl">
          <h2>{`${name.first} ${name.last}`}</h2>
          {gender === 'male' ? <GenderMale /> : <GenderFemale/>}
        </div>

        <ul>
          <li className="flex gap-1 items-center">
            <EnvelopeSimple weight="fill"/>
            <span className="break-all">{email}</span>
          </li>
          <li className="flex gap-1 items-center">
            <Phone weight="fill"/>
            <span>{`${phone} / ${cell}`}</span>
          </li>
          <li className="flex gap-1 items-center">
            <MapPin weight="fill"/>
            <span>{`${location.state}, ${location.city} - ${location.country}`}</span>
          </li>
          <li className="flex gap-1 items-center">
            <At weight="fill" />
            <span>{login.username}</span>
          </li>
        </ul>
      </div>
    </li>
  )
}