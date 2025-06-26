import type { User } from "../models/User"
import { IoMailOutline, IoPersonCircleOutline } from "react-icons/io5";
import { MdOutlineLocalPhone } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { FaRegBuilding, FaRegAddressCard } from "react-icons/fa";

type UserCardProps = {
    user: User
}

const UserCard = ({ user }: UserCardProps) => {
    return (
        <div className="flex flex-col justify-evenly m-4 w-[480px] h-[350px] bg-amber-50 rounded-xl shadow-lg">
            <div className="flex flex-row item-center ml-3">
                <IoPersonCircleOutline className="mt-1 mr-2" />
                <p>{user.name} {user.username}</p>
            </div>
            <hr />
            <div className="flex flex-row item-center ml-3">
                <a href={`mailto:${user.email}`}><IoMailOutline className="mt-1 mr-2" /> </a>
                <a href={`mailto:${user.email}`}><p>{user.email}</p></a>
            </div>
            <hr />
            <div className="flex flex-row item-center ml-3">
                <FaRegAddressCard className="mt-1 mr-2" />
                <p>Address : {user.address.city} / {user.address.street}-{user.address.suite}</p>
            </div>
            <hr />
            <div className="flex flex-row item-center ml-3">
                <MdOutlineLocalPhone className="mt-1 mr-2" />
                <p>{user.phone}</p>
            </div>
            <hr />
            <div className="flex flex-row item-center ml-3">
                <RiComputerLine className="mt-1 mr-2" />
                <a target="_blank" href={user.website}>{user.website} </a>
            </div>
            <hr />
            <div className="flex flex-row item-center ml-3">
                <FaRegBuilding className="mt-1 mr-2" />
                <p>{user.company.name} / {user.company.catchPhrase}</p>
            </div>
        </div>
    )
}

export default UserCard
