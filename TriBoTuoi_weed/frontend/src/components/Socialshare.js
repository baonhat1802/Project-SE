import {
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon,
    EmailShareButton,
    EmailIcon,
} from 'react-share'

export const Facebookshare = ({ url, quotes, hashtag }) => {
    return (
        <>
            <FacebookShareButton
                url={url} //eg. https://www.example.com
                quotes={quotes} //"Your Quotes"
                hashtag={hashtag} // #hashTag
            >
                <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
        </>
    )
}

export const Twittershare = ({ url, quotes, hashtag }) => {
    return (
        <>
            <TwitterShareButton
                url={url} //eg. https://www.example.com
                quotes={quotes} //"Your Quotes"
                hashtag={hashtag} // #hashTag
            >
                <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
        </>
    )
}

export const Emailshare = ({ url, subject, body }) => {
    return (
        <>
            <EmailShareButton
                url={url} //eg. https://www.example.com
                subject={subject} //"Your Quotes"
                body={body} // #hashTag
            >
                <EmailIcon size={32} round={true} />
            </EmailShareButton>
        </>
    )
}