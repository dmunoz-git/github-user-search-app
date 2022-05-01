import moment from "moment";
import { useMediaQuery } from "../../services/media";
import "./ProfileCard.css";
import iconCompany from "../../assets/images/icon-company.svg";
import iconLocation from "../../assets/images/icon-location.svg";
import iconTwitter from "../../assets/images/icon-twitter.svg";
import iconWebsite from "../../assets/images/icon-website.svg";

export const ProfileCard = ({user}) => {
    const matches = useMediaQuery('(max-width:777px)');

    return (
        <section className="profile-card">
            {
                matches ?
                <div className="profile-card__avatar">
                    <img src={user.avatar_url} className="profile-card__image" alt="" />
                    <div className="profile-card__info">
                        <div className="profile-card__data">
                        <h3 className="profile-card__name">{user.name}</h3>
                        <span className="profile-card__username">@{user.login}</span>
                        </div>     
                        <p className="profile-card__date">Joined {moment(user.created_at).format('D MMM YYYY')}</p>
                    </div>
                </div> :
                <img src={user.avatar_url} className="profile-card__image" alt="" />
            }
            
            <div className="profile-card__body">
                {
                    matches ?
                    "" :
                    <div className="profile-card__info">
                        <div className="profile-card__data">
                            <h3 className="profile-card__name">{user.name}</h3>
                            <span className="profile-card__username">@{user.login}</span>
                            </div>     
                        <p className="profile-card__date">Joined {moment(user.created_at).format('D MMM YYYY')}</p>
                    </div> 
                }
                <p className="profile-card__description">
                    {user.bio ? user.bio : "No bio available"}
                </p>
                <div className="profile-card__stats">
                    <div className="profile-card__stat">
                        <span className="profile-card__title">Repos</span>
                        <span className="profile-card__value">{user.public_repos}</span>
                    </div>
                    <div className="profile-card__stat">
                        <span className="profile-card__title">Followers</span>
                        <span className="profile-card__value">{user.followers}</span>
                    </div>
                    <div className="profile-card__stat">
                        <span className="profile-card__title">Following</span>
                        <span className="profile-card__value">{user.following}</span>
                    </div>
                </div>

                <div className="profile-card__links">
                    <a href={`https://www.google.com/maps/search/${user.location}`} className={user.location ? "profile-card__link" : "profile-card__link profile-card__link--disabled"}>
                        <img className="profile-card__icon" src={iconLocation} alt="" />
                        <span>{user.location ? user.location : "Not Avalible"}</span>
                    </a>

                    <a href={user.html_url} className="profile-card__link">
                        <img  className="profile-card__icon" src={iconWebsite} alt="" />
                        <span>{user.html_url}</span>
                    </a>

                    <a href={`https://www.twitter.com/${user.twitter_username}`} className={user.twitter_username ? "profile-card__link" : "profile-card__link profile-card__link--disabled"}>
                        <img  className="profile-card__icon" src={iconTwitter} alt="" />
                        <span>{user.twitter_username ? user.twitter_username : "Not Avalible"}</span>
                    </a>

                    <a href={`https://www.google.com/search?q=${user.company}`} className={user.company ? "profile-card__link" : "profile-card__link profile-card__link--disabled"}>
                        <img  className="profile-card__icon" src={iconCompany} alt="" />
                        <span>{user.company ? user.company : "Not Avalible" }</span>
                    </a>
                </div>
            </div>
            
        </section>

    )
}