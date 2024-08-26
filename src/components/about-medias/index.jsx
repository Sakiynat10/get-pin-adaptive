"use client"
import {FacebookShareButton, TelegramShareButton} from "next-share";
import {useParams} from "next/navigation";
import {useState} from "react";

const AboutMedias = () => {
    const [copied, setCopied] = useState(false);
    const pathname = useParams();
    const id = pathname.about;

    const handleCopyLink = () => {
        const textToCopy = `https://get-pin.vercel.app/${id}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };
    return (
        <div className={"about-medias"}>
            <TelegramShareButton
                url={`https://get-pin.vercel.app/${id}`}
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#nextshare'
                }
            >
                <img src="/media-1.svg" />
            </TelegramShareButton>
            <FacebookShareButton
                url={`https://get-pin.vercel.app/${id}`}
                quote={'next-share is a social share buttons for your next React apps.'}
                hashtag={'#nextshare'}
            >
                <img src="/media-2.svg" />
            </FacebookShareButton>
            <a onClick={handleCopyLink} href="https://www.instagram.com/">
                <img src="/media-3.svg" alt="instagram" />
            </a>
            <button className="copy-img" onClick={handleCopyLink} >
                <img src="/copy.svg" alt="copy" />
            </button>
        </div>
    )
}

export default AboutMedias;