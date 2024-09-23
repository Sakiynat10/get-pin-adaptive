"use client"
import "./style.scss"
import {useRouter} from "next/navigation";
const ProfileHeader = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };
    return(
        <div className={"profile-header"}>
            <img onClick={handleBack} src="/chevron-left.svg" alt="chevron-left"/>
            <h1>Profile</h1>
        </div>
    )
}
export default ProfileHeader