import moment from "moment";
import "./ProfileCard.css";

export const ProfileCard = ({user}) => {
    return (
        <section className="profile-card">
            <div className="profile-card__avatar">
                <img src={user.avatar_url} className="profile-card__image" alt="" />
                <div className="profile-card__info">
                    <h3 className="profile-card__name">{user.login}</h3>
                    <span className="profile-card__username">@{user.login}</span>
                    <p className="profile-card__date">Joined {moment(user.created_at).format('D MMM YYYY')}</p>
                </div>
            </div>
            <p className="profile-card__description">
                {user.bio ? user.bio : "No bio available"}
            </p>

            <div className="profile-card__stats">
                <div className="profile-card__stat">
                    <span className="title">Repos</span>
                    <span className="profile-card__value">{user.public_repos}</span>
                </div>
                <div className="profile-card__stat">
                    <span className="title">Followers</span>
                    <span className="profile-card__value">{user.followers}</span>
                </div>
                <div className="profile-card__stat">
                    <span className="title">Following</span>
                    <span className="profile-card__value">{user.following}</span>
                </div>
            </div>

            <div className="profile-card__links">
                <a href="" className="profile-card__link">
                    <img src="src/assets/images/icon-location.svg" alt="" />
                    <span>{user.location ? user.location : "Not Avalible"}</span>
                </a>

                <a href="" className="profile-card__link">
                    <img src="src/assets/images/icon-website.svg" alt="" />
                    <span>{user.html_url}</span>
                </a>

                <a href="" className="profile-card__link">
                    <img src="src/assets/images/icon-twitter.svg" alt="" />
                    <span>{user.twitter_username ? user.twitter_username : "Not Avalible"}</span>
                </a>

                <a href="" className="profile-card__link">
                    <img src="src/assets/images/icon-company.svg" alt="" />
                    <span>{user.company ? user-company : "Not Avalible" }</span>
                </a>
            </div>
        </section>

    )
}